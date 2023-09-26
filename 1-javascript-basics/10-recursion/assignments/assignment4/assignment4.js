var index = 0;
var index2 = 0;
var buildUserInterface = function () {
    var mainWindow = {
        name: "MainWindow",
        width: 600,
        height: 400,
        children: [],
    };
    var buttonExit = {
        name: "ButtonExit",
        width: 100,
        height: 30,
        children: [],
    };
    mainWindow.children.push(buttonExit);
    var settingsWindow = {
        name: "SettingsWindow",
        width: 400,
        height: 300,
        children: [],
    };
    var buttonReturnToMenu = {
        name: "ButtonReturnToMenu",
        width: 100,
        height: 30,
        children: [],
    };
    settingsWindow.children.push(buttonReturnToMenu);
    mainWindow.children.push(settingsWindow);
    var profileWindow = {
        name: "ProfileWindow",
        width: 500,
        height: 400,
        children: [],
    };
    var profileInfoPanel = {
        name: "ProfileInfoPanel",
        width: 200,
        height: 200,
        children: [],
    };
    profileWindow.children.push(profileInfoPanel);
    mainWindow.children.push(profileWindow);
    return mainWindow;
};
var findControl = function (userInterfaceTree, destination) {
    if (!userInterfaceTree.children) {
        return null;
    }
    else {
        if (userInterfaceTree.children[index2] &&
            userInterfaceTree.children[index2].name === destination) {
            return userInterfaceTree.children[index2];
        }
        else {
            return null;
        }
    }
};
var userInterfaceTree = buildUserInterface();
var profileInfoPanel;
for (index; index < userInterfaceTree.children.length; index++) {
    profileInfoPanel = findControl(userInterfaceTree.children[index], "ProfileInfoPanel");
}
profileInfoPanel.width += 100;
console.log(profileInfoPanel); // prints { name: 'ProfileInfoPanel', width: 300, height: 200, children: [] }
