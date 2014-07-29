
//--------------------------------------------------
// システムハンドラを取得
//--------------------------------------------------
//get node webkit GUI
var gui = require('nw.gui');

// get the window object
var win = gui.Window.get();


//--------------------------------------------------
// メニューバーを作成
//--------------------------------------------------
var menubar = new gui.Menu({
  type: 'menubar'
});

//--------------------------------------------------
// 「ファイル」メニューを作成
//--------------------------------------------------
var file = new gui.Menu();

//プロジェクトファイルを開く
file.append(new gui.MenuItem({
  label: 'プロジェクトを開く',
  click: function() {
    alert('Open Clicked');
  }
}));

//プロジェクトファイルを保存する
file.append(new gui.MenuItem({
  label: 'プロジェクトを保存',
  click: function() {
    alert('Save Clicked');
  }
}));

//セパレータ
file.append(new gui.MenuItem({ type: 'separator' }));

//プロジェクトを終了する
file.append(new gui.MenuItem({
  label: '終了',
  click: function() {

    //TODO: プロジェクトが保存されているか確認する

    var win = gui.Window.get();
    win.hide(); // Pretend to be closed already
    console.log("We're closing...");
    win.close(true);
  }
}));

//--------------------------------------------------
// メニューを保存する
//--------------------------------------------------

// add the menubar to window/menu panel
win.menu = menubar;

// add the file menu to window/menu panel - menu
win.menu.insert(new gui.MenuItem({
  label: 'ファイル',
  submenu: file
}), 1);



