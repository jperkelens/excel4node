var test = require('tape');

var xl = require('../lib/index');

function makeStyle() {
    var wb = new xl.WorkBook();
    return wb.Style();
}

test('Style coverage', function (t) {
    t.plan(14);
    var style = makeStyle();
    t.ok(style.Font.Bold());
    t.ok(style.Font.Italics());
    t.ok(style.Font.Underline());
    t.ok(style.Font.Family('Arial'));
    t.ok(style.Font.Color('DDEEFF'));
    t.ok(style.Font.Size(12));
    t.ok(style.Font.WrapText());
    t.ok(style.Font.Alignment.Vertical('top'));
    t.ok(style.Font.Alignment.Horizontal('left'));
    t.ok(style.Font.Alignment.Rotation(15));
    t.ok(style.Number.Format('style'));
    t.ok(style.Fill.Color('DDEEFF'));
    t.ok(style.Fill.Pattern('solid'));
    t.ok(style.Border({
        top: {
            style: 'thin',
            color: 'CCCCCC'
        },
        bottom: {
            style: 'thick'
        },
        left: {
            style: 'thin'
        },
        right: {
            style: 'thin'
        }
    }));
});
