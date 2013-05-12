const Lang = imports.lang;

const NOTE_ORDER_TITLE = 0;
const NOTE_ORDER_UPDATED = 1;
const NOTE_ORDER_TITLE_DESC = 2;
const NOTE_ORDER_UPDATED_DESC = 3;

const EverpadNote = new Lang.Class({
    Name: 'EverpadNote',

    _init: function(data) {
        this.id = data[0];
        this.title = data[1];
        this.content = data[2];
        this.created = data[3];
        this.updated = data[4];
        this.notebook = data[5];
        this.tags = data[6];
        this.place = data[7];
        this.pinned = data[8];
        this.conflict_parent = data[9];
        this.conflict_items = data[10];
        this.share_date = data[11];
        this.share_url = data[12];
    }
});

const EverpadResource = new Lang.Class({
    Name: "EverpadResource",

    _init: function(data) {
        this.id = data[0];
        this.file_name = data[1];
        this.file_path = data[2];
        this.mime = data[3];
        this.hash = data[4];
    }
});
