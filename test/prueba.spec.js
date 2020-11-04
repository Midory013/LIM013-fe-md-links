const {fileExist,converPath,pathAbsolute,isValidateDirectory,isValidateFile, } = require('../src/index.js');
//const path = require('path');
//const ruta3 = './src/Directorios/notas.md'

//-----------------------------------  FILE EXIST  ---------------------------------------------------------
describe('fileExist', () => {
  it('deberia retornarme tru si existe', () => {
    expect(typeof fileExist).toBe('function');
  });
});

//----------------------------------  Path Absolute  -------------------------------------------------------
describe('¿La ruta es absoluta?', () => {
  it('deberia retornarme false si no es absoluta', () => {
    expect(pathAbsolute('README.MD')).toBe(false);
  });
  it('deberia retornarme true', () => {
    expect(pathAbsolute('C:\\Users\\republica del peru\\Desktop\\Bootcamp\\Labo\\LIM013-data-lovers')).toBe(true);
  });
});

//----------------------------------   converPath   --------------------------------------------------------
describe('¿La ruta es absoluta?', () => {
  it('deberia retornarme true si existe', () => {
    expect(typeof converPath).toBe('function');
  });
  it('deberia retornarme una ruta absoluta al pasarle una ruta absoluta', () => {
    expect(converPath('.\\test\\prueba\\test1\\path.md')).toBe('C:\\Users\\republica del peru\\Desktop\\Bootcamp\\Labo\\LIM013-fe-md-links\\test\\prueba\\test1\\path.md');
  });
});

//---------------------------------  isValidateDirectory   ------------------------------------------------
describe('isValidateDirectory', () => {
  it('Deberia retornarme una funcion si es una funcion', () => {
    expect(typeof isValidateDirectory).toBe('function');
  });
  it('deberia de retorname un booleano si la es un directorio', () => {
    expect(isValidateDirectory('test')).toBe(true);
  });
});

//------------------------------------  isValidateFile  ---------------------------------------------------
describe('isValidateFile', () => {
  it('Deberia retornarme una funcion si es una funcion', () => {
    expect(typeof isValidateFile).toBe('function');
  });
  it('deberia de retorname un booleano si la es un directorio', () => {
    expect(isValidateFile('README.md')).toBe(true);
  });
});

//------------------------------------  isFileTypeMd  ----------------------------------------------------
describe('isValidateFile', () => {
  it('Deberia retornarme una funcion si es una funcion', () => {
    expect(typeof isValidateFile).toBe('function');
  });
  it('deberia de retorname un booleano si la es un directorio', () => {
    expect(isValidateFile('README.md')).toBe(true);
  });
});