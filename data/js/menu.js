
//get node webkit GUI
var gui = require('nw.gui');

// get the window object
var win = gui.Window.get();

var menubar = new gui.Menu({
  type: 'menubar'
});

var file = new gui.Menu();
var subMenu = new gui.Menu();

file.append(new gui.MenuItem({
  label: 'Action 1',
  click: function() {
    alert('Action 1 Clicked');
  }
}));

file.append(new gui.MenuItem({
  label: '終了',
  click: function() {
    var win = gui.Window.get();
    win.hide(); // Pretend to be closed already
    console.log("We're closing...");
    win.close(true);
  }
}));


subMenu.append(new gui.MenuItem({
  label: 'SubMenu Action 1',
  click: function() {
    alert('SubMenu Action 1 Clicked');
  }
}));

subMenu.append(new gui.MenuItem({
  label: 'SubMenu Action 2',
  click: function() {
    alert('SubMenu Action 2 Clicked');
  }
}));

file.insert(new gui.MenuItem({
  label: 'Sub Action Menu',
  submenu: subMenu
}));

// add the menubar to window/menu panel
win.menu = menubar;

// add the file menu to window/menu panel - menu
win.menu.insert(new gui.MenuItem({
  label: 'ファイル',
  submenu: file
}), 1);



