// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations....!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('felonious-cpp-formatter.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from felonious-cpp-formatter!');
	});
	let disposable = vscode.languages.registerDocumentFormattingEditProvider(["c", "cpp"], 
		{
			provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
				let edits: vscode.TextEdit[] = new Array<vscode.TextEdit>();
				let maxLength : number = -1;
				for (let i : number = 0; i <= document.lineCount - 1; ++i) {
					const currentLine: vscode.TextLine = document.lineAt(i);
					if (currentLine.text.length > maxLength) {
						maxLength = currentLine.text.length;
					}
				}
				maxLength += 3;
				const tailFindingHelper : RegExp = new RegExp(/[\{\}\;]+$/, "m");
				const totalPatternFindingHelper : RegExp = new RegExp(/^(\s*)([\{\}\;]+)$/, "m");
				
				// This records line numbers which the newline preceding is removed
				const noNewLineLines : Set<number> = new Set<number>();
				for (let i : number = 0; i <= document.lineCount - 1; ++i) {
					const currentLine: vscode.TextLine = document.lineAt(i);
					const totalPatterns = totalPatternFindingHelper.exec(currentLine.text);
					if (totalPatterns !== null && i - 1 >= 0 && document.lineAt(i - 1).text.indexOf("//") === -1) {
						// Remove all whitespace preceding
						edits.push(vscode.TextEdit.delete(new vscode.Range(currentLine.range.start,
							currentLine.range.start.translate(0, totalPatterns[1] !== null ?totalPatterns[1].length:0))));
						// Then remove newline in the last line
						edits.push(new vscode.TextEdit(new vscode.Range(document.lineAt(i - 1).range.end, currentLine.range.start), ""));
						noNewLineLines.add(i);
					}
				}

				for (let i : number = 0; i <= document.lineCount - 1; ++i) {
					const currentLine: vscode.TextLine = document.lineAt(i);
					let lineLen: number = currentLine.text.length;
					const patterns = tailFindingHelper.exec(currentLine.text);
					//console.log(`Out: Line ${i + 1}, patterns ${patterns}`);

					// Only if the line is not processed in totalPatterns
					// do we do this process. Otherwise VSCode will concurrently 
					// do the edit and fuck up real bad
					if (!noNewLineLines.has(i)) {
						let patternLen: number = patterns !== null ? patterns[0].length : 0;
						//console.log(`Line ${i + 1}, pattern ${patterns[0]}`);
						// Pattern either detected or from next lines
						if (noNewLineLines.has(i + 1) || patternLen !== 0) {
							const newEdit = vscode.TextEdit.insert(currentLine.range.end.translate(0, -patternLen), 
																// If there are patterns, leave one space for them
																   " ".repeat(maxLength - lineLen - (patternLen !== 0 ? 0 : 1)));
							edits.push(newEdit); 
						}
					}
				}
				return edits;
			}
		}
	);

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable1);
}

// this method is called when your extension is deactivated
export function deactivate() {}
