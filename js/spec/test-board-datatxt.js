var pins = require('./helpers-pins-host').pins;
var test = require('./helpers-board-test');

describe('Board DataTxt', () => {
  const tempfile = pins.callbacks.get('tempfile');
  const board = 'simpletxt';
  const url = 'https://raw.githubusercontent.com/mlverse/pins/pins-js/js/spec/fixtures/datatxt/data.txt';

  it('can board_register() a datatxt board', async () => {
    await pins.boardRegister('datatxt', { name: board, url, cache: tempfile() });
    expect(pins.boardList().includes(board)).toBe(true);
  });

  it('can pin_get() iris from a datatxt board', async () => {
    const pin = await pins.pinGet('iris', { board });

    expect(pin.length).toBe(151);
    expect(pin[0].length).toBe(5);
  });

  it('can pin_find() mtcars_expr from a datatxt board', async () => {
    const result = await pins.pinFind('mtcars_expr', { board, metadata: true });

    expect(result.length).toBe(1);
    expect(result[0].metadata.rows).toBe(32);
    expect(result[0].metadata.cols).toBe(11);

    expect(typeof(result[0].metadata.rows)).toBe('number');
    expect(typeof(result[0].metadata.cols)).toBe('number');
  });

  xit('can board_deregister() a datatxt board', () => {
    pins.boardDeregister(board);

    expect(pins.boardList().includes(board)).toBe(false);
  });

  xit('can board_register() with URL and name', () => {
    const boardName = pins.boardRegister(url, { name: board, cache: tempfile() });

    expect(boardName).toBe(board);
    pins.boardDeregister(boardName);
  });

  xit('can board_register() with URL and no name', () => {
    const boardName = pins.boardRegister(url, { cache: tempfile() });

    expect(boardName).toBe('raw');
    pins.boardDeregister(boardName);
  });

  xit('can board_register() with URL, no name and data frame', () => {
    /*
    pins_path <- getOption("pins.path")
    on.exit(options(pins.path = pins_path))
    options(pins.path = tempfile())

    iris_pin <- pin_get("iris",
                        board = "https://raw.githubusercontent.com/rstudio/pins/master/tests/testthat/datatxt/data.txt")

    expect_equal(nrow(iris_pin), 150)
    */
  });
});
