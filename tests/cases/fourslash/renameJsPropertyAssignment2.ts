/// <reference path='fourslash.ts'/>

// @allowJs: true
// @Filename: a.js
////class Minimatch {
////}
////[|Minimatch.[|{| "declarationRangeIndex": 0 |}staticProperty|] = "string";|]
////console.log(Minimatch.[|staticProperty|]);

verify.rangesWithSameTextAreRenameLocations("staticProperty");
