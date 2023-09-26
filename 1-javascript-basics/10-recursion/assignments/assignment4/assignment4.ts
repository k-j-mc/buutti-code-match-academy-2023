let index: number = 0;
let index2: number = 0;

interface infoPanel {
	name: string;
	width: number;
	height: number;
	children: any[];
}

const buildUserInterface = () => {
	const mainWindow: infoPanel = {
		name: "MainWindow",
		width: 600,
		height: 400,
		children: [],
	};
	const buttonExit: infoPanel = {
		name: "ButtonExit",
		width: 100,
		height: 30,
		children: [],
	};
	mainWindow.children.push(buttonExit);

	const settingsWindow: infoPanel = {
		name: "SettingsWindow",
		width: 400,
		height: 300,
		children: [],
	};
	const buttonReturnToMenu: infoPanel = {
		name: "ButtonReturnToMenu",
		width: 100,
		height: 30,
		children: [],
	};
	settingsWindow.children.push(buttonReturnToMenu);
	mainWindow.children.push(settingsWindow);

	const profileWindow: infoPanel = {
		name: "ProfileWindow",
		width: 500,
		height: 400,
		children: [],
	};
	const profileInfoPanel: infoPanel = {
		name: "ProfileInfoPanel",
		width: 200,
		height: 200,
		children: [],
	};
	profileWindow.children.push(profileInfoPanel);
	mainWindow.children.push(profileWindow);

	return mainWindow;
};

const findControl = (userInterfaceTree: infoPanel, destination: string) => {
	if (!userInterfaceTree.children) {
		return null;
	} else {
		if (
			userInterfaceTree.children[index2] &&
			userInterfaceTree.children[index2].name === destination
		) {
			return userInterfaceTree.children[index2];
		} else {
			return null;
		}
	}
};

const userInterfaceTree = buildUserInterface();

let profileInfoPanel;

for (index; index < userInterfaceTree.children.length; index++) {
	profileInfoPanel = findControl(
		userInterfaceTree.children[index],
		"ProfileInfoPanel"
	);
}

profileInfoPanel.width += 100;
console.log(profileInfoPanel); // prints { name: 'ProfileInfoPanel', width: 300, height: 200, children: [] }
