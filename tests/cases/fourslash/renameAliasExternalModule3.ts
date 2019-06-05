/// <reference path='fourslash.ts'/>

// @Filename: a.ts
////module SomeModule { [|export class [|{| "declarationRangeIndex": 0 |}SomeClass|] { }|] }
////export = SomeModule;

// @Filename: b.ts
////import M = require("./a");
////import C = M.[|SomeClass|];

verify.rangesWithSameTextAreRenameLocations("SomeClass");
