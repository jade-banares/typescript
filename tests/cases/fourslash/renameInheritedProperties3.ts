﻿/// <reference path='fourslash.ts'/>

//// interface interface1 extends interface1 {
////    [|[|{| "declarationRangeIndex": 0 |}propName|]: string;|]
//// }
////
//// var v: interface1;
//// v.[|propName|];

verify.rangesWithSameTextAreRenameLocations("propName");
