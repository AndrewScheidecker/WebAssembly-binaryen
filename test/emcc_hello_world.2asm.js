function asmFunc(global, env, buffer) {
 "use asm";
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var abort = env.abort;
 var nullFunc_ii = env.nullFunc_ii;
 var nullFunc_iiii = env.nullFunc_iiii;
 var nullFunc_vi = env.nullFunc_vi;
 var _pthread_cleanup_pop = env._pthread_cleanup_pop;
 var ___lock = env.___lock;
 var _pthread_self = env._pthread_self;
 var _abort = env._abort;
 var ___syscall6 = env.___syscall6;
 var _sbrk = env._sbrk;
 var _time = env._time;
 var _emscripten_memcpy_big = env._emscripten_memcpy_big;
 var ___syscall54 = env.___syscall54;
 var ___unlock = env.___unlock;
 var ___syscall140 = env.___syscall140;
 var _pthread_cleanup_push = env._pthread_cleanup_push;
 var _sysconf = env._sysconf;
 var ___syscall146 = env.___syscall146;
 var f64_to_int = env.f64_to_int;
 function stackAlloc(size) {
  size = size | 0;
  var ret = 0, wasm2asm_i32$0 = 0;
  topmost : {
   ret = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + size | 0;
   HEAP32[8 >> 2] = ((HEAPU32[8 >> 2] | 0) + 15 | 0) & 4294967280 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   wasm2asm_i32$0 = ret;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function stackSave() {
  return HEAPU32[8 >> 2] | 0 | 0;
 }
 
 function stackRestore(top) {
  top = top | 0;
  HEAP32[8 >> 2] = top
 }
 
 function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase | 0;
  stackMax = stackMax | 0;
  block0 : {
   HEAP32[8 >> 2] = stackBase;
   HEAP32[16 >> 2] = stackMax;
  }
 }
 
 function setThrew(threw, value) {
  threw = threw | 0;
  value = value | 0;
  if ((HEAPU32[48 >> 2] | 0 | 0) == (0 | 0)) block0 : {
   HEAP32[48 >> 2] = threw;
   HEAP32[56 >> 2] = value;
  }
 }
 
 function copyTempFloat(ptr) {
  ptr = ptr | 0;
  block0 : {
   HEAP8[(HEAPU32[24 >> 2] | 0) >> 0] = HEAP8[ptr >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 1 | 0) >> 0] = HEAP8[(ptr + 1 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 2 | 0) >> 0] = HEAP8[(ptr + 2 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 3 | 0) >> 0] = HEAP8[(ptr + 3 | 0) >> 0] | 0;
  }
 }
 
 function copyTempDouble(ptr) {
  ptr = ptr | 0;
  block0 : {
   HEAP8[(HEAPU32[24 >> 2] | 0) >> 0] = HEAP8[ptr >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 1 | 0) >> 0] = HEAP8[(ptr + 1 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 2 | 0) >> 0] = HEAP8[(ptr + 2 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 3 | 0) >> 0] = HEAP8[(ptr + 3 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 4 | 0) >> 0] = HEAP8[(ptr + 4 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 5 | 0) >> 0] = HEAP8[(ptr + 5 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 6 | 0) >> 0] = HEAP8[(ptr + 6 | 0) >> 0] | 0;
   HEAP8[((HEAPU32[24 >> 2] | 0) + 7 | 0) >> 0] = HEAP8[(ptr + 7 | 0) >> 0] | 0;
  }
 }
 
 function setTempRet0(value) {
  value = value | 0;
  HEAP32[168 >> 2] = value
 }
 
 function getTempRet0() {
  return HEAPU32[168 >> 2] | 0 | 0;
 }
 
 function _main() {
  var $retval = 0, $vararg_buffer = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 16 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $vararg_buffer = sp;
   $retval = 0;
   _printf(672 | 0, $vararg_buffer | 0) | 0;
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _frexp($x, $e) {
  $x = +$x;
  $e = $e | 0;
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $call = 0.0, $conv = 0, $mul = 0.0, $retval$0 = 0.0, $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $x$addr$0 = 0.0, label = 0, sp = 0, wasm2asm_f64$0 = 0.0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAPF64[(HEAPU32[24 >> 2] | 0) >> 3] = $x;
   $0 = HEAPU32[(HEAPU32[24 >> 2] | 0) >> 2] | 0;
   $1 = HEAPU32[((HEAPU32[24 >> 2] | 0) + 4 | 0) >> 2] | 0;
   $2 = _bitshift64Lshr($0 | 0, $1 | 0, 52 | 0) | 0;
   $3 = HEAPU32[168 >> 2] | 0;
   $conv = $2 & 2047 | 0;
   switch$0 : {
    switch ($conv - 0 | 0) {
    case 0:
     block0 : {
      $tobool1 = $x != 0.0;
      if ($tobool1) block1 : {
       $mul = $x - 18446744073709551616.0;
       $call = +_frexp(+$mul, $e | 0);
       $4 = HEAPU32[$e >> 2] | 0;
       $sub = $4 + 4294967232 | 0;
       $storemerge = $sub;
       $x$addr$0 = $call;
      } else block2 : {
       $storemerge = 0;
       $x$addr$0 = $x;
      }
      HEAP32[$e >> 2] = $storemerge;
      $retval$0 = $x$addr$0;
      break switch$0;
     }
    case 2047:
     block3 : {
      $retval$0 = $x;
      break switch$0;
     }
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
    case 126:
    case 127:
    case 128:
    case 129:
    case 130:
    case 131:
    case 132:
    case 133:
    case 134:
    case 135:
    case 136:
    case 137:
    case 138:
    case 139:
    case 140:
    case 141:
    case 142:
    case 143:
    case 144:
    case 145:
    case 146:
    case 147:
    case 148:
    case 149:
    case 150:
    case 151:
    case 152:
    case 153:
    case 154:
    case 155:
    case 156:
    case 157:
    case 158:
    case 159:
    case 160:
    case 161:
    case 162:
    case 163:
    case 164:
    case 165:
    case 166:
    case 167:
    case 168:
    case 169:
    case 170:
    case 171:
    case 172:
    case 173:
    case 174:
    case 175:
    case 176:
    case 177:
    case 178:
    case 179:
    case 180:
    case 181:
    case 182:
    case 183:
    case 184:
    case 185:
    case 186:
    case 187:
    case 188:
    case 189:
    case 190:
    case 191:
    case 192:
    case 193:
    case 194:
    case 195:
    case 196:
    case 197:
    case 198:
    case 199:
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
    case 207:
    case 208:
    case 209:
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
    case 216:
    case 217:
    case 218:
    case 219:
    case 220:
    case 221:
    case 222:
    case 223:
    case 224:
    case 225:
    case 226:
    case 227:
    case 228:
    case 229:
    case 230:
    case 231:
    case 232:
    case 233:
    case 234:
    case 235:
    case 236:
    case 237:
    case 238:
    case 239:
    case 240:
    case 241:
    case 242:
    case 243:
    case 244:
    case 245:
    case 246:
    case 247:
    case 248:
    case 249:
    case 250:
    case 251:
    case 252:
    case 253:
    case 254:
    case 255:
    case 256:
    case 257:
    case 258:
    case 259:
    case 260:
    case 261:
    case 262:
    case 263:
    case 264:
    case 265:
    case 266:
    case 267:
    case 268:
    case 269:
    case 270:
    case 271:
    case 272:
    case 273:
    case 274:
    case 275:
    case 276:
    case 277:
    case 278:
    case 279:
    case 280:
    case 281:
    case 282:
    case 283:
    case 284:
    case 285:
    case 286:
    case 287:
    case 288:
    case 289:
    case 290:
    case 291:
    case 292:
    case 293:
    case 294:
    case 295:
    case 296:
    case 297:
    case 298:
    case 299:
    case 300:
    case 301:
    case 302:
    case 303:
    case 304:
    case 305:
    case 306:
    case 307:
    case 308:
    case 309:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 315:
    case 316:
    case 317:
    case 318:
    case 319:
    case 320:
    case 321:
    case 322:
    case 323:
    case 324:
    case 325:
    case 326:
    case 327:
    case 328:
    case 329:
    case 330:
    case 331:
    case 332:
    case 333:
    case 334:
    case 335:
    case 336:
    case 337:
    case 338:
    case 339:
    case 340:
    case 341:
    case 342:
    case 343:
    case 344:
    case 345:
    case 346:
    case 347:
    case 348:
    case 349:
    case 350:
    case 351:
    case 352:
    case 353:
    case 354:
    case 355:
    case 356:
    case 357:
    case 358:
    case 359:
    case 360:
    case 361:
    case 362:
    case 363:
    case 364:
    case 365:
    case 366:
    case 367:
    case 368:
    case 369:
    case 370:
    case 371:
    case 372:
    case 373:
    case 374:
    case 375:
    case 376:
    case 377:
    case 378:
    case 379:
    case 380:
    case 381:
    case 382:
    case 383:
    case 384:
    case 385:
    case 386:
    case 387:
    case 388:
    case 389:
    case 390:
    case 391:
    case 392:
    case 393:
    case 394:
    case 395:
    case 396:
    case 397:
    case 398:
    case 399:
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
    case 405:
    case 406:
    case 407:
    case 408:
    case 409:
    case 410:
    case 411:
    case 412:
    case 413:
    case 414:
    case 415:
    case 416:
    case 417:
    case 418:
    case 419:
    case 420:
    case 421:
    case 422:
    case 423:
    case 424:
    case 425:
    case 426:
    case 427:
    case 428:
    case 429:
    case 430:
    case 431:
    case 432:
    case 433:
    case 434:
    case 435:
    case 436:
    case 437:
    case 438:
    case 439:
    case 440:
    case 441:
    case 442:
    case 443:
    case 444:
    case 445:
    case 446:
    case 447:
    case 448:
    case 449:
    case 450:
    case 451:
    case 452:
    case 453:
    case 454:
    case 455:
    case 456:
    case 457:
    case 458:
    case 459:
    case 460:
    case 461:
    case 462:
    case 463:
    case 464:
    case 465:
    case 466:
    case 467:
    case 468:
    case 469:
    case 470:
    case 471:
    case 472:
    case 473:
    case 474:
    case 475:
    case 476:
    case 477:
    case 478:
    case 479:
    case 480:
    case 481:
    case 482:
    case 483:
    case 484:
    case 485:
    case 486:
    case 487:
    case 488:
    case 489:
    case 490:
    case 491:
    case 492:
    case 493:
    case 494:
    case 495:
    case 496:
    case 497:
    case 498:
    case 499:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 505:
    case 506:
    case 507:
    case 508:
    case 509:
    case 510:
    case 511:
    case 512:
    case 513:
    case 514:
    case 515:
    case 516:
    case 517:
    case 518:
    case 519:
    case 520:
    case 521:
    case 522:
    case 523:
    case 524:
    case 525:
    case 526:
    case 527:
    case 528:
    case 529:
    case 530:
    case 531:
    case 532:
    case 533:
    case 534:
    case 535:
    case 536:
    case 537:
    case 538:
    case 539:
    case 540:
    case 541:
    case 542:
    case 543:
    case 544:
    case 545:
    case 546:
    case 547:
    case 548:
    case 549:
    case 550:
    case 551:
    case 552:
    case 553:
    case 554:
    case 555:
    case 556:
    case 557:
    case 558:
    case 559:
    case 560:
    case 561:
    case 562:
    case 563:
    case 564:
    case 565:
    case 566:
    case 567:
    case 568:
    case 569:
    case 570:
    case 571:
    case 572:
    case 573:
    case 574:
    case 575:
    case 576:
    case 577:
    case 578:
    case 579:
    case 580:
    case 581:
    case 582:
    case 583:
    case 584:
    case 585:
    case 586:
    case 587:
    case 588:
    case 589:
    case 590:
    case 591:
    case 592:
    case 593:
    case 594:
    case 595:
    case 596:
    case 597:
    case 598:
    case 599:
    case 600:
    case 601:
    case 602:
    case 603:
    case 604:
    case 605:
    case 606:
    case 607:
    case 608:
    case 609:
    case 610:
    case 611:
    case 612:
    case 613:
    case 614:
    case 615:
    case 616:
    case 617:
    case 618:
    case 619:
    case 620:
    case 621:
    case 622:
    case 623:
    case 624:
    case 625:
    case 626:
    case 627:
    case 628:
    case 629:
    case 630:
    case 631:
    case 632:
    case 633:
    case 634:
    case 635:
    case 636:
    case 637:
    case 638:
    case 639:
    case 640:
    case 641:
    case 642:
    case 643:
    case 644:
    case 645:
    case 646:
    case 647:
    case 648:
    case 649:
    case 650:
    case 651:
    case 652:
    case 653:
    case 654:
    case 655:
    case 656:
    case 657:
    case 658:
    case 659:
    case 660:
    case 661:
    case 662:
    case 663:
    case 664:
    case 665:
    case 666:
    case 667:
    case 668:
    case 669:
    case 670:
    case 671:
    case 672:
    case 673:
    case 674:
    case 675:
    case 676:
    case 677:
    case 678:
    case 679:
    case 680:
    case 681:
    case 682:
    case 683:
    case 684:
    case 685:
    case 686:
    case 687:
    case 688:
    case 689:
    case 690:
    case 691:
    case 692:
    case 693:
    case 694:
    case 695:
    case 696:
    case 697:
    case 698:
    case 699:
    case 700:
    case 701:
    case 702:
    case 703:
    case 704:
    case 705:
    case 706:
    case 707:
    case 708:
    case 709:
    case 710:
    case 711:
    case 712:
    case 713:
    case 714:
    case 715:
    case 716:
    case 717:
    case 718:
    case 719:
    case 720:
    case 721:
    case 722:
    case 723:
    case 724:
    case 725:
    case 726:
    case 727:
    case 728:
    case 729:
    case 730:
    case 731:
    case 732:
    case 733:
    case 734:
    case 735:
    case 736:
    case 737:
    case 738:
    case 739:
    case 740:
    case 741:
    case 742:
    case 743:
    case 744:
    case 745:
    case 746:
    case 747:
    case 748:
    case 749:
    case 750:
    case 751:
    case 752:
    case 753:
    case 754:
    case 755:
    case 756:
    case 757:
    case 758:
    case 759:
    case 760:
    case 761:
    case 762:
    case 763:
    case 764:
    case 765:
    case 766:
    case 767:
    case 768:
    case 769:
    case 770:
    case 771:
    case 772:
    case 773:
    case 774:
    case 775:
    case 776:
    case 777:
    case 778:
    case 779:
    case 780:
    case 781:
    case 782:
    case 783:
    case 784:
    case 785:
    case 786:
    case 787:
    case 788:
    case 789:
    case 790:
    case 791:
    case 792:
    case 793:
    case 794:
    case 795:
    case 796:
    case 797:
    case 798:
    case 799:
    case 800:
    case 801:
    case 802:
    case 803:
    case 804:
    case 805:
    case 806:
    case 807:
    case 808:
    case 809:
    case 810:
    case 811:
    case 812:
    case 813:
    case 814:
    case 815:
    case 816:
    case 817:
    case 818:
    case 819:
    case 820:
    case 821:
    case 822:
    case 823:
    case 824:
    case 825:
    case 826:
    case 827:
    case 828:
    case 829:
    case 830:
    case 831:
    case 832:
    case 833:
    case 834:
    case 835:
    case 836:
    case 837:
    case 838:
    case 839:
    case 840:
    case 841:
    case 842:
    case 843:
    case 844:
    case 845:
    case 846:
    case 847:
    case 848:
    case 849:
    case 850:
    case 851:
    case 852:
    case 853:
    case 854:
    case 855:
    case 856:
    case 857:
    case 858:
    case 859:
    case 860:
    case 861:
    case 862:
    case 863:
    case 864:
    case 865:
    case 866:
    case 867:
    case 868:
    case 869:
    case 870:
    case 871:
    case 872:
    case 873:
    case 874:
    case 875:
    case 876:
    case 877:
    case 878:
    case 879:
    case 880:
    case 881:
    case 882:
    case 883:
    case 884:
    case 885:
    case 886:
    case 887:
    case 888:
    case 889:
    case 890:
    case 891:
    case 892:
    case 893:
    case 894:
    case 895:
    case 896:
    case 897:
    case 898:
    case 899:
    case 900:
    case 901:
    case 902:
    case 903:
    case 904:
    case 905:
    case 906:
    case 907:
    case 908:
    case 909:
    case 910:
    case 911:
    case 912:
    case 913:
    case 914:
    case 915:
    case 916:
    case 917:
    case 918:
    case 919:
    case 920:
    case 921:
    case 922:
    case 923:
    case 924:
    case 925:
    case 926:
    case 927:
    case 928:
    case 929:
    case 930:
    case 931:
    case 932:
    case 933:
    case 934:
    case 935:
    case 936:
    case 937:
    case 938:
    case 939:
    case 940:
    case 941:
    case 942:
    case 943:
    case 944:
    case 945:
    case 946:
    case 947:
    case 948:
    case 949:
    case 950:
    case 951:
    case 952:
    case 953:
    case 954:
    case 955:
    case 956:
    case 957:
    case 958:
    case 959:
    case 960:
    case 961:
    case 962:
    case 963:
    case 964:
    case 965:
    case 966:
    case 967:
    case 968:
    case 969:
    case 970:
    case 971:
    case 972:
    case 973:
    case 974:
    case 975:
    case 976:
    case 977:
    case 978:
    case 979:
    case 980:
    case 981:
    case 982:
    case 983:
    case 984:
    case 985:
    case 986:
    case 987:
    case 988:
    case 989:
    case 990:
    case 991:
    case 992:
    case 993:
    case 994:
    case 995:
    case 996:
    case 997:
    case 998:
    case 999:
    case 1e3:
    case 1001:
    case 1002:
    case 1003:
    case 1004:
    case 1005:
    case 1006:
    case 1007:
    case 1008:
    case 1009:
    case 1010:
    case 1011:
    case 1012:
    case 1013:
    case 1014:
    case 1015:
    case 1016:
    case 1017:
    case 1018:
    case 1019:
    case 1020:
    case 1021:
    case 1022:
    case 1023:
    case 1024:
    case 1025:
    case 1026:
    case 1027:
    case 1028:
    case 1029:
    case 1030:
    case 1031:
    case 1032:
    case 1033:
    case 1034:
    case 1035:
    case 1036:
    case 1037:
    case 1038:
    case 1039:
    case 1040:
    case 1041:
    case 1042:
    case 1043:
    case 1044:
    case 1045:
    case 1046:
    case 1047:
    case 1048:
    case 1049:
    case 1050:
    case 1051:
    case 1052:
    case 1053:
    case 1054:
    case 1055:
    case 1056:
    case 1057:
    case 1058:
    case 1059:
    case 1060:
    case 1061:
    case 1062:
    case 1063:
    case 1064:
    case 1065:
    case 1066:
    case 1067:
    case 1068:
    case 1069:
    case 1070:
    case 1071:
    case 1072:
    case 1073:
    case 1074:
    case 1075:
    case 1076:
    case 1077:
    case 1078:
    case 1079:
    case 1080:
    case 1081:
    case 1082:
    case 1083:
    case 1084:
    case 1085:
    case 1086:
    case 1087:
    case 1088:
    case 1089:
    case 1090:
    case 1091:
    case 1092:
    case 1093:
    case 1094:
    case 1095:
    case 1096:
    case 1097:
    case 1098:
    case 1099:
    case 1100:
    case 1101:
    case 1102:
    case 1103:
    case 1104:
    case 1105:
    case 1106:
    case 1107:
    case 1108:
    case 1109:
    case 1110:
    case 1111:
    case 1112:
    case 1113:
    case 1114:
    case 1115:
    case 1116:
    case 1117:
    case 1118:
    case 1119:
    case 1120:
    case 1121:
    case 1122:
    case 1123:
    case 1124:
    case 1125:
    case 1126:
    case 1127:
    case 1128:
    case 1129:
    case 1130:
    case 1131:
    case 1132:
    case 1133:
    case 1134:
    case 1135:
    case 1136:
    case 1137:
    case 1138:
    case 1139:
    case 1140:
    case 1141:
    case 1142:
    case 1143:
    case 1144:
    case 1145:
    case 1146:
    case 1147:
    case 1148:
    case 1149:
    case 1150:
    case 1151:
    case 1152:
    case 1153:
    case 1154:
    case 1155:
    case 1156:
    case 1157:
    case 1158:
    case 1159:
    case 1160:
    case 1161:
    case 1162:
    case 1163:
    case 1164:
    case 1165:
    case 1166:
    case 1167:
    case 1168:
    case 1169:
    case 1170:
    case 1171:
    case 1172:
    case 1173:
    case 1174:
    case 1175:
    case 1176:
    case 1177:
    case 1178:
    case 1179:
    case 1180:
    case 1181:
    case 1182:
    case 1183:
    case 1184:
    case 1185:
    case 1186:
    case 1187:
    case 1188:
    case 1189:
    case 1190:
    case 1191:
    case 1192:
    case 1193:
    case 1194:
    case 1195:
    case 1196:
    case 1197:
    case 1198:
    case 1199:
    case 1200:
    case 1201:
    case 1202:
    case 1203:
    case 1204:
    case 1205:
    case 1206:
    case 1207:
    case 1208:
    case 1209:
    case 1210:
    case 1211:
    case 1212:
    case 1213:
    case 1214:
    case 1215:
    case 1216:
    case 1217:
    case 1218:
    case 1219:
    case 1220:
    case 1221:
    case 1222:
    case 1223:
    case 1224:
    case 1225:
    case 1226:
    case 1227:
    case 1228:
    case 1229:
    case 1230:
    case 1231:
    case 1232:
    case 1233:
    case 1234:
    case 1235:
    case 1236:
    case 1237:
    case 1238:
    case 1239:
    case 1240:
    case 1241:
    case 1242:
    case 1243:
    case 1244:
    case 1245:
    case 1246:
    case 1247:
    case 1248:
    case 1249:
    case 1250:
    case 1251:
    case 1252:
    case 1253:
    case 1254:
    case 1255:
    case 1256:
    case 1257:
    case 1258:
    case 1259:
    case 1260:
    case 1261:
    case 1262:
    case 1263:
    case 1264:
    case 1265:
    case 1266:
    case 1267:
    case 1268:
    case 1269:
    case 1270:
    case 1271:
    case 1272:
    case 1273:
    case 1274:
    case 1275:
    case 1276:
    case 1277:
    case 1278:
    case 1279:
    case 1280:
    case 1281:
    case 1282:
    case 1283:
    case 1284:
    case 1285:
    case 1286:
    case 1287:
    case 1288:
    case 1289:
    case 1290:
    case 1291:
    case 1292:
    case 1293:
    case 1294:
    case 1295:
    case 1296:
    case 1297:
    case 1298:
    case 1299:
    case 1300:
    case 1301:
    case 1302:
    case 1303:
    case 1304:
    case 1305:
    case 1306:
    case 1307:
    case 1308:
    case 1309:
    case 1310:
    case 1311:
    case 1312:
    case 1313:
    case 1314:
    case 1315:
    case 1316:
    case 1317:
    case 1318:
    case 1319:
    case 1320:
    case 1321:
    case 1322:
    case 1323:
    case 1324:
    case 1325:
    case 1326:
    case 1327:
    case 1328:
    case 1329:
    case 1330:
    case 1331:
    case 1332:
    case 1333:
    case 1334:
    case 1335:
    case 1336:
    case 1337:
    case 1338:
    case 1339:
    case 1340:
    case 1341:
    case 1342:
    case 1343:
    case 1344:
    case 1345:
    case 1346:
    case 1347:
    case 1348:
    case 1349:
    case 1350:
    case 1351:
    case 1352:
    case 1353:
    case 1354:
    case 1355:
    case 1356:
    case 1357:
    case 1358:
    case 1359:
    case 1360:
    case 1361:
    case 1362:
    case 1363:
    case 1364:
    case 1365:
    case 1366:
    case 1367:
    case 1368:
    case 1369:
    case 1370:
    case 1371:
    case 1372:
    case 1373:
    case 1374:
    case 1375:
    case 1376:
    case 1377:
    case 1378:
    case 1379:
    case 1380:
    case 1381:
    case 1382:
    case 1383:
    case 1384:
    case 1385:
    case 1386:
    case 1387:
    case 1388:
    case 1389:
    case 1390:
    case 1391:
    case 1392:
    case 1393:
    case 1394:
    case 1395:
    case 1396:
    case 1397:
    case 1398:
    case 1399:
    case 1400:
    case 1401:
    case 1402:
    case 1403:
    case 1404:
    case 1405:
    case 1406:
    case 1407:
    case 1408:
    case 1409:
    case 1410:
    case 1411:
    case 1412:
    case 1413:
    case 1414:
    case 1415:
    case 1416:
    case 1417:
    case 1418:
    case 1419:
    case 1420:
    case 1421:
    case 1422:
    case 1423:
    case 1424:
    case 1425:
    case 1426:
    case 1427:
    case 1428:
    case 1429:
    case 1430:
    case 1431:
    case 1432:
    case 1433:
    case 1434:
    case 1435:
    case 1436:
    case 1437:
    case 1438:
    case 1439:
    case 1440:
    case 1441:
    case 1442:
    case 1443:
    case 1444:
    case 1445:
    case 1446:
    case 1447:
    case 1448:
    case 1449:
    case 1450:
    case 1451:
    case 1452:
    case 1453:
    case 1454:
    case 1455:
    case 1456:
    case 1457:
    case 1458:
    case 1459:
    case 1460:
    case 1461:
    case 1462:
    case 1463:
    case 1464:
    case 1465:
    case 1466:
    case 1467:
    case 1468:
    case 1469:
    case 1470:
    case 1471:
    case 1472:
    case 1473:
    case 1474:
    case 1475:
    case 1476:
    case 1477:
    case 1478:
    case 1479:
    case 1480:
    case 1481:
    case 1482:
    case 1483:
    case 1484:
    case 1485:
    case 1486:
    case 1487:
    case 1488:
    case 1489:
    case 1490:
    case 1491:
    case 1492:
    case 1493:
    case 1494:
    case 1495:
    case 1496:
    case 1497:
    case 1498:
    case 1499:
    case 1500:
    case 1501:
    case 1502:
    case 1503:
    case 1504:
    case 1505:
    case 1506:
    case 1507:
    case 1508:
    case 1509:
    case 1510:
    case 1511:
    case 1512:
    case 1513:
    case 1514:
    case 1515:
    case 1516:
    case 1517:
    case 1518:
    case 1519:
    case 1520:
    case 1521:
    case 1522:
    case 1523:
    case 1524:
    case 1525:
    case 1526:
    case 1527:
    case 1528:
    case 1529:
    case 1530:
    case 1531:
    case 1532:
    case 1533:
    case 1534:
    case 1535:
    case 1536:
    case 1537:
    case 1538:
    case 1539:
    case 1540:
    case 1541:
    case 1542:
    case 1543:
    case 1544:
    case 1545:
    case 1546:
    case 1547:
    case 1548:
    case 1549:
    case 1550:
    case 1551:
    case 1552:
    case 1553:
    case 1554:
    case 1555:
    case 1556:
    case 1557:
    case 1558:
    case 1559:
    case 1560:
    case 1561:
    case 1562:
    case 1563:
    case 1564:
    case 1565:
    case 1566:
    case 1567:
    case 1568:
    case 1569:
    case 1570:
    case 1571:
    case 1572:
    case 1573:
    case 1574:
    case 1575:
    case 1576:
    case 1577:
    case 1578:
    case 1579:
    case 1580:
    case 1581:
    case 1582:
    case 1583:
    case 1584:
    case 1585:
    case 1586:
    case 1587:
    case 1588:
    case 1589:
    case 1590:
    case 1591:
    case 1592:
    case 1593:
    case 1594:
    case 1595:
    case 1596:
    case 1597:
    case 1598:
    case 1599:
    case 1600:
    case 1601:
    case 1602:
    case 1603:
    case 1604:
    case 1605:
    case 1606:
    case 1607:
    case 1608:
    case 1609:
    case 1610:
    case 1611:
    case 1612:
    case 1613:
    case 1614:
    case 1615:
    case 1616:
    case 1617:
    case 1618:
    case 1619:
    case 1620:
    case 1621:
    case 1622:
    case 1623:
    case 1624:
    case 1625:
    case 1626:
    case 1627:
    case 1628:
    case 1629:
    case 1630:
    case 1631:
    case 1632:
    case 1633:
    case 1634:
    case 1635:
    case 1636:
    case 1637:
    case 1638:
    case 1639:
    case 1640:
    case 1641:
    case 1642:
    case 1643:
    case 1644:
    case 1645:
    case 1646:
    case 1647:
    case 1648:
    case 1649:
    case 1650:
    case 1651:
    case 1652:
    case 1653:
    case 1654:
    case 1655:
    case 1656:
    case 1657:
    case 1658:
    case 1659:
    case 1660:
    case 1661:
    case 1662:
    case 1663:
    case 1664:
    case 1665:
    case 1666:
    case 1667:
    case 1668:
    case 1669:
    case 1670:
    case 1671:
    case 1672:
    case 1673:
    case 1674:
    case 1675:
    case 1676:
    case 1677:
    case 1678:
    case 1679:
    case 1680:
    case 1681:
    case 1682:
    case 1683:
    case 1684:
    case 1685:
    case 1686:
    case 1687:
    case 1688:
    case 1689:
    case 1690:
    case 1691:
    case 1692:
    case 1693:
    case 1694:
    case 1695:
    case 1696:
    case 1697:
    case 1698:
    case 1699:
    case 1700:
    case 1701:
    case 1702:
    case 1703:
    case 1704:
    case 1705:
    case 1706:
    case 1707:
    case 1708:
    case 1709:
    case 1710:
    case 1711:
    case 1712:
    case 1713:
    case 1714:
    case 1715:
    case 1716:
    case 1717:
    case 1718:
    case 1719:
    case 1720:
    case 1721:
    case 1722:
    case 1723:
    case 1724:
    case 1725:
    case 1726:
    case 1727:
    case 1728:
    case 1729:
    case 1730:
    case 1731:
    case 1732:
    case 1733:
    case 1734:
    case 1735:
    case 1736:
    case 1737:
    case 1738:
    case 1739:
    case 1740:
    case 1741:
    case 1742:
    case 1743:
    case 1744:
    case 1745:
    case 1746:
    case 1747:
    case 1748:
    case 1749:
    case 1750:
    case 1751:
    case 1752:
    case 1753:
    case 1754:
    case 1755:
    case 1756:
    case 1757:
    case 1758:
    case 1759:
    case 1760:
    case 1761:
    case 1762:
    case 1763:
    case 1764:
    case 1765:
    case 1766:
    case 1767:
    case 1768:
    case 1769:
    case 1770:
    case 1771:
    case 1772:
    case 1773:
    case 1774:
    case 1775:
    case 1776:
    case 1777:
    case 1778:
    case 1779:
    case 1780:
    case 1781:
    case 1782:
    case 1783:
    case 1784:
    case 1785:
    case 1786:
    case 1787:
    case 1788:
    case 1789:
    case 1790:
    case 1791:
    case 1792:
    case 1793:
    case 1794:
    case 1795:
    case 1796:
    case 1797:
    case 1798:
    case 1799:
    case 1800:
    case 1801:
    case 1802:
    case 1803:
    case 1804:
    case 1805:
    case 1806:
    case 1807:
    case 1808:
    case 1809:
    case 1810:
    case 1811:
    case 1812:
    case 1813:
    case 1814:
    case 1815:
    case 1816:
    case 1817:
    case 1818:
    case 1819:
    case 1820:
    case 1821:
    case 1822:
    case 1823:
    case 1824:
    case 1825:
    case 1826:
    case 1827:
    case 1828:
    case 1829:
    case 1830:
    case 1831:
    case 1832:
    case 1833:
    case 1834:
    case 1835:
    case 1836:
    case 1837:
    case 1838:
    case 1839:
    case 1840:
    case 1841:
    case 1842:
    case 1843:
    case 1844:
    case 1845:
    case 1846:
    case 1847:
    case 1848:
    case 1849:
    case 1850:
    case 1851:
    case 1852:
    case 1853:
    case 1854:
    case 1855:
    case 1856:
    case 1857:
    case 1858:
    case 1859:
    case 1860:
    case 1861:
    case 1862:
    case 1863:
    case 1864:
    case 1865:
    case 1866:
    case 1867:
    case 1868:
    case 1869:
    case 1870:
    case 1871:
    case 1872:
    case 1873:
    case 1874:
    case 1875:
    case 1876:
    case 1877:
    case 1878:
    case 1879:
    case 1880:
    case 1881:
    case 1882:
    case 1883:
    case 1884:
    case 1885:
    case 1886:
    case 1887:
    case 1888:
    case 1889:
    case 1890:
    case 1891:
    case 1892:
    case 1893:
    case 1894:
    case 1895:
    case 1896:
    case 1897:
    case 1898:
    case 1899:
    case 1900:
    case 1901:
    case 1902:
    case 1903:
    case 1904:
    case 1905:
    case 1906:
    case 1907:
    case 1908:
    case 1909:
    case 1910:
    case 1911:
    case 1912:
    case 1913:
    case 1914:
    case 1915:
    case 1916:
    case 1917:
    case 1918:
    case 1919:
    case 1920:
    case 1921:
    case 1922:
    case 1923:
    case 1924:
    case 1925:
    case 1926:
    case 1927:
    case 1928:
    case 1929:
    case 1930:
    case 1931:
    case 1932:
    case 1933:
    case 1934:
    case 1935:
    case 1936:
    case 1937:
    case 1938:
    case 1939:
    case 1940:
    case 1941:
    case 1942:
    case 1943:
    case 1944:
    case 1945:
    case 1946:
    case 1947:
    case 1948:
    case 1949:
    case 1950:
    case 1951:
    case 1952:
    case 1953:
    case 1954:
    case 1955:
    case 1956:
    case 1957:
    case 1958:
    case 1959:
    case 1960:
    case 1961:
    case 1962:
    case 1963:
    case 1964:
    case 1965:
    case 1966:
    case 1967:
    case 1968:
    case 1969:
    case 1970:
    case 1971:
    case 1972:
    case 1973:
    case 1974:
    case 1975:
    case 1976:
    case 1977:
    case 1978:
    case 1979:
    case 1980:
    case 1981:
    case 1982:
    case 1983:
    case 1984:
    case 1985:
    case 1986:
    case 1987:
    case 1988:
    case 1989:
    case 1990:
    case 1991:
    case 1992:
    case 1993:
    case 1994:
    case 1995:
    case 1996:
    case 1997:
    case 1998:
    case 1999:
    case 2e3:
    case 2001:
    case 2002:
    case 2003:
    case 2004:
    case 2005:
    case 2006:
    case 2007:
    case 2008:
    case 2009:
    case 2010:
    case 2011:
    case 2012:
    case 2013:
    case 2014:
    case 2015:
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
    case 2021:
    case 2022:
    case 2023:
    case 2024:
    case 2025:
    case 2026:
    case 2027:
    case 2028:
    case 2029:
    case 2030:
    case 2031:
    case 2032:
    case 2033:
    case 2034:
    case 2035:
    case 2036:
    case 2037:
    case 2038:
    case 2039:
    case 2040:
    case 2041:
    case 2042:
    case 2043:
    case 2044:
    case 2045:
    case 2046:
    default:
     block4 : {
      $sub8 = $conv + 4294966274 | 0;
      HEAP32[$e >> 2] = $sub8;
      $5 = $1 & 2148532223 | 0;
      $6 = $5 | 1071644672 | 0;
      HEAP32[(HEAPU32[24 >> 2] | 0) >> 2] = $0;
      HEAP32[((HEAPU32[24 >> 2] | 0) + 4 | 0) >> 2] = $6;
      $7 = +HEAPF64[(HEAPU32[24 >> 2] | 0) >> 3];
      $retval$0 = $7;
     }
    }
   }
   wasm2asm_f64$0 = $retval$0;
  }
  return +wasm2asm_f64$0;
 }
 
 function _frexpl($x, $e) {
  $x = +$x;
  $e = $e | 0;
  var $call = 0.0, label = 0, sp = 0, wasm2asm_f64$0 = 0.0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $call = +_frexp(+$x, $e | 0);
   wasm2asm_f64$0 = $call;
  }
  return +wasm2asm_f64$0;
 }
 
 function _strerror($e) {
  $e = $e | 0;
  var $0 = 0, $1 = 0, $arrayidx = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$012$lcssa = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $incdec$ptr$lcssa = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool5$9 = 0, $tobool8 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $i$012 = 0;
   while_out$0 : do block0 : {
    $arrayidx = 687 + $i$012 | 0;
    $0 = HEAP8[$arrayidx >> 0] | 0;
    $conv = $0 & 255 | 0;
    $cmp = ($conv | 0) == ($e | 0);
    if ($cmp) block1 : {
     $i$012$lcssa = $i$012;
     label = 2;
     break while_out$0;
    }
    $inc = $i$012 + 1 | 0;
    $tobool = ($inc | 0) == (87 | 0);
    if ($tobool) block2 : {
     $i$111 = 87;
     $s$010 = 775;
     label = 5;
     break while_out$0;
    } else $i$012 = $inc;
    continue while_out$0;
   } while (0);
   if ((label | 0) == (2 | 0)) block3 : {
    $tobool5$9 = ($i$012$lcssa | 0) == (0 | 0);
    if ($tobool5$9) $s$0$lcssa = 775; else block4 : {
     $i$111 = $i$012$lcssa;
     $s$010 = 775;
     label = 5;
    }
   }
   if ((label | 0) == (5 | 0)) while_out$2 : do block5 : {
    label = 0;
    $s$1 = $s$010;
    while_out$4 : do block6 : {
     $1 = HEAP8[$s$1 >> 0] | 0;
     $tobool8 = (($1 << 24 | 0) >> 24 | 0 | 0) == (0 | 0);
     $incdec$ptr = $s$1 + 1 | 0;
     if ($tobool8) block7 : {
      $incdec$ptr$lcssa = $incdec$ptr;
      break while_out$4;
     } else $s$1 = $incdec$ptr;
     continue while_out$4;
    } while (0);
    $dec = $i$111 + 4294967295 | 0;
    $tobool5 = ($dec | 0) == (0 | 0);
    if ($tobool5) block8 : {
     $s$0$lcssa = $incdec$ptr$lcssa;
     break while_out$2;
    } else block9 : {
     $i$111 = $dec;
     $s$010 = $incdec$ptr$lcssa;
     label = 5;
    }
    continue while_out$2;
   } while (0);
   wasm2asm_i32$0 = $s$0$lcssa;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___errno_location() {
  var $0 = 0, $1 = 0, $call$i = 0, $errno_ptr = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $0 = HEAPU32[16 >> 2] | 0;
   $tobool = ($0 | 0) == (0 | 0);
   if ($tobool) $retval$0 = 60; else block0 : {
    $call$i = _pthread_self() | 0;
    $errno_ptr = $call$i + 60 | 0;
    $1 = HEAPU32[$errno_ptr >> 2] | 0;
    $retval$0 = $1;
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___stdio_close($f) {
  $f = $f | 0;
  var $0 = 0, $call = 0, $call1 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 16 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $vararg_buffer = sp;
   $fd = $f + 60 | 0;
   $0 = HEAPU32[$fd >> 2] | 0;
   HEAP32[$vararg_buffer >> 2] = $0;
   $call = ___syscall6(6 | 0, $vararg_buffer | 0) | 0;
   $call1 = ___syscall_ret($call | 0) | 0;
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $call1;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___stdout_write($f, $buf, $len) {
  $f = $f | 0;
  $buf = $buf | 0;
  $len = $len | 0;
  var $0 = 0, $1 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tio = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 80 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $vararg_buffer = sp;
   $tio = sp + 12 | 0;
   $write = $f + 36 | 0;
   HEAP32[$write >> 2] = 4;
   $0 = HEAPU32[$f >> 2] | 0;
   $and = $0 & 64 | 0;
   $tobool = ($and | 0) == (0 | 0);
   if ($tobool) block0 : {
    $fd = $f + 60 | 0;
    $1 = HEAPU32[$fd >> 2] | 0;
    HEAP32[$vararg_buffer >> 2] = $1;
    $vararg_ptr1 = $vararg_buffer + 4 | 0;
    HEAP32[$vararg_ptr1 >> 2] = 21505;
    $vararg_ptr2 = $vararg_buffer + 8 | 0;
    HEAP32[$vararg_ptr2 >> 2] = $tio;
    $call = ___syscall54(54 | 0, $vararg_buffer | 0) | 0;
    $tobool2 = ($call | 0) == (0 | 0);
    if (($tobool2 | 0) == (0 | 0)) block1 : {
     $lbf = $f + 75 | 0;
     HEAP8[$lbf >> 0] = 4294967295;
    }
   }
   $call3 = ___stdio_write($f | 0, $buf | 0, $len | 0) | 0;
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $call3;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___stdio_seek($f, $off, $whence) {
  $f = $f | 0;
  $off = $off | 0;
  $whence = $whence | 0;
  var $$pre = 0, $0 = 0, $1 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 32 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $vararg_buffer = sp;
   $ret = sp + 20 | 0;
   $fd = $f + 60 | 0;
   $0 = HEAPU32[$fd >> 2] | 0;
   HEAP32[$vararg_buffer >> 2] = $0;
   $vararg_ptr1 = $vararg_buffer + 4 | 0;
   HEAP32[$vararg_ptr1 >> 2] = 0;
   $vararg_ptr2 = $vararg_buffer + 8 | 0;
   HEAP32[$vararg_ptr2 >> 2] = $off;
   $vararg_ptr3 = $vararg_buffer + 12 | 0;
   HEAP32[$vararg_ptr3 >> 2] = $ret;
   $vararg_ptr4 = $vararg_buffer + 16 | 0;
   HEAP32[$vararg_ptr4 >> 2] = $whence;
   $call = ___syscall140(140 | 0, $vararg_buffer | 0) | 0;
   $call1 = ___syscall_ret($call | 0) | 0;
   $cmp = ($call1 | 0) < (0 | 0);
   if ($cmp) block0 : {
    HEAP32[$ret >> 2] = 4294967295;
    $1 = 4294967295;
   } else block1 : {
    $$pre = HEAPU32[$ret >> 2] | 0;
    $1 = $$pre;
   }
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $1;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _fflush($f) {
  $f = $f | 0;
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call1$18 = 0, $call16 = 0, $call22 = 0, $call7 = 0, $cmp = 0, $cmp14 = 0, $cmp20 = 0, $cond10 = 0, $cond19 = 0, $f$addr$0 = 0, $f$addr$0$19 = 0, $f$addr$022 = 0, $lock = 0, $lock13 = 0, $next = 0, $or = 0, $phitmp = 0, $r$0$lcssa = 0, $r$021 = 0, $r$1 = 0, $retval$0 = 0, $tobool = 0, $tobool11 = 0, $tobool11$20 = 0, $tobool24 = 0, $tobool5 = 0, $wbase = 0, $wpos = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $tobool = ($f | 0) == (0 | 0);
   do_once$0 : {
    if ($tobool) block0 : {
     $1 = HEAPU32[12 >> 2] | 0;
     $tobool5 = ($1 | 0) == (0 | 0);
     if ($tobool5) $cond10 = 0; else block1 : {
      $2 = HEAPU32[12 >> 2] | 0;
      $call7 = _fflush($2 | 0) | 0;
      $cond10 = $call7;
     }
     ___lock(44 | 0);
     $f$addr$0$19 = HEAPU32[40 >> 2] | 0;
     $tobool11$20 = ($f$addr$0$19 | 0) == (0 | 0);
     if ($tobool11$20) $r$0$lcssa = $cond10; else block2 : {
      $f$addr$022 = $f$addr$0$19;
      $r$021 = $cond10;
      while_out$1 : do block3 : {
       $lock13 = $f$addr$022 + 76 | 0;
       $3 = HEAPU32[$lock13 >> 2] | 0;
       $cmp14 = ($3 | 0) > (4294967295 | 0);
       if ($cmp14) block4 : {
        $call16 = ___lockfile($f$addr$022 | 0) | 0;
        $cond19 = $call16;
       } else $cond19 = 0;
       $wpos = $f$addr$022 + 20 | 0;
       $4 = HEAPU32[$wpos >> 2] | 0;
       $wbase = $f$addr$022 + 28 | 0;
       $5 = HEAPU32[$wbase >> 2] | 0;
       $cmp20 = ($4 >>> 0 | 0) >>> 0 > ($5 >>> 0 | 0) >>> 0;
       if ($cmp20) block5 : {
        $call22 = ___fflush_unlocked($f$addr$022 | 0) | 0;
        $or = $call22 | $r$021 | 0;
        $r$1 = $or;
       } else $r$1 = $r$021;
       $tobool24 = ($cond19 | 0) == (0 | 0);
       if (($tobool24 | 0) == (0 | 0)) ___unlockfile($f$addr$022 | 0);
       $next = $f$addr$022 + 56 | 0;
       $f$addr$0 = HEAPU32[$next >> 2] | 0;
       $tobool11 = ($f$addr$0 | 0) == (0 | 0);
       if ($tobool11) block6 : {
        $r$0$lcssa = $r$1;
        break while_out$1;
       } else block7 : {
        $f$addr$022 = $f$addr$0;
        $r$021 = $r$1;
       }
       continue while_out$1;
      } while (0);
     }
     ___unlock(44 | 0);
     $retval$0 = $r$0$lcssa;
    } else block8 : {
     $lock = $f + 76 | 0;
     $0 = HEAPU32[$lock >> 2] | 0;
     $cmp = ($0 | 0) > (4294967295 | 0);
     if (($cmp | 0) == (0 | 0)) block9 : {
      $call1$18 = ___fflush_unlocked($f | 0) | 0;
      $retval$0 = $call1$18;
      break do_once$0;
     }
     $call = ___lockfile($f | 0) | 0;
     $phitmp = ($call | 0) == (0 | 0);
     $call1 = ___fflush_unlocked($f | 0) | 0;
     if ($phitmp) $retval$0 = $call1; else block10 : {
      ___unlockfile($f | 0);
      $retval$0 = $call1;
     }
    }
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _printf($fmt, $varargs) {
  $fmt = $fmt | 0;
  $varargs = $varargs | 0;
  var $0 = 0, $ap = 0, $call = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 16 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $ap = sp;
   HEAP32[$ap >> 2] = $varargs;
   $0 = HEAPU32[8 >> 2] | 0;
   $call = _vfprintf($0 | 0, $fmt | 0, $ap | 0) | 0;
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $call;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___lockfile($f) {
  $f = $f | 0;
  var label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   wasm2asm_i32$0 = 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___unlockfile($f) {
  $f = $f | 0;
  var label = 0, sp = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   break topmost;
  }
 }
 
 function ___stdio_write($f, $buf, $len) {
  $f = $f | 0;
  $buf = $buf | 0;
  $len = $len | 0;
  var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr41 = 0, $add$ptr46 = 0, $buf31 = 0, $buf_size = 0, $call = 0, $call10 = 0, $call7 = 0, $call9 = 0, $cmp = 0, $cmp17 = 0, $cmp22 = 0, $cmp29 = 0, $cmp38 = 0, $cnt$0 = 0, $cnt$1 = 0, $dec = 0, $fd8 = 0, $incdec$ptr = 0, $iov$0 = 0, $iov$0$lcssa57 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len24 = 0, $iov_len28 = 0, $iov_len3 = 0, $iov_len50 = 0, $iov_len50$phi$trans$insert = 0, $iovcnt$0 = 0, $iovcnt$0$lcssa58 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$0 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub26 = 0, $sub36 = 0, $sub51 = 0, $tobool = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend19 = 0, $wpos = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 48 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $vararg_buffer3 = sp + 16 | 0;
   $vararg_buffer = sp;
   $iovs = sp + 32 | 0;
   $wbase = $f + 28 | 0;
   $0 = HEAPU32[$wbase >> 2] | 0;
   HEAP32[$iovs >> 2] = $0;
   $iov_len = $iovs + 4 | 0;
   $wpos = $f + 20 | 0;
   $1 = HEAPU32[$wpos >> 2] | 0;
   $sub$ptr$sub = $1 - $0 | 0;
   HEAP32[$iov_len >> 2] = $sub$ptr$sub;
   $iov_base2 = $iovs + 8 | 0;
   HEAP32[$iov_base2 >> 2] = $buf;
   $iov_len3 = $iovs + 12 | 0;
   HEAP32[$iov_len3 >> 2] = $len;
   $add = $sub$ptr$sub + $len | 0;
   $fd8 = $f + 60 | 0;
   $buf31 = $f + 44 | 0;
   $iov$0 = $iovs;
   $iovcnt$0 = 2;
   $rem$0 = $add;
   while_out$0 : do block0 : {
    $2 = HEAPU32[16 >> 2] | 0;
    $tobool = ($2 | 0) == (0 | 0);
    if ($tobool) block1 : {
     $4 = HEAPU32[$fd8 >> 2] | 0;
     HEAP32[$vararg_buffer3 >> 2] = $4;
     $vararg_ptr6 = $vararg_buffer3 + 4 | 0;
     HEAP32[$vararg_ptr6 >> 2] = $iov$0;
     $vararg_ptr7 = $vararg_buffer3 + 8 | 0;
     HEAP32[$vararg_ptr7 >> 2] = $iovcnt$0;
     $call9 = ___syscall146(146 | 0, $vararg_buffer3 | 0) | 0;
     $call10 = ___syscall_ret($call9 | 0) | 0;
     $cnt$0 = $call10;
    } else block2 : {
     _pthread_cleanup_push(5 | 0, $f | 0);
     $3 = HEAPU32[$fd8 >> 2] | 0;
     HEAP32[$vararg_buffer >> 2] = $3;
     $vararg_ptr1 = $vararg_buffer + 4 | 0;
     HEAP32[$vararg_ptr1 >> 2] = $iov$0;
     $vararg_ptr2 = $vararg_buffer + 8 | 0;
     HEAP32[$vararg_ptr2 >> 2] = $iovcnt$0;
     $call = ___syscall146(146 | 0, $vararg_buffer | 0) | 0;
     $call7 = ___syscall_ret($call | 0) | 0;
     _pthread_cleanup_pop(0 | 0);
     $cnt$0 = $call7;
    }
    $cmp = ($rem$0 | 0) == ($cnt$0 | 0);
    if ($cmp) block3 : {
     label = 6;
     break while_out$0;
    }
    $cmp17 = ($cnt$0 | 0) < (0 | 0);
    if ($cmp17) block4 : {
     $iov$0$lcssa57 = $iov$0;
     $iovcnt$0$lcssa58 = $iovcnt$0;
     label = 8;
     break while_out$0;
    }
    $sub26 = $rem$0 - $cnt$0 | 0;
    $iov_len28 = $iov$0 + 4 | 0;
    $10 = HEAPU32[$iov_len28 >> 2] | 0;
    $cmp29 = ($cnt$0 >>> 0 | 0) >>> 0 > ($10 >>> 0 | 0) >>> 0;
    if ($cmp29) block5 : {
     $11 = HEAPU32[$buf31 >> 2] | 0;
     HEAP32[$wbase >> 2] = $11;
     HEAP32[$wpos >> 2] = $11;
     $sub36 = $cnt$0 - $10 | 0;
     $incdec$ptr = $iov$0 + 8 | 0;
     $dec = $iovcnt$0 + 4294967295 | 0;
     $iov_len50$phi$trans$insert = $iov$0 + 12 | 0;
     $$pre = HEAPU32[$iov_len50$phi$trans$insert >> 2] | 0;
     $14 = $$pre;
     $cnt$1 = $sub36;
     $iov$1 = $incdec$ptr;
     $iovcnt$1 = $dec;
    } else block6 : {
     $cmp38 = ($iovcnt$0 | 0) == (2 | 0);
     if ($cmp38) block7 : {
      $12 = HEAPU32[$wbase >> 2] | 0;
      $add$ptr41 = $12 + $cnt$0 | 0;
      HEAP32[$wbase >> 2] = $add$ptr41;
      $14 = $10;
      $cnt$1 = $cnt$0;
      $iov$1 = $iov$0;
      $iovcnt$1 = 2;
     } else block8 : {
      $14 = $10;
      $cnt$1 = $cnt$0;
      $iov$1 = $iov$0;
      $iovcnt$1 = $iovcnt$0;
     }
    }
    $13 = HEAPU32[$iov$1 >> 2] | 0;
    $add$ptr46 = $13 + $cnt$1 | 0;
    HEAP32[$iov$1 >> 2] = $add$ptr46;
    $iov_len50 = $iov$1 + 4 | 0;
    $sub51 = $14 - $cnt$1 | 0;
    HEAP32[$iov_len50 >> 2] = $sub51;
    $iov$0 = $iov$1;
    $iovcnt$0 = $iovcnt$1;
    $rem$0 = $sub26;
    continue while_out$0;
   } while (0);
   if ((label | 0) == (6 | 0)) block9 : {
    $5 = HEAPU32[$buf31 >> 2] | 0;
    $buf_size = $f + 48 | 0;
    $6 = HEAPU32[$buf_size >> 2] | 0;
    $add$ptr = $5 + $6 | 0;
    $wend = $f + 16 | 0;
    HEAP32[$wend >> 2] = $add$ptr;
    $7 = $5;
    HEAP32[$wbase >> 2] = $7;
    HEAP32[$wpos >> 2] = $7;
    $retval$0 = $len;
   } else if ((label | 0) == (8 | 0)) block10 : {
    $wend19 = $f + 16 | 0;
    HEAP32[$wend19 >> 2] = 0;
    HEAP32[$wbase >> 2] = 0;
    HEAP32[$wpos >> 2] = 0;
    $8 = HEAPU32[$f >> 2] | 0;
    $or = $8 | 32 | 0;
    HEAP32[$f >> 2] = $or;
    $cmp22 = ($iovcnt$0$lcssa58 | 0) == (2 | 0);
    if ($cmp22) $retval$0 = 0; else block11 : {
     $iov_len24 = $iov$0$lcssa57 + 4 | 0;
     $9 = HEAPU32[$iov_len24 >> 2] | 0;
     $sub = $len - $9 | 0;
     $retval$0 = $sub;
    }
   }
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _vfprintf($f, $fmt, $ap) {
  $f = $f | 0;
  $fmt = $fmt | 0;
  $ap = $ap | 0;
  var $$call21 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $and36 = 0, $ap2 = 0, $buf = 0, $buf_size = 0, $call = 0, $call21 = 0, $call21$30 = 0, $call6 = 0, $cmp = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $internal_buf = 0, $lock = 0, $mode = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $ret$1 = 0, $ret$1$ = 0, $retval$0 = 0, $tobool = 0, $tobool22 = 0, $tobool26 = 0, $tobool37 = 0, $tobool41 = 0, $vacopy_currentptr = 0, $wbase = 0, $wend = 0, $wpos = 0, $write = 0, dest = 0, label = 0, sp = 0, stop = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 224 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $ap2 = sp + 120 | 0;
   $nl_type = sp + 80 | 0;
   $nl_arg = sp;
   $internal_buf = sp + 136 | 0;
   dest = $nl_type;
   stop = dest + 40 | 0;
   do_out$0 : do block0 : {
    HEAP32[dest >> 2] = 0;
    dest = dest + 4 | 0;
    if ((dest | 0) < (stop | 0)) continue do_out$0;
   } while (0);
   $vacopy_currentptr = HEAPU32[$ap >> 2] | 0;
   HEAP32[$ap2 >> 2] = $vacopy_currentptr;
   $call = _printf_core(0 | 0, $fmt | 0, $ap2 | 0, $nl_arg | 0, $nl_type | 0) | 0;
   $cmp = ($call | 0) < (0 | 0);
   if ($cmp) $retval$0 = 4294967295; else block1 : {
    $lock = $f + 76 | 0;
    $0 = HEAPU32[$lock >> 2] | 0;
    $cmp5 = ($0 | 0) > (4294967295 | 0);
    if ($cmp5) block2 : {
     $call6 = ___lockfile($f | 0) | 0;
     $cond = $call6;
    } else $cond = 0;
    $1 = HEAPU32[$f >> 2] | 0;
    $and = $1 & 32 | 0;
    $mode = $f + 74 | 0;
    $2 = HEAP8[$mode >> 0] | 0;
    $cmp7 = (($2 << 24 | 0) >> 24 | 0 | 0) < (1 | 0);
    if ($cmp7) block3 : {
     $and11 = $1 & 4294967263 | 0;
     HEAP32[$f >> 2] = $and11;
    }
    $buf_size = $f + 48 | 0;
    $3 = HEAPU32[$buf_size >> 2] | 0;
    $tobool = ($3 | 0) == (0 | 0);
    if ($tobool) block4 : {
     $buf = $f + 44 | 0;
     $4 = HEAPU32[$buf >> 2] | 0;
     HEAP32[$buf >> 2] = $internal_buf;
     $wbase = $f + 28 | 0;
     HEAP32[$wbase >> 2] = $internal_buf;
     $wpos = $f + 20 | 0;
     HEAP32[$wpos >> 2] = $internal_buf;
     HEAP32[$buf_size >> 2] = 80;
     $add$ptr = $internal_buf + 80 | 0;
     $wend = $f + 16 | 0;
     HEAP32[$wend >> 2] = $add$ptr;
     $call21 = _printf_core($f | 0, $fmt | 0, $ap2 | 0, $nl_arg | 0, $nl_type | 0) | 0;
     $tobool22 = ($4 | 0) == (0 | 0);
     if ($tobool22) $ret$1 = $call21; else block5 : {
      $write = $f + 36 | 0;
      $5 = HEAPU32[$write >> 2] | 0;
      FUNCTION_TABLE_iiii[(($5 & 7 | 0) + 2 | 0) & 31]($f | 0, 0 | 0, 0 | 0) | 0;
      $6 = HEAPU32[$wpos >> 2] | 0;
      $tobool26 = ($6 | 0) == (0 | 0);
      if ($tobool26) wasm2asm_i32$1 = 4294967295; else wasm2asm_i32$1 = $call21;
      $$call21 = wasm2asm_i32$1;
      HEAP32[$buf >> 2] = $4;
      HEAP32[$buf_size >> 2] = 0;
      HEAP32[$wend >> 2] = 0;
      HEAP32[$wbase >> 2] = 0;
      HEAP32[$wpos >> 2] = 0;
      $ret$1 = $$call21;
     }
    } else block6 : {
     $call21$30 = _printf_core($f | 0, $fmt | 0, $ap2 | 0, $nl_arg | 0, $nl_type | 0) | 0;
     $ret$1 = $call21$30;
    }
    $7 = HEAPU32[$f >> 2] | 0;
    $and36 = $7 & 32 | 0;
    $tobool37 = ($and36 | 0) == (0 | 0);
    if ($tobool37) wasm2asm_i32$1 = $ret$1; else wasm2asm_i32$1 = 4294967295;
    $ret$1$ = wasm2asm_i32$1;
    $or = $7 | $and | 0;
    HEAP32[$f >> 2] = $or;
    $tobool41 = ($cond | 0) == (0 | 0);
    if (($tobool41 | 0) == (0 | 0)) ___unlockfile($f | 0);
    $retval$0 = $ret$1$;
   }
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___fwritex($s, $l, $f) {
  $s = $s | 0;
  $l = $l | 0;
  $f = $f | 0;
  var $$pre = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $call4 = 0, $cmp = 0, $cmp11 = 0, $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $i$0$lcssa36 = 0, $i$1 = 0, $l$addr$0 = 0, $lbf = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $wend = $f + 16 | 0;
   $0 = HEAPU32[$wend >> 2] | 0;
   $tobool = ($0 | 0) == (0 | 0);
   if ($tobool) block0 : {
    $call = ___towrite($f | 0) | 0;
    $tobool1 = ($call | 0) == (0 | 0);
    if ($tobool1) block1 : {
     $$pre = HEAPU32[$wend >> 2] | 0;
     $3 = $$pre;
     label = 5;
    } else $retval$0 = 0;
   } else block2 : {
    $1 = $0;
    $3 = $1;
    label = 5;
   }
   label$break$L5 : {
    if ((label | 0) == (5 | 0)) block3 : {
     $wpos = $f + 20 | 0;
     $2 = HEAPU32[$wpos >> 2] | 0;
     $sub$ptr$sub = $3 - $2 | 0;
     $cmp = ($sub$ptr$sub >>> 0 | 0) >>> 0 < ($l >>> 0 | 0) >>> 0;
     $4 = $2;
     if ($cmp) block4 : {
      $write = $f + 36 | 0;
      $5 = HEAPU32[$write >> 2] | 0;
      $call4 = FUNCTION_TABLE_iiii[(($5 & 7 | 0) + 2 | 0) & 31]($f | 0, $s | 0, $l | 0) | 0;
      $retval$0 = $call4;
      break label$break$L5;
     }
     $lbf = $f + 75 | 0;
     $6 = HEAP8[$lbf >> 0] | 0;
     $cmp6 = (($6 << 24 | 0) >> 24 | 0 | 0) > (4294967295 | 0);
     label$break$L10 : {
      if ($cmp6) block5 : {
       $i$0 = $l;
       while_out$0 : do block6 : {
        $tobool9 = ($i$0 | 0) == (0 | 0);
        if ($tobool9) block7 : {
         $9 = $4;
         $i$1 = 0;
         $l$addr$0 = $l;
         $s$addr$0 = $s;
         break label$break$L10;
        }
        $sub = $i$0 + 4294967295 | 0;
        $arrayidx = $s + $sub | 0;
        $7 = HEAP8[$arrayidx >> 0] | 0;
        $cmp11 = (($7 << 24 | 0) >> 24 | 0 | 0) == (10 | 0);
        if ($cmp11) block8 : {
         $i$0$lcssa36 = $i$0;
         break while_out$0;
        } else $i$0 = $sub;
        continue while_out$0;
       } while (0);
       $write15 = $f + 36 | 0;
       $8 = HEAPU32[$write15 >> 2] | 0;
       $call16 = FUNCTION_TABLE_iiii[(($8 & 7 | 0) + 2 | 0) & 31]($f | 0, $s | 0, $i$0$lcssa36 | 0) | 0;
       $cmp17 = ($call16 >>> 0 | 0) >>> 0 < ($i$0$lcssa36 >>> 0 | 0) >>> 0;
       if ($cmp17) block9 : {
        $retval$0 = $i$0$lcssa36;
        break label$break$L5;
       }
       $add$ptr = $s + $i$0$lcssa36 | 0;
       $sub21 = $l - $i$0$lcssa36 | 0;
       $$pre31 = HEAPU32[$wpos >> 2] | 0;
       $9 = $$pre31;
       $i$1 = $i$0$lcssa36;
       $l$addr$0 = $sub21;
       $s$addr$0 = $add$ptr;
      } else block10 : {
       $9 = $4;
       $i$1 = 0;
       $l$addr$0 = $l;
       $s$addr$0 = $s;
      }
     }
     _memcpy($9 | 0, $s$addr$0 | 0, $l$addr$0 | 0) | 0;
     $10 = HEAPU32[$wpos >> 2] | 0;
     $add$ptr26 = $10 + $l$addr$0 | 0;
     HEAP32[$wpos >> 2] = $add$ptr26;
     $add = $i$1 + $l$addr$0 | 0;
     $retval$0 = $add;
    }
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___towrite($f) {
  $f = $f | 0;
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $mode = $f + 74 | 0;
   $0 = HEAP8[$mode >> 0] | 0;
   $conv = ($0 << 24 | 0) >> 24 | 0;
   $sub = $conv + 255 | 0;
   $or = $sub | $conv | 0;
   $conv3 = $or & 255 | 0;
   HEAP8[$mode >> 0] = $conv3;
   $1 = HEAPU32[$f >> 2] | 0;
   $and = $1 & 8 | 0;
   $tobool = ($and | 0) == (0 | 0);
   if ($tobool) block0 : {
    $rend = $f + 8 | 0;
    HEAP32[$rend >> 2] = 0;
    $rpos = $f + 4 | 0;
    HEAP32[$rpos >> 2] = 0;
    $buf = $f + 44 | 0;
    $2 = HEAPU32[$buf >> 2] | 0;
    $wbase = $f + 28 | 0;
    HEAP32[$wbase >> 2] = $2;
    $wpos = $f + 20 | 0;
    HEAP32[$wpos >> 2] = $2;
    $3 = $2;
    $buf_size = $f + 48 | 0;
    $4 = HEAPU32[$buf_size >> 2] | 0;
    $add$ptr = $3 + $4 | 0;
    $wend = $f + 16 | 0;
    HEAP32[$wend >> 2] = $add$ptr;
    $retval$0 = 0;
   } else block1 : {
    $or5 = $1 | 32 | 0;
    HEAP32[$f >> 2] = $or5;
    $retval$0 = 4294967295;
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _wcrtomb($s, $wc, $st) {
  $s = $s | 0;
  $wc = $wc | 0;
  $st = $st | 0;
  var $0 = 0, $and = 0, $and19 = 0, $and23 = 0, $and36 = 0, $and41 = 0, $and45 = 0, $call = 0, $cmp = 0, $cmp11 = 0, $cmp2 = 0, $cmp28 = 0, $cmp9 = 0, $conv = 0, $conv16 = 0, $conv21 = 0, $conv25 = 0, $conv33 = 0, $conv38 = 0, $conv43 = 0, $conv47 = 0, $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $incdec$ptr22 = 0, $incdec$ptr34 = 0, $incdec$ptr39 = 0, $incdec$ptr44 = 0, $or = 0, $or$cond = 0, $or15 = 0, $or20 = 0, $or24 = 0, $or32 = 0, $or37 = 0, $or42 = 0, $or46 = 0, $or6 = 0, $retval$0 = 0, $shr$28 = 0, $shr14$26 = 0, $shr18$27 = 0, $shr31$23 = 0, $shr35$24 = 0, $shr40$25 = 0, $sub27 = 0, $tobool = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $tobool = ($s | 0) == (0 | 0);
   do_once$0 : {
    if ($tobool) $retval$0 = 1; else block0 : {
     $cmp = ($wc >>> 0 | 0) >>> 0 < 128 >>> 0;
     if ($cmp) block1 : {
      $conv = $wc & 255 | 0;
      HEAP8[$s >> 0] = $conv;
      $retval$0 = 1;
      break do_once$0;
     }
     $cmp2 = ($wc >>> 0 | 0) >>> 0 < 2048 >>> 0;
     if ($cmp2) block2 : {
      $shr$28 = $wc >>> 6 | 0;
      $or = $shr$28 | 192 | 0;
      $conv5 = $or & 255 | 0;
      $incdec$ptr = $s + 1 | 0;
      HEAP8[$s >> 0] = $conv5;
      $and = $wc & 63 | 0;
      $or6 = $and | 128 | 0;
      $conv7 = $or6 & 255 | 0;
      HEAP8[$incdec$ptr >> 0] = $conv7;
      $retval$0 = 2;
      break do_once$0;
     }
     $cmp9 = ($wc >>> 0 | 0) >>> 0 < 55296 >>> 0;
     $0 = $wc & 4294959104 | 0;
     $cmp11 = ($0 | 0) == (57344 | 0);
     $or$cond = $cmp9 | $cmp11 | 0;
     if ($or$cond) block3 : {
      $shr14$26 = $wc >>> 12 | 0;
      $or15 = $shr14$26 | 224 | 0;
      $conv16 = $or15 & 255 | 0;
      $incdec$ptr17 = $s + 1 | 0;
      HEAP8[$s >> 0] = $conv16;
      $shr18$27 = $wc >>> 6 | 0;
      $and19 = $shr18$27 & 63 | 0;
      $or20 = $and19 | 128 | 0;
      $conv21 = $or20 & 255 | 0;
      $incdec$ptr22 = $s + 2 | 0;
      HEAP8[$incdec$ptr17 >> 0] = $conv21;
      $and23 = $wc & 63 | 0;
      $or24 = $and23 | 128 | 0;
      $conv25 = $or24 & 255 | 0;
      HEAP8[$incdec$ptr22 >> 0] = $conv25;
      $retval$0 = 3;
      break do_once$0;
     }
     $sub27 = $wc + 4294901760 | 0;
     $cmp28 = ($sub27 >>> 0 | 0) >>> 0 < 1048576 >>> 0;
     if ($cmp28) block4 : {
      $shr31$23 = $wc >>> 18 | 0;
      $or32 = $shr31$23 | 240 | 0;
      $conv33 = $or32 & 255 | 0;
      $incdec$ptr34 = $s + 1 | 0;
      HEAP8[$s >> 0] = $conv33;
      $shr35$24 = $wc >>> 12 | 0;
      $and36 = $shr35$24 & 63 | 0;
      $or37 = $and36 | 128 | 0;
      $conv38 = $or37 & 255 | 0;
      $incdec$ptr39 = $s + 2 | 0;
      HEAP8[$incdec$ptr34 >> 0] = $conv38;
      $shr40$25 = $wc >>> 6 | 0;
      $and41 = $shr40$25 & 63 | 0;
      $or42 = $and41 | 128 | 0;
      $conv43 = $or42 & 255 | 0;
      $incdec$ptr44 = $s + 3 | 0;
      HEAP8[$incdec$ptr39 >> 0] = $conv43;
      $and45 = $wc & 63 | 0;
      $or46 = $and45 | 128 | 0;
      $conv47 = $or46 & 255 | 0;
      HEAP8[$incdec$ptr44 >> 0] = $conv47;
      $retval$0 = 4;
      break do_once$0;
     } else block5 : {
      $call = ___errno_location() | 0;
      HEAP32[$call >> 2] = 84;
      $retval$0 = 4294967295;
      break do_once$0;
     }
    }
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _wctomb($s, $wc) {
  $s = $s | 0;
  $wc = $wc | 0;
  var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $tobool = ($s | 0) == (0 | 0);
   if ($tobool) $retval$0 = 0; else block0 : {
    $call = _wcrtomb($s | 0, $wc | 0, 0 | 0) | 0;
    $retval$0 = $call;
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _memchr($src, $c, $n) {
  $src = $src | 0;
  $c = $c | 0;
  $n = $n | 0;
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $and$39 = 0, $and15 = 0, $and16 = 0, $cmp = 0, $cmp11 = 0, $cmp11$32 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $conv1 = 0, $dec = 0, $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr33 = 0, $lnot = 0, $mul = 0, $n$addr$0$lcssa = 0, $n$addr$0$lcssa61 = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$133$lcssa = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond$42 = 0, $s$0$lcssa = 0, $s$0$lcssa60 = 0, $s$044 = 0, $s$128 = 0, $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool$40 = 0, $tobool2 = 0, $tobool2$41 = 0, $tobool2$lcssa = 0, $tobool25 = 0, $tobool25$26 = 0, $tobool36 = 0, $w$0$lcssa = 0, $w$034 = 0, $w$034$lcssa = 0, $xor = 0, label = 0, sp = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $conv1 = $c & 255 | 0;
   $0 = $src;
   $and$39 = $0 & 3 | 0;
   $tobool$40 = ($and$39 | 0) != (0 | 0);
   $tobool2$41 = ($n | 0) != (0 | 0);
   $or$cond$42 = $tobool2$41 & $tobool$40 | 0;
   label$break$L1 : {
    if ($or$cond$42) block0 : {
     $1 = $c & 255 | 0;
     $n$addr$043 = $n;
     $s$044 = $src;
     while_out$0 : do block1 : {
      $2 = HEAP8[$s$044 >> 0] | 0;
      $cmp = (($2 << 24 | 0) >> 24 | 0 | 0) == (($1 << 24 | 0) >> 24 | 0 | 0);
      if ($cmp) block2 : {
       $n$addr$0$lcssa61 = $n$addr$043;
       $s$0$lcssa60 = $s$044;
       label = 6;
       break label$break$L1;
      }
      $incdec$ptr = $s$044 + 1 | 0;
      $dec = $n$addr$043 + 4294967295 | 0;
      $3 = $incdec$ptr;
      $and = $3 & 3 | 0;
      $tobool = ($and | 0) != (0 | 0);
      $tobool2 = ($dec | 0) != (0 | 0);
      $or$cond = $tobool2 & $tobool | 0;
      if ($or$cond) block3 : {
       $n$addr$043 = $dec;
       $s$044 = $incdec$ptr;
      } else block4 : {
       $n$addr$0$lcssa = $dec;
       $s$0$lcssa = $incdec$ptr;
       $tobool2$lcssa = $tobool2;
       label = 5;
       break while_out$0;
      }
      continue while_out$0;
     } while (0);
    } else block5 : {
     $n$addr$0$lcssa = $n;
     $s$0$lcssa = $src;
     $tobool2$lcssa = $tobool2$41;
     label = 5;
    }
   }
   if ((label | 0) == (5 | 0)) if ($tobool2$lcssa) block6 : {
    $n$addr$0$lcssa61 = $n$addr$0$lcssa;
    $s$0$lcssa60 = $s$0$lcssa;
    label = 6;
   } else block7 : {
    $n$addr$3 = 0;
    $s$2 = $s$0$lcssa;
   }
   label$break$L8 : {
    if ((label | 0) == (6 | 0)) block8 : {
     $4 = HEAP8[$s$0$lcssa60 >> 0] | 0;
     $5 = $c & 255 | 0;
     $cmp8 = (($4 << 24 | 0) >> 24 | 0 | 0) == (($5 << 24 | 0) >> 24 | 0 | 0);
     if ($cmp8) block9 : {
      $n$addr$3 = $n$addr$0$lcssa61;
      $s$2 = $s$0$lcssa60;
     } else block10 : {
      $mul = Math_imul($conv1, 16843009);
      $cmp11$32 = ($n$addr$0$lcssa61 >>> 0 | 0) >>> 0 > 3 >>> 0;
      label$break$L11 : {
       if ($cmp11$32) block11 : {
        $n$addr$133 = $n$addr$0$lcssa61;
        $w$034 = $s$0$lcssa60;
        while_out$2 : do block12 : {
         $6 = HEAPU32[$w$034 >> 2] | 0;
         $xor = $6 ^ $mul | 0;
         $sub = $xor + 4278124287 | 0;
         $neg = $xor & 2155905152 | 0;
         $and15 = $neg ^ 2155905152 | 0;
         $and16 = $and15 & $sub | 0;
         $lnot = ($and16 | 0) == (0 | 0);
         if (($lnot | 0) == (0 | 0)) block13 : {
          $n$addr$133$lcssa = $n$addr$133;
          $w$034$lcssa = $w$034;
          break while_out$2;
         }
         $incdec$ptr21 = $w$034 + 4 | 0;
         $sub22 = $n$addr$133 + 4294967292 | 0;
         $cmp11 = ($sub22 >>> 0 | 0) >>> 0 > 3 >>> 0;
         if ($cmp11) block14 : {
          $n$addr$133 = $sub22;
          $w$034 = $incdec$ptr21;
         } else block15 : {
          $n$addr$1$lcssa = $sub22;
          $w$0$lcssa = $incdec$ptr21;
          label = 11;
          break label$break$L11;
         }
         continue while_out$2;
        } while (0);
        $n$addr$227 = $n$addr$133$lcssa;
        $s$128 = $w$034$lcssa;
       } else block16 : {
        $n$addr$1$lcssa = $n$addr$0$lcssa61;
        $w$0$lcssa = $s$0$lcssa60;
        label = 11;
       }
      }
      if ((label | 0) == (11 | 0)) block17 : {
       $tobool25$26 = ($n$addr$1$lcssa | 0) == (0 | 0);
       if ($tobool25$26) block18 : {
        $n$addr$3 = 0;
        $s$2 = $w$0$lcssa;
        break label$break$L8;
       } else block19 : {
        $n$addr$227 = $n$addr$1$lcssa;
        $s$128 = $w$0$lcssa;
       }
      }
      while_out$4 : do block20 : {
       $7 = HEAP8[$s$128 >> 0] | 0;
       $cmp28 = (($7 << 24 | 0) >> 24 | 0 | 0) == (($5 << 24 | 0) >> 24 | 0 | 0);
       if ($cmp28) block21 : {
        $n$addr$3 = $n$addr$227;
        $s$2 = $s$128;
        break label$break$L8;
       }
       $incdec$ptr33 = $s$128 + 1 | 0;
       $dec34 = $n$addr$227 + 4294967295 | 0;
       $tobool25 = ($dec34 | 0) == (0 | 0);
       if ($tobool25) block22 : {
        $n$addr$3 = 0;
        $s$2 = $incdec$ptr33;
        break while_out$4;
       } else block23 : {
        $n$addr$227 = $dec34;
        $s$128 = $incdec$ptr33;
       }
       continue while_out$4;
      } while (0);
     }
    }
   }
   $tobool36 = ($n$addr$3 | 0) != (0 | 0);
   if ($tobool36) wasm2asm_i32$1 = $s$2; else wasm2asm_i32$1 = 0;
   $cond = wasm2asm_i32$1;
   wasm2asm_i32$0 = $cond;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___syscall_ret($r) {
  $r = $r | 0;
  var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $cmp = ($r >>> 0 | 0) >>> 0 > 4294963200 >>> 0;
   if ($cmp) block0 : {
    $sub = 0 - $r | 0;
    $call = ___errno_location() | 0;
    HEAP32[$call >> 2] = $sub;
    $retval$0 = 4294967295;
   } else $retval$0 = $r;
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___fflush_unlocked($f) {
  $f = $f | 0;
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp4 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $wpos = $f + 20 | 0;
   $0 = HEAPU32[$wpos >> 2] | 0;
   $wbase = $f + 28 | 0;
   $1 = HEAPU32[$wbase >> 2] | 0;
   $cmp = ($0 >>> 0 | 0) >>> 0 > ($1 >>> 0 | 0) >>> 0;
   if ($cmp) block0 : {
    $write = $f + 36 | 0;
    $2 = HEAPU32[$write >> 2] | 0;
    FUNCTION_TABLE_iiii[(($2 & 7 | 0) + 2 | 0) & 31]($f | 0, 0 | 0, 0 | 0) | 0;
    $3 = HEAPU32[$wpos >> 2] | 0;
    $tobool = ($3 | 0) == (0 | 0);
    if ($tobool) $retval$0 = 4294967295; else label = 3;
   } else label = 3;
   if ((label | 0) == (3 | 0)) block1 : {
    $rpos = $f + 4 | 0;
    $4 = HEAPU32[$rpos >> 2] | 0;
    $rend = $f + 8 | 0;
    $5 = HEAPU32[$rend >> 2] | 0;
    $cmp4 = ($4 >>> 0 | 0) >>> 0 < ($5 >>> 0 | 0) >>> 0;
    if ($cmp4) block2 : {
     $seek = $f + 40 | 0;
     $6 = HEAPU32[$seek >> 2] | 0;
     $sub$ptr$lhs$cast = $4;
     $sub$ptr$rhs$cast = $5;
     $sub$ptr$sub = $sub$ptr$lhs$cast - $sub$ptr$rhs$cast | 0;
     FUNCTION_TABLE_iiii[(($6 & 7 | 0) + 2 | 0) & 31]($f | 0, $sub$ptr$sub | 0, 1 | 0) | 0;
    }
    $wend = $f + 16 | 0;
    HEAP32[$wend >> 2] = 0;
    HEAP32[$wbase >> 2] = 0;
    HEAP32[$wpos >> 2] = 0;
    HEAP32[$rend >> 2] = 0;
    HEAP32[$rpos >> 2] = 0;
    $retval$0 = 0;
   }
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _cleanup($p) {
  $p = $p | 0;
  var $0 = 0, $lockcount = 0, $tobool = 0, label = 0, sp = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $lockcount = $p + 68 | 0;
   $0 = HEAPU32[$lockcount >> 2] | 0;
   $tobool = ($0 | 0) == (0 | 0);
   if ($tobool) ___unlockfile($p | 0);
   break topmost;
  }
 }
 
 function _printf_core($f, $fmt, $ap, $nl_arg, $nl_type) {
  $f = $f | 0;
  $fmt = $fmt | 0;
  $ap = $ap | 0;
  $nl_arg = $nl_arg | 0;
  $nl_type = $nl_type | 0;
  var $$ = 0, $$$i = 0, $$396$i = 0.0, $$404$i = 0.0, $$l10n$0 = 0, $$lcssa = 0, $$p$i = 0, $$p$inc468$i = 0, $$pr$i = 0, $$pr477$i = 0, $$pre = 0, $$pre$i = 0, $$pre357 = 0, $$pre564$i = 0, $$pre566$i = 0, $$pre567$i = 0, $$sub514$i = 0, $$sub562$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0.0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1549$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0, $a$3539$i = 0, $a$5$lcssa$i = 0, $a$5521$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $add = 0, $add$i = 0, $add$i$203 = 0, $add$i$239 = 0, $add$i$lcssa = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr205 = 0, $add$ptr213$i = 0, $add$ptr257 = 0, $add$ptr311$i = 0, $add$ptr311$z$4$i = 0, $add$ptr340 = 0, $add$ptr354$i = 0, $add$ptr358$i = 0, $add$ptr359 = 0, $add$ptr373$i = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr442$i = 0, $add$ptr442$z$3$i = 0, $add$ptr473 = 0, $add$ptr65$i = 0, $add$ptr671$i = 0, $add$ptr742$i = 0, $add$ptr88 = 0, $add113$i = 0, $add150$i = 0, $add154$i = 0, $add163$i = 0, $add165$i = 0, $add269 = 0, $add269$p$0 = 0, $add273$i = 0, $add275$i = 0, $add284$i = 0, $add313$i = 0, $add322 = 0, $add355$i = 0, $add395 = 0, $add410$i = 0.0, $add412 = 0, $add414$i = 0, $add441 = 0, $add477$neg$i = 0, $add561$i = 0, $add608$i = 0, $add612$i = 0, $add620$i = 0, $add653$i = 0, $add67$i = 0, $add737$i = 0, $add810$i = 0, $add87$i = 0.0, $add90$i = 0.0, $and = 0, $and$i = 0, $and$i$216 = 0, $and$i$231 = 0, $and$i$238 = 0, $and$i$244 = 0, $and$i$406$i = 0, $and$i$412$i = 0, $and$i$418$i = 0, $and$i$424$i = 0, $and$i$430$i = 0, $and$i$436$i = 0, $and$i$442$i = 0, $and$i$448$i = 0, $and$i$454$i = 0, $and$i$460$i = 0, $and$i$466$i = 0, $and$i$472$i = 0, $and$i$i = 0, $and12$i = 0, $and134$i = 0, $and210 = 0, $and214 = 0, $and216 = 0, $and219 = 0, $and249 = 0, $and254 = 0, $and263 = 0, $and282$i = 0, $and289 = 0, $and294 = 0, $and309 = 0, $and309$fl$4 = 0, $and36$i = 0, $and379$i = 0, $and483$i = 0, $and610$pre$phi$iZ2D = 0, $and62$i = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arraydecay208$add$ptr213$i = 0, $arrayidx$i = 0, $arrayidx$i$236 = 0, $arrayidx114 = 0, $arrayidx117$i = 0, $arrayidx119 = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx173 = 0, $arrayidx192 = 0, $arrayidx251$i = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx370 = 0, $arrayidx453$i = 0, $arrayidx469 = 0, $arrayidx481 = 0, $arrayidx489$i = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $call = 0, $call344 = 0, $call345 = 0, $call356 = 0, $call384 = 0, $call411 = 0, $call55$i = 0.0, $carry$0544$i = 0, $carry262$0535$i = 0, $cmp = 0, $cmp1 = 0, $cmp103$i = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp127$i = 0, $cmp13 = 0, $cmp147$i = 0, $cmp165 = 0, $cmp176 = 0, $cmp18 = 0, $cmp181 = 0, $cmp184 = 0, $cmp188$i = 0, $cmp196$i = 0, $cmp205$i = 0, $cmp211 = 0, $cmp225$547$i = 0, $cmp225$i = 0, $cmp228$i = 0, $cmp235$543$i = 0, $cmp235$i = 0, $cmp240 = 0, $cmp249$i = 0, $cmp259$537$i = 0, $cmp259$i = 0, $cmp265$i = 0, $cmp270 = 0, $cmp277$533$i = 0, $cmp277$i = 0, $cmp299$i = 0, $cmp306 = 0, $cmp308$i = 0, $cmp315$i = 0, $cmp323 = 0, $cmp324$529$i = 0, $cmp324$i = 0, $cmp333$i = 0, $cmp338$i = 0, $cmp350$i = 0, $cmp363$525$i = 0, $cmp37 = 0, $cmp374$i = 0, $cmp377 = 0, $cmp377$314 = 0, $cmp38$i = 0, $cmp385 = 0, $cmp385$i = 0, $cmp390 = 0, $cmp390$i = 0, $cmp397 = 0, $cmp403$i = 0, $cmp404 = 0, $cmp404$324 = 0, $cmp411$i = 0, $cmp413 = 0, $cmp416$519$i = 0, $cmp416$i = 0, $cmp420$i = 0, $cmp421 = 0, $cmp433$515$i = 0, $cmp433$i = 0, $cmp434 = 0, $cmp442 = 0, $cmp443$i = 0, $cmp450$i = 0, $cmp450$lcssa$i = 0, $cmp466 = 0, $cmp470$i = 0, $cmp473$i = 0, $cmp478 = 0, $cmp478$295 = 0, $cmp48$i = 0, $cmp495$511$i = 0, $cmp495$i = 0, $cmp50 = 0, $cmp50$308 = 0, $cmp505$i = 0, $cmp515$i = 0, $cmp528$i = 0, $cmp563$i = 0, $cmp577$i = 0, $cmp59$i = 0, $cmp614$i = 0, $cmp617$i = 0, $cmp623$i = 0, $cmp636$506$i = 0, $cmp636$i = 0, $cmp65 = 0, $cmp660$i = 0, $cmp665$i = 0, $cmp673$i = 0, $cmp678$491$i = 0, $cmp678$i = 0, $cmp686$i = 0, $cmp707$486$i = 0, $cmp707$i = 0, $cmp710$487$i = 0, $cmp710$i = 0, $cmp722$483$i = 0, $cmp722$i = 0, $cmp727$i = 0, $cmp745$i = 0, $cmp748$499$i = 0, $cmp748$i = 0, $cmp75 = 0, $cmp760$i = 0, $cmp765$i = 0, $cmp770$495$i = 0, $cmp770$i = 0, $cmp777$i = 0, $cmp790$i = 0, $cmp818$i = 0, $cmp82$i = 0, $cmp94$i = 0, $cmp97 = 0, $cnt$0 = 0, $cnt$1 = 0, $cnt$1$lcssa = 0, $cond$i = 0, $cond100$i = 0, $cond233$i = 0, $cond245 = 0, $cond271$i = 0, $cond304$i = 0, $cond354 = 0, $cond426 = 0, $cond43$i = 0, $cond53$i = 0, $cond629$i = 0, $cond732$i = 0, $cond800$i = 0, $conv$4$i = 0, $conv$4$i$197 = 0, $conv$4$i$211 = 0, $conv$i = 0, $conv$i$205 = 0, $conv1$i = 0, $conv111$i = 0, $conv114$i = 0, $conv116$i = 0, $conv118$393$i = 0, $conv120 = 0, $conv121$i = 0, $conv123$i = 0.0, $conv134 = 0, $conv163 = 0, $conv174 = 0, $conv174$lcssa = 0, $conv207 = 0, $conv216$i = 0, $conv218$i = 0.0, $conv229 = 0, $conv232 = 0, $conv242$i$lcssa = 0, $conv32 = 0, $conv48 = 0, $conv48$307 = 0, $conv48311 = 0, $conv58 = 0, $conv644$i = 0, $conv646$i = 0, $conv69 = 0, $conv83 = 0, $d$0$542$i = 0, $d$0$i = 0, $d$0545$i = 0, $d$1534$i = 0, $d$2$lcssa$i = 0, $d$2520$i = 0, $d$4$i = 0, $d$5494$i = 0, $d$6488$i = 0, $d$7500$i = 0, $dec$i = 0, $dec476$i = 0, $dec481$i = 0, $dec78$i = 0, $div274$i = 0, $div356$i = 0, $div378$i = 0, $div384$i = 0, $e$0531$i = 0, $e$1$i = 0, $e$2517$i = 0, $e$4$i = 0, $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$1507$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $fl$0284 = 0, $fl$0310 = 0, $fl$1 = 0, $fl$1$and219 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa368 = 0, $i$0316 = 0, $i$0530$i = 0, $i$07$i = 0, $i$07$i$201 = 0, $i$1$lcssa$i = 0, $i$1325 = 0, $i$1526$i = 0, $i$2299 = 0, $i$2299$lcssa = 0, $i$2516$i = 0, $i$3296 = 0, $i$3512$i = 0, $i137 = 0, $i86 = 0, $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc425$i = 0, $inc438$i = 0, $inc468$i = 0, $inc488 = 0, $inc500$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i$204 = 0, $incdec$ptr$i$212 = 0, $incdec$ptr$i$212$lcssa = 0, $incdec$ptr$i$225 = 0, $incdec$ptr$i$lcssa = 0, $incdec$ptr106$i = 0, $incdec$ptr112$i = 0, $incdec$ptr115$i = 0, $incdec$ptr122$i = 0, $incdec$ptr137$i = 0, $incdec$ptr169 = 0, $incdec$ptr169$lcssa = 0, $incdec$ptr169269 = 0, $incdec$ptr169271 = 0, $incdec$ptr169271$lcssa414 = 0, $incdec$ptr169272 = 0, $incdec$ptr169274 = 0, $incdec$ptr169275 = 0, $incdec$ptr169276$lcssa = 0, $incdec$ptr169276301 = 0, $incdec$ptr217$i = 0, $incdec$ptr217$i$lcssa = 0, $incdec$ptr23 = 0, $incdec$ptr246$i = 0, $incdec$ptr288$i = 0, $incdec$ptr292$570$i = 0, $incdec$ptr292$a$3$571$i = 0, $incdec$ptr292$a$3$i = 0, $incdec$ptr292$a$3573$i = 0, $incdec$ptr292$i = 0, $incdec$ptr296$i = 0, $incdec$ptr383 = 0, $incdec$ptr410 = 0, $incdec$ptr419$i = 0, $incdec$ptr423$i = 0, $incdec$ptr62 = 0, $incdec$ptr639$i = 0, $incdec$ptr645$i = 0, $incdec$ptr647$i = 0, $incdec$ptr681$i = 0, $incdec$ptr689$i = 0, $incdec$ptr698$i = 0, $incdec$ptr698$i$lcssa = 0, $incdec$ptr725$i = 0, $incdec$ptr734$i = 0, $incdec$ptr773$i = 0, $incdec$ptr776$i = 0, $incdec$ptr808$i = 0, $isdigit = 0, $isdigit$6$i = 0, $isdigit$6$i$199 = 0, $isdigit$i = 0, $isdigit$i$207 = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$5$i = 0, $isdigittmp$5$i$198 = 0, $isdigittmp$i = 0, $isdigittmp$i$206 = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $isdigittmp8$i = 0, $isdigittmp8$i$200 = 0, $j$0$524$i = 0, $j$0$i = 0, $j$0527$i = 0, $j$1513$i = 0, $j$2$i = 0, $l$0 = 0, $l$0$i = 0, $l$1$i = 0, $l$1315 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$lcssa = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $land$ext$neg$i = 0, $lnot$ext = 0, $lnot$i = 0, $lnot455$i = 0, $lnot483 = 0, $lor$ext$i = 0, $mb = 0, $mul$i = 0, $mul$i$202 = 0, $mul$i$240 = 0.0, $mul125$i = 0.0, $mul202$i = 0.0, $mul220$i = 0.0, $mul286$i = 0, $mul286$i$lcssa = 0, $mul322$i = 0, $mul328$i = 0, $mul335$i = 0, $mul349$i = 0, $mul367$i = 0, $mul406$i = 0.0, $mul407$i = 0.0, $mul431$i = 0, $mul437$i = 0, $mul499$i = 0, $mul513$i = 0, $mul80$i = 0.0, $mul80$i$lcssa = 0.0, $notlhs$i = 0, $notrhs$i = 0, $or = 0, $or$cond = 0, $or$cond$i = 0, $or$cond1$not$i = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or$cond2$i = 0, $or$cond384 = 0, $or$cond395$i = 0, $or$cond397$i = 0, $or$cond401$i = 0, $or$i = 0, $or$i$241 = 0, $or100 = 0, $or120$i = 0, $or246 = 0, $or504$i = 0, $or613$i = 0, $p$0 = 0, $p$1 = 0, $p$2 = 0, $p$2$add322 = 0, $p$3 = 0, $p$4365 = 0, $p$5 = 0, $p$addr$2$$sub514398$i = 0, $p$addr$2$$sub562399$i = 0, $p$addr$2$i = 0, $p$addr$3$i = 0, $p$addr$4$lcssa$i = 0, $p$addr$4489$i = 0, $p$addr$5$lcssa$i = 0, $p$addr$5501$i = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0, $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$add$ptr65$i = 0, $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0, $r$0$a$9$i = 0, $re$1482$i = 0, $rem360$i = 0, $rem370$i = 0, $rem494$510$i = 0, $rem494$i = 0, $retval$0 = 0, $retval$0$i = 0, $round$0481$i = 0.0, $round377$1$i = 0.0, $s$0$i = 0, $s$1$i = 0, $s$1$i$lcssa = 0, $s$addr$0$lcssa$i$229 = 0, $s$addr$06$i = 0, $s$addr$06$i$221 = 0, $s35$0$i = 0, $s668$0492$i = 0, $s668$1$i = 0, $s715$0$lcssa$i = 0, $s715$0484$i = 0, $s753$0$i = 0, $s753$1496$i = 0, $s753$2$i = 0, $shl = 0, $shl280$i = 0, $shl60 = 0, $shr = 0, $shr283$i = 0, $shr285$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $st$0$lcssa415 = 0, $storemerge = 0, $storemerge$186282 = 0, $storemerge$186309 = 0, $storemerge$191 = 0, $sub = 0, $sub$i = 0.0, $sub$ptr$div$i = 0, $sub$ptr$div321$i = 0, $sub$ptr$div347$i = 0, $sub$ptr$div430$i = 0, $sub$ptr$div511$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast160$i = 0, $sub$ptr$lhs$cast305$i = 0, $sub$ptr$lhs$cast317 = 0, $sub$ptr$lhs$cast344$i = 0, $sub$ptr$lhs$cast361 = 0, $sub$ptr$lhs$cast431 = 0, $sub$ptr$lhs$cast508$i = 0, $sub$ptr$lhs$cast694$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast152$i = 0, $sub$ptr$rhs$cast161$i = 0, $sub$ptr$rhs$cast174$i = 0, $sub$ptr$rhs$cast267 = 0, $sub$ptr$rhs$cast306$i = 0, $sub$ptr$rhs$cast318 = 0, $sub$ptr$rhs$cast319$i = 0, $sub$ptr$rhs$cast345$i = 0, $sub$ptr$rhs$cast362 = 0, $sub$ptr$rhs$cast428$i = 0, $sub$ptr$rhs$cast432 = 0, $sub$ptr$rhs$cast634$504$i = 0, $sub$ptr$rhs$cast634$i = 0, $sub$ptr$rhs$cast649$i = 0, $sub$ptr$rhs$cast695$i = 0, $sub$ptr$rhs$cast788$i = 0, $sub$ptr$rhs$cast812$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub145$i = 0, $sub$ptr$sub153$i = 0, $sub$ptr$sub159$i = 0, $sub$ptr$sub162$i = 0, $sub$ptr$sub172$i = 0, $sub$ptr$sub175$i = 0, $sub$ptr$sub268 = 0, $sub$ptr$sub307$i = 0, $sub$ptr$sub319 = 0, $sub$ptr$sub320$i = 0, $sub$ptr$sub346$i = 0, $sub$ptr$sub363 = 0, $sub$ptr$sub429$i = 0, $sub$ptr$sub433 = 0, $sub$ptr$sub433$p$5 = 0, $sub$ptr$sub510$i = 0, $sub$ptr$sub635$505$i = 0, $sub$ptr$sub635$i = 0, $sub$ptr$sub650$i = 0, $sub$ptr$sub650$pn$i = 0, $sub$ptr$sub696$i = 0, $sub$ptr$sub789$i = 0, $sub$ptr$sub813$i = 0, $sub101 = 0, $sub124$i = 0.0, $sub135 = 0, $sub146$i = 0, $sub164 = 0, $sub175 = 0, $sub181$i = 0, $sub203$i = 0, $sub219$i = 0.0, $sub256$i = 0, $sub264$i = 0, $sub281$i = 0, $sub336$i = 0, $sub343$i = 0, $sub357$i = 0, $sub389 = 0, $sub409$i = 0, $sub478$i = 0, $sub480$i = 0, $sub514$i = 0, $sub54 = 0, $sub562$i = 0, $sub59 = 0, $sub626$le$i = 0, $sub735$i = 0, $sub74$i = 0, $sub806$i = 0, $sub84 = 0, $sub85$i = 0.0, $sub86$i = 0.0, $sub88$i = 0.0, $sub91$i = 0.0, $sub97$i = 0, $sum = 0, $t$0 = 0, $t$1 = 0, $t$addr$0$i = 0, $t$addr$1$i = 0, $tobool = 0, $tobool$i = 0, $tobool$i$217 = 0, $tobool$i$232 = 0, $tobool$i$245 = 0, $tobool$i$407$i = 0, $tobool$i$413$i = 0, $tobool$i$419$i = 0, $tobool$i$425$i = 0, $tobool$i$431$i = 0, $tobool$i$437$i = 0, $tobool$i$443$i = 0, $tobool$i$449$i = 0, $tobool$i$455$i = 0, $tobool$i$461$i = 0, $tobool$i$467$i = 0, $tobool$i$473$i = 0, $tobool$i$i = 0, $tobool13$i = 0, $tobool135$i = 0, $tobool139$i = 0, $tobool140$i = 0, $tobool141 = 0, $tobool178 = 0, $tobool208 = 0, $tobool217 = 0, $tobool222$i = 0, $tobool244$i = 0, $tobool25 = 0, $tobool255 = 0, $tobool264 = 0, $tobool28 = 0, $tobool290 = 0, $tobool290$569$i = 0, $tobool290$i = 0, $tobool294$i = 0, $tobool295 = 0, $tobool314 = 0, $tobool341$i = 0, $tobool349 = 0, $tobool357 = 0, $tobool37$i = 0, $tobool371$i = 0, $tobool380 = 0, $tobool380$i = 0, $tobool400$i = 0, $tobool407 = 0, $tobool459 = 0, $tobool462 = 0, $tobool470 = 0, $tobool484$i = 0, $tobool490$i = 0, $tobool55 = 0, $tobool56$i = 0, $tobool63$i = 0, $tobool76$i = 0, $tobool76552$i = 0, $tobool781$i = 0, $tobool79$i = 0, $tobool9$i = 0, $tobool90 = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $w$add165$i = 0, $w$add653$i = 0, $wc = 0, $ws$0317 = 0, $ws$1326 = 0, $xor = 0, $xor$i = 0, $xor167$i = 0, $xor186$i = 0, $xor449 = 0, $xor457 = 0, $xor655$i = 0, $xor816$i = 0, $y$addr$0$i = 0.0, $y$addr$1$i = 0.0, $y$addr$2$i = 0.0, $y$addr$3$i = 0.0, $y$addr$4$i = 0.0, $z$0$i = 0, $z$0$lcssa = 0, $z$0302 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1548$i = 0, $z$2 = 0, $z$2$i = 0, $z$2$i$lcssa = 0, $z$3$lcssa$i = 0, $z$3538$i = 0, $z$4$i = 0, $z$7$add$ptr742$i = 0, $z$7$i = 0, $z$7$i$lcssa = 0, $z$7$ph$i = 0, label = 0, sp = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0, wasm2asm_f64$0 = 0.0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 624 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $big$i = sp + 24 | 0;
   $e2$i = sp + 16 | 0;
   $buf$i = sp + 588 | 0;
   $ebuf0$i = sp + 576 | 0;
   $arg = sp;
   $buf = sp + 536 | 0;
   $wc = sp + 8 | 0;
   $mb = sp + 528 | 0;
   $tobool25 = ($f | 0) != (0 | 0);
   $add$ptr205 = $buf + 40 | 0;
   $sub$ptr$lhs$cast317 = $add$ptr205;
   $add$ptr340 = $buf + 39 | 0;
   $arrayidx370 = $wc + 4 | 0;
   $arrayidx$i$236 = $ebuf0$i + 12 | 0;
   $incdec$ptr106$i = $ebuf0$i + 11 | 0;
   $sub$ptr$rhs$cast$i = $buf$i;
   $sub$ptr$lhs$cast160$i = $arrayidx$i$236;
   $sub$ptr$sub159$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast$i | 0;
   $sub$ptr$sub145$i = 4294967294 - $sub$ptr$rhs$cast$i | 0;
   $sub$ptr$sub153$i = $sub$ptr$lhs$cast160$i + 2 | 0;
   $add$ptr213$i = $big$i + 288 | 0;
   $add$ptr671$i = $buf$i + 9 | 0;
   $sub$ptr$lhs$cast694$i = $add$ptr671$i;
   $incdec$ptr689$i = $buf$i + 8 | 0;
   $cnt$0 = 0;
   $incdec$ptr169275 = $fmt;
   $l$0 = 0;
   $l10n$0 = 0;
   label$break$L1 : do block0 : {
    $cmp = ($cnt$0 | 0) > (4294967295 | 0);
    do_once$0 : {
     if ($cmp) block1 : {
      $sub = 2147483647 - $cnt$0 | 0;
      $cmp1 = ($l$0 | 0) > ($sub | 0);
      if ($cmp1) block2 : {
       $call = ___errno_location() | 0;
       HEAP32[$call >> 2] = 75;
       $cnt$1 = 4294967295;
       break do_once$0;
      } else block3 : {
       $add = $l$0 + $cnt$0 | 0;
       $cnt$1 = $add;
       break do_once$0;
      }
     } else $cnt$1 = $cnt$0;
    }
    $0 = HEAP8[$incdec$ptr169275 >> 0] | 0;
    $tobool = (($0 << 24 | 0) >> 24 | 0 | 0) == (0 | 0);
    if ($tobool) block4 : {
     $cnt$1$lcssa = $cnt$1;
     $l10n$0$lcssa = $l10n$0;
     label = 242;
     break label$break$L1;
    } else block5 : {
     $1 = $0;
     $incdec$ptr169274 = $incdec$ptr169275;
    }
    label$break$L9 : do block6 : {
     switch$1 : {
      switch ((($1 << 24 | 0) >> 24 | 0) - 0 | 0) {
      case 37:
       block7 : {
        $incdec$ptr169276301 = $incdec$ptr169274;
        $z$0302 = $incdec$ptr169274;
        label = 9;
        break label$break$L9;
        break switch$1;
       }
      case 0:
       block8 : {
        $incdec$ptr169276$lcssa = $incdec$ptr169274;
        $z$0$lcssa = $incdec$ptr169274;
        break label$break$L9;
        break switch$1;
       }
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      default:
      }
     }
     $incdec$ptr = $incdec$ptr169274 + 1 | 0;
     $$pre = HEAP8[$incdec$ptr >> 0] | 0;
     $1 = $$pre;
     $incdec$ptr169274 = $incdec$ptr;
     continue label$break$L9;
    } while (0);
    label$break$L12 : {
     if ((label | 0) == (9 | 0)) while_out$5 : do block9 : {
      label = 0;
      $arrayidx16 = $incdec$ptr169276301 + 1 | 0;
      $2 = HEAP8[$arrayidx16 >> 0] | 0;
      $cmp18 = (($2 << 24 | 0) >> 24 | 0 | 0) == (37 | 0);
      if (($cmp18 | 0) == (0 | 0)) block10 : {
       $incdec$ptr169276$lcssa = $incdec$ptr169276301;
       $z$0$lcssa = $z$0302;
       break label$break$L12;
      }
      $incdec$ptr23 = $z$0302 + 1 | 0;
      $add$ptr = $incdec$ptr169276301 + 2 | 0;
      $3 = HEAP8[$add$ptr >> 0] | 0;
      $cmp13 = (($3 << 24 | 0) >> 24 | 0 | 0) == (37 | 0);
      if ($cmp13) block11 : {
       $incdec$ptr169276301 = $add$ptr;
       $z$0302 = $incdec$ptr23;
       label = 9;
      } else block12 : {
       $incdec$ptr169276$lcssa = $add$ptr;
       $z$0$lcssa = $incdec$ptr23;
       break while_out$5;
      }
      continue while_out$5;
     } while (0);
    }
    $sub$ptr$lhs$cast = $z$0$lcssa;
    $sub$ptr$rhs$cast = $incdec$ptr169275;
    $sub$ptr$sub = $sub$ptr$lhs$cast - $sub$ptr$rhs$cast | 0;
    if ($tobool25) block13 : {
     $4 = HEAPU32[$f >> 2] | 0;
     $and$i = $4 & 32 | 0;
     $tobool$i = ($and$i | 0) == (0 | 0);
     if ($tobool$i) ___fwritex($incdec$ptr169275 | 0, $sub$ptr$sub | 0, $f | 0) | 0;
    }
    $tobool28 = ($z$0$lcssa | 0) == ($incdec$ptr169275 | 0);
    if (($tobool28 | 0) == (0 | 0)) block14 : {
     $l10n$0$phi = $l10n$0;
     $cnt$0 = $cnt$1;
     $incdec$ptr169275 = $incdec$ptr169276$lcssa;
     $l$0 = $sub$ptr$sub;
     $l10n$0 = $l10n$0$phi;
     continue label$break$L1;
    }
    $arrayidx31 = $incdec$ptr169276$lcssa + 1 | 0;
    $5 = HEAP8[$arrayidx31 >> 0] | 0;
    $conv32 = ($5 << 24 | 0) >> 24 | 0;
    $isdigittmp = $conv32 + 4294967248 | 0;
    $isdigit = ($isdigittmp >>> 0 | 0) >>> 0 < 10 >>> 0;
    if ($isdigit) block15 : {
     $arrayidx35 = $incdec$ptr169276$lcssa + 2 | 0;
     $6 = HEAP8[$arrayidx35 >> 0] | 0;
     $cmp37 = (($6 << 24 | 0) >> 24 | 0 | 0) == (36 | 0);
     $add$ptr43 = $incdec$ptr169276$lcssa + 3 | 0;
     if ($cmp37) wasm2asm_i32$1 = $add$ptr43; else wasm2asm_i32$1 = $arrayidx31;
     $add$ptr43$arrayidx31 = wasm2asm_i32$1;
     if ($cmp37) wasm2asm_i32$1 = 1; else wasm2asm_i32$1 = $l10n$0;
     $$l10n$0 = wasm2asm_i32$1;
     if ($cmp37) wasm2asm_i32$1 = $isdigittmp; else wasm2asm_i32$1 = 4294967295;
     $isdigittmp$ = wasm2asm_i32$1;
     $$pre357 = HEAP8[$add$ptr43$arrayidx31 >> 0] | 0;
     $7 = $$pre357;
     $argpos$0 = $isdigittmp$;
     $l10n$1 = $$l10n$0;
     $storemerge = $add$ptr43$arrayidx31;
    } else block16 : {
     $7 = $5;
     $argpos$0 = 4294967295;
     $l10n$1 = $l10n$0;
     $storemerge = $arrayidx31;
    }
    $conv48$307 = ($7 << 24 | 0) >> 24 | 0;
    $8 = $conv48$307 & 4294967264 | 0;
    $cmp50$308 = ($8 | 0) == (32 | 0);
    label$break$L25 : {
     if ($cmp50$308) block17 : {
      $9 = $7;
      $conv48311 = $conv48$307;
      $fl$0310 = 0;
      $storemerge$186309 = $storemerge;
      while_out$7 : do block18 : {
       $sub54 = $conv48311 + 4294967264 | 0;
       $shl = 1 << $sub54 | 0;
       $and = $shl & 75913 | 0;
       $tobool55 = ($and | 0) == (0 | 0);
       if ($tobool55) block19 : {
        $12 = $9;
        $fl$0284 = $fl$0310;
        $storemerge$186282 = $storemerge$186309;
        break label$break$L25;
       }
       $conv58 = ($9 << 24 | 0) >> 24 | 0;
       $sub59 = $conv58 + 4294967264 | 0;
       $shl60 = 1 << $sub59 | 0;
       $or = $shl60 | $fl$0310 | 0;
       $incdec$ptr62 = $storemerge$186309 + 1 | 0;
       $10 = HEAP8[$incdec$ptr62 >> 0] | 0;
       $conv48 = ($10 << 24 | 0) >> 24 | 0;
       $11 = $conv48 & 4294967264 | 0;
       $cmp50 = ($11 | 0) == (32 | 0);
       if ($cmp50) block20 : {
        $9 = $10;
        $conv48311 = $conv48;
        $fl$0310 = $or;
        $storemerge$186309 = $incdec$ptr62;
       } else block21 : {
        $12 = $10;
        $fl$0284 = $or;
        $storemerge$186282 = $incdec$ptr62;
        break while_out$7;
       }
       continue while_out$7;
      } while (0);
     } else block22 : {
      $12 = $7;
      $fl$0284 = 0;
      $storemerge$186282 = $storemerge;
     }
    }
    $cmp65 = (($12 << 24 | 0) >> 24 | 0 | 0) == (42 | 0);
    do_once$9 : {
     if ($cmp65) block23 : {
      $arrayidx68 = $storemerge$186282 + 1 | 0;
      $13 = HEAP8[$arrayidx68 >> 0] | 0;
      $conv69 = ($13 << 24 | 0) >> 24 | 0;
      $isdigittmp189 = $conv69 + 4294967248 | 0;
      $isdigit190 = ($isdigittmp189 >>> 0 | 0) >>> 0 < 10 >>> 0;
      if ($isdigit190) block24 : {
       $arrayidx73 = $storemerge$186282 + 2 | 0;
       $14 = HEAP8[$arrayidx73 >> 0] | 0;
       $cmp75 = (($14 << 24 | 0) >> 24 | 0 | 0) == (36 | 0);
       if ($cmp75) block25 : {
        $arrayidx81 = $nl_type + ($isdigittmp189 << 2 | 0) | 0;
        HEAP32[$arrayidx81 >> 2] = 10;
        $15 = HEAP8[$arrayidx68 >> 0] | 0;
        $conv83 = ($15 << 24 | 0) >> 24 | 0;
        $sub84 = $conv83 + 4294967248 | 0;
        $i86 = $nl_arg + ($sub84 << 3 | 0) | 0;
        $16 = $i86;
        $17 = $16;
        $18 = HEAPU32[$17 >> 2] | 0;
        $19 = $16 + 4 | 0;
        $20 = $19;
        $21 = HEAPU32[$20 >> 2] | 0;
        $add$ptr88 = $storemerge$186282 + 3 | 0;
        $l10n$2 = 1;
        $storemerge$191 = $add$ptr88;
        $w$0 = $18;
       } else label = 24;
      } else label = 24;
      if ((label | 0) == (24 | 0)) block26 : {
       label = 0;
       $tobool90 = ($l10n$1 | 0) == (0 | 0);
       if (($tobool90 | 0) == (0 | 0)) block27 : {
        $retval$0 = 4294967295;
        break label$break$L1;
       }
       if (($tobool25 | 0) == (0 | 0)) block28 : {
        $fl$1 = $fl$0284;
        $incdec$ptr169269 = $arrayidx68;
        $l10n$3 = 0;
        $w$1 = 0;
        break do_once$9;
       }
       $arglist_current = HEAPU32[$ap >> 2] | 0;
       $22 = $arglist_current;
       $23 = 0 + 4 | 0;
       $expanded4 = $23;
       $expanded = $expanded4 - 1 | 0;
       $24 = $22 + $expanded | 0;
       $25 = 0 + 4 | 0;
       $expanded8 = $25;
       $expanded7 = $expanded8 - 1 | 0;
       $expanded6 = $expanded7 ^ 4294967295 | 0;
       $26 = $24 & $expanded6 | 0;
       $27 = $26;
       $28 = HEAPU32[$27 >> 2] | 0;
       $arglist_next = $27 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next;
       $l10n$2 = 0;
       $storemerge$191 = $arrayidx68;
       $w$0 = $28;
      }
      $cmp97 = ($w$0 | 0) < (0 | 0);
      if ($cmp97) block29 : {
       $or100 = $fl$0284 | 8192 | 0;
       $sub101 = 0 - $w$0 | 0;
       $fl$1 = $or100;
       $incdec$ptr169269 = $storemerge$191;
       $l10n$3 = $l10n$2;
       $w$1 = $sub101;
      } else block30 : {
       $fl$1 = $fl$0284;
       $incdec$ptr169269 = $storemerge$191;
       $l10n$3 = $l10n$2;
       $w$1 = $w$0;
      }
     } else block31 : {
      $conv$4$i = ($12 << 24 | 0) >> 24 | 0;
      $isdigittmp$5$i = $conv$4$i + 4294967248 | 0;
      $isdigit$6$i = ($isdigittmp$5$i >>> 0 | 0) >>> 0 < 10 >>> 0;
      if ($isdigit$6$i) block32 : {
       $29 = $storemerge$186282;
       $i$07$i = 0;
       $isdigittmp8$i = $isdigittmp$5$i;
       while_out$10 : do block33 : {
        $mul$i = Math_imul($i$07$i, 10);
        $add$i = $mul$i + $isdigittmp8$i | 0;
        $incdec$ptr$i = $29 + 1 | 0;
        $30 = HEAP8[$incdec$ptr$i >> 0] | 0;
        $conv$i = ($30 << 24 | 0) >> 24 | 0;
        $isdigittmp$i = $conv$i + 4294967248 | 0;
        $isdigit$i = ($isdigittmp$i >>> 0 | 0) >>> 0 < 10 >>> 0;
        if ($isdigit$i) block34 : {
         $29 = $incdec$ptr$i;
         $i$07$i = $add$i;
         $isdigittmp8$i = $isdigittmp$i;
        } else block35 : {
         $add$i$lcssa = $add$i;
         $incdec$ptr$i$lcssa = $incdec$ptr$i;
         break while_out$10;
        }
        continue while_out$10;
       } while (0);
       $cmp105 = ($add$i$lcssa | 0) < (0 | 0);
       if ($cmp105) block36 : {
        $retval$0 = 4294967295;
        break label$break$L1;
       } else block37 : {
        $fl$1 = $fl$0284;
        $incdec$ptr169269 = $incdec$ptr$i$lcssa;
        $l10n$3 = $l10n$1;
        $w$1 = $add$i$lcssa;
       }
      } else block38 : {
       $fl$1 = $fl$0284;
       $incdec$ptr169269 = $storemerge$186282;
       $l10n$3 = $l10n$1;
       $w$1 = 0;
      }
     }
    }
    $31 = HEAP8[$incdec$ptr169269 >> 0] | 0;
    $cmp111 = (($31 << 24 | 0) >> 24 | 0 | 0) == (46 | 0);
    label$break$L46 : {
     if ($cmp111) block39 : {
      $arrayidx114 = $incdec$ptr169269 + 1 | 0;
      $32 = HEAP8[$arrayidx114 >> 0] | 0;
      $cmp116 = (($32 << 24 | 0) >> 24 | 0 | 0) == (42 | 0);
      if (($cmp116 | 0) == (0 | 0)) block40 : {
       $conv$4$i$197 = ($32 << 24 | 0) >> 24 | 0;
       $isdigittmp$5$i$198 = $conv$4$i$197 + 4294967248 | 0;
       $isdigit$6$i$199 = ($isdigittmp$5$i$198 >>> 0 | 0) >>> 0 < 10 >>> 0;
       if ($isdigit$6$i$199) block41 : {
        $49 = $arrayidx114;
        $i$07$i$201 = 0;
        $isdigittmp8$i$200 = $isdigittmp$5$i$198;
       } else block42 : {
        $incdec$ptr169272 = $arrayidx114;
        $p$0 = 0;
        break label$break$L46;
       }
       while_out$12 : do block43 : {
        $mul$i$202 = Math_imul($i$07$i$201, 10);
        $add$i$203 = $mul$i$202 + $isdigittmp8$i$200 | 0;
        $incdec$ptr$i$204 = $49 + 1 | 0;
        $50 = HEAP8[$incdec$ptr$i$204 >> 0] | 0;
        $conv$i$205 = ($50 << 24 | 0) >> 24 | 0;
        $isdigittmp$i$206 = $conv$i$205 + 4294967248 | 0;
        $isdigit$i$207 = ($isdigittmp$i$206 >>> 0 | 0) >>> 0 < 10 >>> 0;
        if ($isdigit$i$207) block44 : {
         $49 = $incdec$ptr$i$204;
         $i$07$i$201 = $add$i$203;
         $isdigittmp8$i$200 = $isdigittmp$i$206;
        } else block45 : {
         $incdec$ptr169272 = $incdec$ptr$i$204;
         $p$0 = $add$i$203;
         break label$break$L46;
        }
        continue while_out$12;
       } while (0);
      }
      $arrayidx119 = $incdec$ptr169269 + 2 | 0;
      $33 = HEAP8[$arrayidx119 >> 0] | 0;
      $conv120 = ($33 << 24 | 0) >> 24 | 0;
      $isdigittmp187 = $conv120 + 4294967248 | 0;
      $isdigit188 = ($isdigittmp187 >>> 0 | 0) >>> 0 < 10 >>> 0;
      if ($isdigit188) block46 : {
       $arrayidx124 = $incdec$ptr169269 + 3 | 0;
       $34 = HEAP8[$arrayidx124 >> 0] | 0;
       $cmp126 = (($34 << 24 | 0) >> 24 | 0 | 0) == (36 | 0);
       if ($cmp126) block47 : {
        $arrayidx132 = $nl_type + ($isdigittmp187 << 2 | 0) | 0;
        HEAP32[$arrayidx132 >> 2] = 10;
        $35 = HEAP8[$arrayidx119 >> 0] | 0;
        $conv134 = ($35 << 24 | 0) >> 24 | 0;
        $sub135 = $conv134 + 4294967248 | 0;
        $i137 = $nl_arg + ($sub135 << 3 | 0) | 0;
        $36 = $i137;
        $37 = $36;
        $38 = HEAPU32[$37 >> 2] | 0;
        $39 = $36 + 4 | 0;
        $40 = $39;
        $41 = HEAPU32[$40 >> 2] | 0;
        $add$ptr139 = $incdec$ptr169269 + 4 | 0;
        $incdec$ptr169272 = $add$ptr139;
        $p$0 = $38;
        break label$break$L46;
       }
      }
      $tobool141 = ($l10n$3 | 0) == (0 | 0);
      if (($tobool141 | 0) == (0 | 0)) block48 : {
       $retval$0 = 4294967295;
       break label$break$L1;
      }
      if ($tobool25) block49 : {
       $arglist_current2 = HEAPU32[$ap >> 2] | 0;
       $42 = $arglist_current2;
       $43 = 0 + 4 | 0;
       $expanded11 = $43;
       $expanded10 = $expanded11 - 1 | 0;
       $44 = $42 + $expanded10 | 0;
       $45 = 0 + 4 | 0;
       $expanded15 = $45;
       $expanded14 = $expanded15 - 1 | 0;
       $expanded13 = $expanded14 ^ 4294967295 | 0;
       $46 = $44 & $expanded13 | 0;
       $47 = $46;
       $48 = HEAPU32[$47 >> 2] | 0;
       $arglist_next3 = $47 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next3;
       $incdec$ptr169272 = $arrayidx119;
       $p$0 = $48;
      } else block50 : {
       $incdec$ptr169272 = $arrayidx119;
       $p$0 = 0;
      }
     } else block51 : {
      $incdec$ptr169272 = $incdec$ptr169269;
      $p$0 = 4294967295;
     }
    }
    $incdec$ptr169271 = $incdec$ptr169272;
    $st$0 = 0;
    while_out$14 : do block52 : {
     $51 = HEAP8[$incdec$ptr169271 >> 0] | 0;
     $conv163 = ($51 << 24 | 0) >> 24 | 0;
     $sub164 = $conv163 + 4294967231 | 0;
     $cmp165 = ($sub164 >>> 0 | 0) >>> 0 > 57 >>> 0;
     if ($cmp165) block53 : {
      $retval$0 = 4294967295;
      break label$break$L1;
     }
     $incdec$ptr169 = $incdec$ptr169271 + 1 | 0;
     $arrayidx173 = (3611 + Math_imul($st$0, 58) | 0) + $sub164 | 0;
     $52 = HEAP8[$arrayidx173 >> 0] | 0;
     $conv174 = $52 & 255 | 0;
     $sub175 = $conv174 + 4294967295 | 0;
     $cmp176 = ($sub175 >>> 0 | 0) >>> 0 < 8 >>> 0;
     if ($cmp176) block54 : {
      $incdec$ptr169271 = $incdec$ptr169;
      $st$0 = $conv174;
     } else block55 : {
      $$lcssa = $52;
      $conv174$lcssa = $conv174;
      $incdec$ptr169$lcssa = $incdec$ptr169;
      $incdec$ptr169271$lcssa414 = $incdec$ptr169271;
      $st$0$lcssa415 = $st$0;
      break while_out$14;
     }
     continue while_out$14;
    } while (0);
    $tobool178 = (($$lcssa << 24 | 0) >> 24 | 0 | 0) == (0 | 0);
    if ($tobool178) block56 : {
     $retval$0 = 4294967295;
     break label$break$L1;
    }
    $cmp181 = (($$lcssa << 24 | 0) >> 24 | 0 | 0) == (19 | 0);
    $cmp184 = ($argpos$0 | 0) > (4294967295 | 0);
    do_once$16 : {
     if ($cmp181) if ($cmp184) block57 : {
      $retval$0 = 4294967295;
      break label$break$L1;
     } else label = 52; else block58 : {
      if ($cmp184) block59 : {
       $arrayidx192 = $nl_type + ($argpos$0 << 2 | 0) | 0;
       HEAP32[$arrayidx192 >> 2] = $conv174$lcssa;
       $53 = $nl_arg + ($argpos$0 << 3 | 0) | 0;
       $54 = $53;
       $55 = $54;
       $56 = HEAPU32[$55 >> 2] | 0;
       $57 = $54 + 4 | 0;
       $58 = $57;
       $59 = HEAPU32[$58 >> 2] | 0;
       $60 = $arg;
       $61 = $60;
       HEAP32[$61 >> 2] = $56;
       $62 = $60 + 4 | 0;
       $63 = $62;
       HEAP32[$63 >> 2] = $59;
       label = 52;
       break do_once$16;
      }
      if (($tobool25 | 0) == (0 | 0)) block60 : {
       $retval$0 = 0;
       break label$break$L1;
      }
      _pop_arg_336($arg | 0, $conv174$lcssa | 0, $ap | 0);
     }
    }
    if ((label | 0) == (52 | 0)) block61 : {
     label = 0;
     if (($tobool25 | 0) == (0 | 0)) block62 : {
      $cnt$0 = $cnt$1;
      $incdec$ptr169275 = $incdec$ptr169$lcssa;
      $l$0 = $sub$ptr$sub;
      $l10n$0 = $l10n$3;
      continue label$break$L1;
     }
    }
    $64 = HEAP8[$incdec$ptr169271$lcssa414 >> 0] | 0;
    $conv207 = ($64 << 24 | 0) >> 24 | 0;
    $tobool208 = ($st$0$lcssa415 | 0) != (0 | 0);
    $and210 = $conv207 & 15 | 0;
    $cmp211 = ($and210 | 0) == (3 | 0);
    $or$cond192 = $tobool208 & $cmp211 | 0;
    $and214 = $conv207 & 4294967263 | 0;
    if ($or$cond192) wasm2asm_i32$1 = $and214; else wasm2asm_i32$1 = $conv207;
    $t$0 = wasm2asm_i32$1;
    $and216 = $fl$1 & 8192 | 0;
    $tobool217 = ($and216 | 0) == (0 | 0);
    $and219 = $fl$1 & 4294901759 | 0;
    if ($tobool217) wasm2asm_i32$1 = $fl$1; else wasm2asm_i32$1 = $and219;
    $fl$1$and219 = wasm2asm_i32$1;
    label$break$L75 : {
     switch$17 : {
      switch ($t$0 - 65 | 0) {
      case 45:
       block63 : {
        switch$18 : {
         switch ($st$0$lcssa415 - 0 | 0) {
         case 0:
          block64 : {
           $71 = HEAPU32[$arg >> 2] | 0;
           HEAP32[$71 >> 2] = $cnt$1;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 1:
          block65 : {
           $72 = HEAPU32[$arg >> 2] | 0;
           HEAP32[$72 >> 2] = $cnt$1;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 2:
          block66 : {
           $73 = ($cnt$1 | 0) < (0 | 0);
           $74 = ($73 << 31 | 0) >> 31 | 0;
           $75 = HEAPU32[$arg >> 2] | 0;
           $76 = $75;
           $77 = $76;
           HEAP32[$77 >> 2] = $cnt$1;
           $78 = $76 + 4 | 0;
           $79 = $78;
           HEAP32[$79 >> 2] = $74;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 3:
          block67 : {
           $conv229 = $cnt$1 & 65535 | 0;
           $80 = HEAPU32[$arg >> 2] | 0;
           HEAP16[$80 >> 1] = $conv229;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 4:
          block68 : {
           $conv232 = $cnt$1 & 255 | 0;
           $81 = HEAPU32[$arg >> 2] | 0;
           HEAP8[$81 >> 0] = $conv232;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 6:
          block69 : {
           $82 = HEAPU32[$arg >> 2] | 0;
           HEAP32[$82 >> 2] = $cnt$1;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 7:
          block70 : {
           $83 = ($cnt$1 | 0) < (0 | 0);
           $84 = ($83 << 31 | 0) >> 31 | 0;
           $85 = HEAPU32[$arg >> 2] | 0;
           $86 = $85;
           $87 = $86;
           HEAP32[$87 >> 2] = $cnt$1;
           $88 = $86 + 4 | 0;
           $89 = $88;
           HEAP32[$89 >> 2] = $84;
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
           break switch$18;
          }
         case 5:
         default:
          block71 : {
           $cnt$0 = $cnt$1;
           $incdec$ptr169275 = $incdec$ptr169$lcssa;
           $l$0 = $sub$ptr$sub;
           $l10n$0 = $l10n$3;
           continue label$break$L1;
          }
         }
        }
        break switch$17;
       }
      case 47:
       block72 : {
        $cmp240 = ($p$0 >>> 0 | 0) >>> 0 > 8 >>> 0;
        if ($cmp240) wasm2asm_i32$1 = $p$0; else wasm2asm_i32$1 = 8;
        $cond245 = wasm2asm_i32$1;
        $or246 = $fl$1$and219 | 8 | 0;
        $fl$3 = $or246;
        $p$1 = $cond245;
        $t$1 = 120;
        label = 64;
        break switch$17;
       }
      case 23:
      case 55:
       block73 : {
        $fl$3 = $fl$1$and219;
        $p$1 = $p$0;
        $t$1 = $t$0;
        label = 64;
        break switch$17;
       }
      case 46:
       block74 : {
        $116 = $arg;
        $117 = $116;
        $118 = HEAPU32[$117 >> 2] | 0;
        $119 = $116 + 4 | 0;
        $120 = $119;
        $121 = HEAPU32[$120 >> 2] | 0;
        $122 = ($118 | 0) == (0 | 0);
        $123 = ($121 | 0) == (0 | 0);
        $124 = $122 & $123 | 0;
        if ($124) $s$addr$0$lcssa$i$229 = $add$ptr205; else block75 : {
         $126 = $118;
         $129 = $121;
         $s$addr$06$i$221 = $add$ptr205;
         while_out$31 : do block76 : {
          $125 = $126 & 7 | 0;
          $127 = $125 | 48 | 0;
          $128 = $127 & 255 | 0;
          $incdec$ptr$i$225 = $s$addr$06$i$221 + 4294967295 | 0;
          HEAP8[$incdec$ptr$i$225 >> 0] = $128;
          $130 = _bitshift64Lshr($126 | 0, $129 | 0, 3 | 0) | 0;
          $131 = HEAPU32[168 >> 2] | 0;
          $132 = ($130 | 0) == (0 | 0);
          $133 = ($131 | 0) == (0 | 0);
          $134 = $132 & $133 | 0;
          if ($134) block77 : {
           $s$addr$0$lcssa$i$229 = $incdec$ptr$i$225;
           break while_out$31;
          } else block78 : {
           $126 = $130;
           $129 = $131;
           $s$addr$06$i$221 = $incdec$ptr$i$225;
          }
          continue while_out$31;
         } while (0);
        }
        $and263 = $fl$1$and219 & 8 | 0;
        $tobool264 = ($and263 | 0) == (0 | 0);
        if ($tobool264) block79 : {
         $a$0 = $s$addr$0$lcssa$i$229;
         $fl$4 = $fl$1$and219;
         $p$2 = $p$0;
         $pl$1 = 0;
         $prefix$1 = 4091;
         label = 77;
        } else block80 : {
         $sub$ptr$rhs$cast267 = $s$addr$0$lcssa$i$229;
         $sub$ptr$sub268 = $sub$ptr$lhs$cast317 - $sub$ptr$rhs$cast267 | 0;
         $add269 = $sub$ptr$sub268 + 1 | 0;
         $cmp270 = ($p$0 | 0) < ($add269 | 0);
         if ($cmp270) wasm2asm_i32$1 = $add269; else wasm2asm_i32$1 = $p$0;
         $add269$p$0 = wasm2asm_i32$1;
         $a$0 = $s$addr$0$lcssa$i$229;
         $fl$4 = $fl$1$and219;
         $p$2 = $add269$p$0;
         $pl$1 = 0;
         $prefix$1 = 4091;
         label = 77;
        }
        break switch$17;
       }
      case 40:
      case 35:
       block81 : {
        $135 = $arg;
        $136 = $135;
        $137 = HEAPU32[$136 >> 2] | 0;
        $138 = $135 + 4 | 0;
        $139 = $138;
        $140 = HEAPU32[$139 >> 2] | 0;
        $141 = ($140 | 0) < (0 | 0);
        if ($141) block82 : {
         $142 = _i64Subtract(0 | 0, 0 | 0, $137 | 0, $140 | 0) | 0;
         $143 = HEAPU32[168 >> 2] | 0;
         $144 = $arg;
         $145 = $144;
         HEAP32[$145 >> 2] = $142;
         $146 = $144 + 4 | 0;
         $147 = $146;
         HEAP32[$147 >> 2] = $143;
         $148 = $142;
         $149 = $143;
         $pl$0 = 1;
         $prefix$0 = 4091;
         label = 76;
         break label$break$L75;
        }
        $and289 = $fl$1$and219 & 2048 | 0;
        $tobool290 = ($and289 | 0) == (0 | 0);
        if ($tobool290) block83 : {
         $and294 = $fl$1$and219 & 1 | 0;
         $tobool295 = ($and294 | 0) == (0 | 0);
         if ($tobool295) wasm2asm_i32$1 = 4091; else wasm2asm_i32$1 = 4093;
         $$ = wasm2asm_i32$1;
         $148 = $137;
         $149 = $140;
         $pl$0 = $and294;
         $prefix$0 = $$;
         label = 76;
        } else block84 : {
         $148 = $137;
         $149 = $140;
         $pl$0 = 1;
         $prefix$0 = 4092;
         label = 76;
        }
        break switch$17;
       }
      case 52:
       block85 : {
        $65 = $arg;
        $66 = $65;
        $67 = HEAPU32[$66 >> 2] | 0;
        $68 = $65 + 4 | 0;
        $69 = $68;
        $70 = HEAPU32[$69 >> 2] | 0;
        $148 = $67;
        $149 = $70;
        $pl$0 = 0;
        $prefix$0 = 4091;
        label = 76;
        break switch$17;
       }
      case 34:
       block86 : {
        $161 = $arg;
        $162 = $161;
        $163 = HEAPU32[$162 >> 2] | 0;
        $164 = $161 + 4 | 0;
        $165 = $164;
        $166 = HEAPU32[$165 >> 2] | 0;
        $167 = $163 & 255 | 0;
        HEAP8[$add$ptr340 >> 0] = $167;
        $a$2 = $add$ptr340;
        $fl$6 = $and219;
        $p$5 = 1;
        $pl$2 = 0;
        $prefix$2 = 4091;
        $z$2 = $add$ptr205;
        break switch$17;
       }
      case 44:
       block87 : {
        $call344 = ___errno_location() | 0;
        $168 = HEAPU32[$call344 >> 2] | 0;
        $call345 = _strerror($168 | 0) | 0;
        $a$1 = $call345;
        label = 82;
        break switch$17;
       }
      case 50:
       block88 : {
        $169 = HEAPU32[$arg >> 2] | 0;
        $tobool349 = ($169 | 0) != (0 | 0);
        if ($tobool349) wasm2asm_i32$1 = $169; else wasm2asm_i32$1 = 4101;
        $cond354 = wasm2asm_i32$1;
        $a$1 = $cond354;
        label = 82;
        break switch$17;
       }
      case 2:
       block89 : {
        $170 = $arg;
        $171 = $170;
        $172 = HEAPU32[$171 >> 2] | 0;
        $173 = $170 + 4 | 0;
        $174 = $173;
        $175 = HEAPU32[$174 >> 2] | 0;
        HEAP32[$wc >> 2] = $172;
        HEAP32[$arrayidx370 >> 2] = 0;
        HEAP32[$arg >> 2] = $wc;
        $p$4365 = 4294967295;
        label = 86;
        break switch$17;
       }
      case 18:
       block90 : {
        $cmp377$314 = ($p$0 | 0) == (0 | 0);
        if ($cmp377$314) block91 : {
         _pad($f | 0, 32 | 0, $w$1 | 0, 0 | 0, $fl$1$and219 | 0);
         $i$0$lcssa368 = 0;
         label = 98;
        } else block92 : {
         $p$4365 = $p$0;
         label = 86;
        }
        break switch$17;
       }
      case 0:
      case 6:
      case 5:
      case 4:
      case 32:
      case 38:
      case 37:
      case 36:
       block93 : {
        $181 = +HEAPF64[$arg >> 3];
        HEAP32[$e2$i >> 2] = 0;
        HEAPF64[(HEAPU32[24 >> 2] | 0) >> 3] = $181;
        $182 = HEAPU32[(HEAPU32[24 >> 2] | 0) >> 2] | 0;
        $183 = HEAPU32[((HEAPU32[24 >> 2] | 0) + 4 | 0) >> 2] | 0;
        $184 = ($183 | 0) < (0 | 0);
        if ($184) block94 : {
         $sub$i = -$181;
         $pl$0$i = 1;
         $prefix$0$i = 4108;
         $y$addr$0$i = $sub$i;
        } else block95 : {
         $and$i$238 = $fl$1$and219 & 2048 | 0;
         $tobool9$i = ($and$i$238 | 0) == (0 | 0);
         if ($tobool9$i) block96 : {
          $and12$i = $fl$1$and219 & 1 | 0;
          $tobool13$i = ($and12$i | 0) == (0 | 0);
          if ($tobool13$i) wasm2asm_i32$1 = 4109; else wasm2asm_i32$1 = 4114;
          $$$i = wasm2asm_i32$1;
          $pl$0$i = $and12$i;
          $prefix$0$i = $$$i;
          $y$addr$0$i = $181;
         } else block97 : {
          $pl$0$i = 1;
          $prefix$0$i = 4111;
          $y$addr$0$i = $181;
         }
        }
        HEAPF64[(HEAPU32[24 >> 2] | 0) >> 3] = $y$addr$0$i;
        $185 = HEAPU32[(HEAPU32[24 >> 2] | 0) >> 2] | 0;
        $186 = HEAPU32[((HEAPU32[24 >> 2] | 0) + 4 | 0) >> 2] | 0;
        $187 = $186 & 2146435072 | 0;
        $188 = ($187 >>> 0 | 0) >>> 0 < 2146435072 >>> 0;
        $189 = (0 | 0) < (0 | 0);
        $190 = ($187 | 0) == (2146435072 | 0);
        $191 = $190 & $189 | 0;
        $192 = $188 | $191 | 0;
        do_once$49 : {
         if ($192) block98 : {
          $call55$i = +_frexpl(+$y$addr$0$i, $e2$i | 0);
          $mul$i$240 = $call55$i - 2.0;
          $tobool56$i = $mul$i$240 != 0.0;
          if ($tobool56$i) block99 : {
           $195 = HEAPU32[$e2$i >> 2] | 0;
           $dec$i = $195 + 4294967295 | 0;
           HEAP32[$e2$i >> 2] = $dec$i;
          }
          $or$i$241 = $t$0 | 32 | 0;
          $cmp59$i = ($or$i$241 | 0) == (97 | 0);
          if ($cmp59$i) block100 : {
           $and62$i = $t$0 & 32 | 0;
           $tobool63$i = ($and62$i | 0) == (0 | 0);
           $add$ptr65$i = $prefix$0$i + 9 | 0;
           if ($tobool63$i) wasm2asm_i32$1 = $prefix$0$i; else wasm2asm_i32$1 = $add$ptr65$i;
           $prefix$0$add$ptr65$i = wasm2asm_i32$1;
           $add67$i = $pl$0$i | 2 | 0;
           $196 = ($p$0 >>> 0 | 0) >>> 0 > 11 >>> 0;
           $sub74$i = 12 - $p$0 | 0;
           $tobool76552$i = ($sub74$i | 0) == (0 | 0);
           $tobool76$i = $196 | $tobool76552$i | 0;
           do_once$50 : {
            if ($tobool76$i) $y$addr$1$i = $mul$i$240; else block101 : {
             $re$1482$i = $sub74$i;
             $round$0481$i = 8.0;
             while_out$51 : do block102 : {
              $dec78$i = $re$1482$i + 4294967295 | 0;
              $mul80$i = $round$0481$i - 16.0;
              $tobool79$i = ($dec78$i | 0) == (0 | 0);
              if ($tobool79$i) block103 : {
               $mul80$i$lcssa = $mul80$i;
               break while_out$51;
              } else block104 : {
               $re$1482$i = $dec78$i;
               $round$0481$i = $mul80$i;
              }
              continue while_out$51;
             } while (0);
             $197 = HEAP8[$prefix$0$add$ptr65$i >> 0] | 0;
             $cmp82$i = (($197 << 24 | 0) >> 24 | 0 | 0) == (45 | 0);
             if ($cmp82$i) block105 : {
              $sub85$i = -$mul$i$240;
              $sub86$i = +($sub85$i - $mul80$i$lcssa);
              $add87$i = +($mul80$i$lcssa + $sub86$i);
              $sub88$i = -$add87$i;
              $y$addr$1$i = $sub88$i;
              break do_once$50;
             } else block106 : {
              $add90$i = +($mul$i$240 + $mul80$i$lcssa);
              $sub91$i = +($add90$i - $mul80$i$lcssa);
              $y$addr$1$i = $sub91$i;
              break do_once$50;
             }
            }
           }
           $198 = HEAPU32[$e2$i >> 2] | 0;
           $cmp94$i = ($198 | 0) < (0 | 0);
           $sub97$i = 0 - $198 | 0;
           if ($cmp94$i) wasm2asm_i32$1 = $sub97$i; else wasm2asm_i32$1 = $198;
           $cond100$i = wasm2asm_i32$1;
           $199 = ($cond100$i | 0) < (0 | 0);
           $200 = ($199 << 31 | 0) >> 31 | 0;
           $201 = _fmt_u($cond100$i | 0, $200 | 0, $arrayidx$i$236 | 0) | 0;
           $cmp103$i = ($201 | 0) == ($arrayidx$i$236 | 0);
           if ($cmp103$i) block107 : {
            HEAP8[$incdec$ptr106$i >> 0] = 48;
            $estr$0$i = $incdec$ptr106$i;
           } else $estr$0$i = $201;
           $202 = $198 >> 31 | 0;
           $203 = $202 & 2 | 0;
           $204 = $203 + 43 | 0;
           $conv111$i = $204 & 255 | 0;
           $incdec$ptr112$i = $estr$0$i + 4294967295 | 0;
           HEAP8[$incdec$ptr112$i >> 0] = $conv111$i;
           $add113$i = $t$0 + 15 | 0;
           $conv114$i = $add113$i & 255 | 0;
           $incdec$ptr115$i = $estr$0$i + 4294967294 | 0;
           HEAP8[$incdec$ptr115$i >> 0] = $conv114$i;
           $notrhs$i = ($p$0 | 0) < (1 | 0);
           $and134$i = $fl$1$and219 & 8 | 0;
           $tobool135$i = ($and134$i | 0) == (0 | 0);
           $s$0$i = $buf$i;
           $y$addr$2$i = $y$addr$1$i;
           while_out$53 : do block108 : {
            $conv116$i = f64_to_int(+$y$addr$2$i) | 0;
            $arrayidx117$i = 4075 + $conv116$i | 0;
            $205 = HEAP8[$arrayidx117$i >> 0] | 0;
            $conv118$393$i = $205 & 255 | 0;
            $or120$i = $conv118$393$i | $and62$i | 0;
            $conv121$i = $or120$i & 255 | 0;
            $incdec$ptr122$i = $s$0$i + 1 | 0;
            HEAP8[$s$0$i >> 0] = $conv121$i;
            $conv123$i = +($conv116$i | 0);
            $sub124$i = +($y$addr$2$i - $conv123$i);
            $mul125$i = $sub124$i - 16.0;
            $sub$ptr$lhs$cast$i = $incdec$ptr122$i;
            $sub$ptr$sub$i = $sub$ptr$lhs$cast$i - $sub$ptr$rhs$cast$i | 0;
            $cmp127$i = ($sub$ptr$sub$i | 0) == (1 | 0);
            do_once$55 : {
             if ($cmp127$i) block109 : {
              $notlhs$i = $mul125$i == 0.0;
              $or$cond1$not$i = $notrhs$i & $notlhs$i | 0;
              $or$cond$i = $tobool135$i & $or$cond1$not$i | 0;
              if ($or$cond$i) block110 : {
               $s$1$i = $incdec$ptr122$i;
               break do_once$55;
              }
              $incdec$ptr137$i = $s$0$i + 2 | 0;
              HEAP8[$incdec$ptr122$i >> 0] = 46;
              $s$1$i = $incdec$ptr137$i;
             } else $s$1$i = $incdec$ptr122$i;
            }
            $tobool139$i = $mul125$i != 0.0;
            if ($tobool139$i) block111 : {
             $s$0$i = $s$1$i;
             $y$addr$2$i = $mul125$i;
            } else block112 : {
             $s$1$i$lcssa = $s$1$i;
             break while_out$53;
            }
            continue while_out$53;
           } while (0);
           $tobool140$i = ($p$0 | 0) != (0 | 0);
           $$pre566$i = $s$1$i$lcssa;
           $sub146$i = $sub$ptr$sub145$i + $$pre566$i | 0;
           $cmp147$i = ($sub146$i | 0) < ($p$0 | 0);
           $or$cond384 = $tobool140$i & $cmp147$i | 0;
           $sub$ptr$rhs$cast152$i = $incdec$ptr115$i;
           $add150$i = $sub$ptr$sub153$i + $p$0 | 0;
           $add154$i = $add150$i - $sub$ptr$rhs$cast152$i | 0;
           $sub$ptr$rhs$cast161$i = $incdec$ptr115$i;
           $sub$ptr$sub162$i = $sub$ptr$sub159$i - $sub$ptr$rhs$cast161$i | 0;
           $add163$i = $sub$ptr$sub162$i + $$pre566$i | 0;
           if ($or$cond384) wasm2asm_i32$1 = $add154$i; else wasm2asm_i32$1 = $add163$i;
           $l$0$i = wasm2asm_i32$1;
           $add165$i = $l$0$i + $add67$i | 0;
           _pad($f | 0, 32 | 0, $w$1 | 0, $add165$i | 0, $fl$1$and219 | 0);
           $206 = HEAPU32[$f >> 2] | 0;
           $and$i$418$i = $206 & 32 | 0;
           $tobool$i$419$i = ($and$i$418$i | 0) == (0 | 0);
           if ($tobool$i$419$i) ___fwritex($prefix$0$add$ptr65$i | 0, $add67$i | 0, $f | 0) | 0;
           $xor167$i = $fl$1$and219 ^ 65536 | 0;
           _pad($f | 0, 48 | 0, $w$1 | 0, $add165$i | 0, $xor167$i | 0);
           $sub$ptr$sub172$i = $$pre566$i - $sub$ptr$rhs$cast$i | 0;
           $207 = HEAPU32[$f >> 2] | 0;
           $and$i$424$i = $207 & 32 | 0;
           $tobool$i$425$i = ($and$i$424$i | 0) == (0 | 0);
           if ($tobool$i$425$i) ___fwritex($buf$i | 0, $sub$ptr$sub172$i | 0, $f | 0) | 0;
           $sub$ptr$rhs$cast174$i = $incdec$ptr115$i;
           $sub$ptr$sub175$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast174$i | 0;
           $sum = $sub$ptr$sub172$i + $sub$ptr$sub175$i | 0;
           $sub181$i = $l$0$i - $sum | 0;
           _pad($f | 0, 48 | 0, $sub181$i | 0, 0 | 0, 0 | 0);
           $208 = HEAPU32[$f >> 2] | 0;
           $and$i$430$i = $208 & 32 | 0;
           $tobool$i$431$i = ($and$i$430$i | 0) == (0 | 0);
           if ($tobool$i$431$i) ___fwritex($incdec$ptr115$i | 0, $sub$ptr$sub175$i | 0, $f | 0) | 0;
           $xor186$i = $fl$1$and219 ^ 8192 | 0;
           _pad($f | 0, 32 | 0, $w$1 | 0, $add165$i | 0, $xor186$i | 0);
           $cmp188$i = ($add165$i | 0) < ($w$1 | 0);
           if ($cmp188$i) wasm2asm_i32$1 = $w$1; else wasm2asm_i32$1 = $add165$i;
           $w$add165$i = wasm2asm_i32$1;
           $retval$0$i = $w$add165$i;
           break do_once$49;
          }
          $cmp196$i = ($p$0 | 0) < (0 | 0);
          if ($cmp196$i) wasm2asm_i32$1 = 6; else wasm2asm_i32$1 = $p$0;
          $$p$i = wasm2asm_i32$1;
          if ($tobool56$i) block113 : {
           $mul202$i = $mul$i$240 - 268435456.0;
           $209 = HEAPU32[$e2$i >> 2] | 0;
           $sub203$i = $209 + 4294967268 | 0;
           HEAP32[$e2$i >> 2] = $sub203$i;
           $210 = $sub203$i;
           $y$addr$3$i = $mul202$i;
          } else block114 : {
           $$pre564$i = HEAPU32[$e2$i >> 2] | 0;
           $210 = $$pre564$i;
           $y$addr$3$i = $mul$i$240;
          }
          $cmp205$i = ($210 | 0) < (0 | 0);
          if ($cmp205$i) wasm2asm_i32$1 = $big$i; else wasm2asm_i32$1 = $add$ptr213$i;
          $arraydecay208$add$ptr213$i = wasm2asm_i32$1;
          $sub$ptr$rhs$cast345$i = $arraydecay208$add$ptr213$i;
          $y$addr$4$i = $y$addr$3$i;
          $z$0$i = $arraydecay208$add$ptr213$i;
          while_out$56 : do block115 : {
           $conv216$i = (f64_to_int(+$y$addr$4$i) | 0) >>> 0 | 0;
           HEAP32[$z$0$i >> 2] = $conv216$i;
           $incdec$ptr217$i = $z$0$i + 4 | 0;
           $conv218$i = +(($conv216$i >>> 0 | 0) >>> 0);
           $sub219$i = +($y$addr$4$i - $conv218$i);
           $mul220$i = $sub219$i - 1.0e9;
           $tobool222$i = $mul220$i != 0.0;
           if ($tobool222$i) block116 : {
            $y$addr$4$i = $mul220$i;
            $z$0$i = $incdec$ptr217$i;
           } else block117 : {
            $incdec$ptr217$i$lcssa = $incdec$ptr217$i;
            break while_out$56;
           }
           continue while_out$56;
          } while (0);
          $$pr$i = HEAPU32[$e2$i >> 2] | 0;
          $cmp225$547$i = ($$pr$i | 0) > (0 | 0);
          if ($cmp225$547$i) block118 : {
           $211 = $$pr$i;
           $a$1549$i = $arraydecay208$add$ptr213$i;
           $z$1548$i = $incdec$ptr217$i$lcssa;
           while_out$58 : do block119 : {
            $cmp228$i = ($211 | 0) > (29 | 0);
            if ($cmp228$i) wasm2asm_i32$1 = 29; else wasm2asm_i32$1 = $211;
            $cond233$i = wasm2asm_i32$1;
            $d$0$542$i = $z$1548$i + 4294967292 | 0;
            $cmp235$543$i = ($d$0$542$i >>> 0 | 0) >>> 0 < ($a$1549$i >>> 0 | 0) >>> 0;
            do_once$60 : {
             if ($cmp235$543$i) $a$2$ph$i = $a$1549$i; else block120 : {
              $carry$0544$i = 0;
              $d$0545$i = $d$0$542$i;
              while_out$61 : do block121 : {
               $212 = HEAPU32[$d$0545$i >> 2] | 0;
               $213 = _bitshift64Shl($212 | 0, 0 | 0, $cond233$i | 0) | 0;
               $214 = HEAPU32[168 >> 2] | 0;
               $215 = _i64Add($213 | 0, $214 | 0, $carry$0544$i | 0, 0 | 0) | 0;
               $216 = HEAPU32[168 >> 2] | 0;
               $217 = ___uremdi3($215 | 0, $216 | 0, 1e9 | 0, 0 | 0) | 0;
               $218 = HEAPU32[168 >> 2] | 0;
               HEAP32[$d$0545$i >> 2] = $217;
               $219 = ___udivdi3($215 | 0, $216 | 0, 1e9 | 0, 0 | 0) | 0;
               $220 = HEAPU32[168 >> 2] | 0;
               $d$0$i = $d$0545$i + 4294967292 | 0;
               $cmp235$i = ($d$0$i >>> 0 | 0) >>> 0 < ($a$1549$i >>> 0 | 0) >>> 0;
               if ($cmp235$i) block122 : {
                $conv242$i$lcssa = $219;
                break while_out$61;
               } else block123 : {
                $carry$0544$i = $219;
                $d$0545$i = $d$0$i;
               }
               continue while_out$61;
              } while (0);
              $tobool244$i = ($conv242$i$lcssa | 0) == (0 | 0);
              if ($tobool244$i) block124 : {
               $a$2$ph$i = $a$1549$i;
               break do_once$60;
              }
              $incdec$ptr246$i = $a$1549$i + 4294967292 | 0;
              HEAP32[$incdec$ptr246$i >> 2] = $conv242$i$lcssa;
              $a$2$ph$i = $incdec$ptr246$i;
             }
            }
            $z$2$i = $z$1548$i;
            while_out$63 : do block125 : {
             $cmp249$i = ($z$2$i >>> 0 | 0) >>> 0 > ($a$2$ph$i >>> 0 | 0) >>> 0;
             if (($cmp249$i | 0) == (0 | 0)) block126 : {
              $z$2$i$lcssa = $z$2$i;
              break while_out$63;
             }
             $arrayidx251$i = $z$2$i + 4294967292 | 0;
             $221 = HEAPU32[$arrayidx251$i >> 2] | 0;
             $lnot$i = ($221 | 0) == (0 | 0);
             if ($lnot$i) $z$2$i = $arrayidx251$i; else block127 : {
              $z$2$i$lcssa = $z$2$i;
              break while_out$63;
             }
             continue while_out$63;
            } while (0);
            $222 = HEAPU32[$e2$i >> 2] | 0;
            $sub256$i = $222 - $cond233$i | 0;
            HEAP32[$e2$i >> 2] = $sub256$i;
            $cmp225$i = ($sub256$i | 0) > (0 | 0);
            if ($cmp225$i) block128 : {
             $211 = $sub256$i;
             $a$1549$i = $a$2$ph$i;
             $z$1548$i = $z$2$i$lcssa;
            } else block129 : {
             $$pr477$i = $sub256$i;
             $a$1$lcssa$i = $a$2$ph$i;
             $z$1$lcssa$i = $z$2$i$lcssa;
             break while_out$58;
            }
            continue while_out$58;
           } while (0);
          } else block130 : {
           $$pr477$i = $$pr$i;
           $a$1$lcssa$i = $arraydecay208$add$ptr213$i;
           $z$1$lcssa$i = $incdec$ptr217$i$lcssa;
          }
          $cmp259$537$i = ($$pr477$i | 0) < (0 | 0);
          if ($cmp259$537$i) block131 : {
           $add273$i = $$p$i + 25 | 0;
           $div274$i = (($add273$i | 0) / (9 | 0) | 0) & 4294967295 | 0;
           $add275$i = $div274$i + 1 | 0;
           $cmp299$i = ($or$i$241 | 0) == (102 | 0);
           $223 = $$pr477$i;
           $a$3539$i = $a$1$lcssa$i;
           $z$3538$i = $z$1$lcssa$i;
           while_out$65 : do block132 : {
            $sub264$i = 0 - $223 | 0;
            $cmp265$i = ($sub264$i | 0) > (9 | 0);
            if ($cmp265$i) wasm2asm_i32$1 = 9; else wasm2asm_i32$1 = $sub264$i;
            $cond271$i = wasm2asm_i32$1;
            $cmp277$533$i = ($a$3539$i >>> 0 | 0) >>> 0 < ($z$3538$i >>> 0 | 0) >>> 0;
            do_once$67 : {
             if ($cmp277$533$i) block133 : {
              $shl280$i = 1 << $cond271$i | 0;
              $sub281$i = $shl280$i + 4294967295 | 0;
              $shr285$i = 1e9 >>> $cond271$i | 0;
              $carry262$0535$i = 0;
              $d$1534$i = $a$3539$i;
              while_out$68 : do block134 : {
               $225 = HEAPU32[$d$1534$i >> 2] | 0;
               $and282$i = $225 & $sub281$i | 0;
               $shr283$i = $225 >>> $cond271$i | 0;
               $add284$i = $shr283$i + $carry262$0535$i | 0;
               HEAP32[$d$1534$i >> 2] = $add284$i;
               $mul286$i = Math_imul($and282$i, $shr285$i);
               $incdec$ptr288$i = $d$1534$i + 4 | 0;
               $cmp277$i = ($incdec$ptr288$i >>> 0 | 0) >>> 0 < ($z$3538$i >>> 0 | 0) >>> 0;
               if ($cmp277$i) block135 : {
                $carry262$0535$i = $mul286$i;
                $d$1534$i = $incdec$ptr288$i;
               } else block136 : {
                $mul286$i$lcssa = $mul286$i;
                break while_out$68;
               }
               continue while_out$68;
              } while (0);
              $226 = HEAPU32[$a$3539$i >> 2] | 0;
              $tobool290$i = ($226 | 0) == (0 | 0);
              $incdec$ptr292$i = $a$3539$i + 4 | 0;
              if ($tobool290$i) wasm2asm_i32$1 = $incdec$ptr292$i; else wasm2asm_i32$1 = $a$3539$i;
              $incdec$ptr292$a$3$i = wasm2asm_i32$1;
              $tobool294$i = ($mul286$i$lcssa | 0) == (0 | 0);
              if ($tobool294$i) block137 : {
               $incdec$ptr292$a$3573$i = $incdec$ptr292$a$3$i;
               $z$4$i = $z$3538$i;
               break do_once$67;
              }
              $incdec$ptr296$i = $z$3538$i + 4 | 0;
              HEAP32[$z$3538$i >> 2] = $mul286$i$lcssa;
              $incdec$ptr292$a$3573$i = $incdec$ptr292$a$3$i;
              $z$4$i = $incdec$ptr296$i;
             } else block138 : {
              $224 = HEAPU32[$a$3539$i >> 2] | 0;
              $tobool290$569$i = ($224 | 0) == (0 | 0);
              $incdec$ptr292$570$i = $a$3539$i + 4 | 0;
              if ($tobool290$569$i) wasm2asm_i32$1 = $incdec$ptr292$570$i; else wasm2asm_i32$1 = $a$3539$i;
              $incdec$ptr292$a$3$571$i = wasm2asm_i32$1;
              $incdec$ptr292$a$3573$i = $incdec$ptr292$a$3$571$i;
              $z$4$i = $z$3538$i;
             }
            }
            if ($cmp299$i) wasm2asm_i32$1 = $arraydecay208$add$ptr213$i; else wasm2asm_i32$1 = $incdec$ptr292$a$3573$i;
            $cond304$i = wasm2asm_i32$1;
            $sub$ptr$lhs$cast305$i = $z$4$i;
            $sub$ptr$rhs$cast306$i = $cond304$i;
            $sub$ptr$sub307$i = $sub$ptr$lhs$cast305$i - $sub$ptr$rhs$cast306$i | 0;
            $sub$ptr$div$i = $sub$ptr$sub307$i >> 2 | 0;
            $cmp308$i = ($sub$ptr$div$i | 0) > ($add275$i | 0);
            $add$ptr311$i = $cond304$i + ($add275$i << 2 | 0) | 0;
            if ($cmp308$i) wasm2asm_i32$1 = $add$ptr311$i; else wasm2asm_i32$1 = $z$4$i;
            $add$ptr311$z$4$i = wasm2asm_i32$1;
            $227 = HEAPU32[$e2$i >> 2] | 0;
            $add313$i = $227 + $cond271$i | 0;
            HEAP32[$e2$i >> 2] = $add313$i;
            $cmp259$i = ($add313$i | 0) < (0 | 0);
            if ($cmp259$i) block139 : {
             $223 = $add313$i;
             $a$3539$i = $incdec$ptr292$a$3573$i;
             $z$3538$i = $add$ptr311$z$4$i;
            } else block140 : {
             $a$3$lcssa$i = $incdec$ptr292$a$3573$i;
             $z$3$lcssa$i = $add$ptr311$z$4$i;
             break while_out$65;
            }
            continue while_out$65;
           } while (0);
          } else block141 : {
           $a$3$lcssa$i = $a$1$lcssa$i;
           $z$3$lcssa$i = $z$1$lcssa$i;
          }
          $cmp315$i = ($a$3$lcssa$i >>> 0 | 0) >>> 0 < ($z$3$lcssa$i >>> 0 | 0) >>> 0;
          do_once$70 : {
           if ($cmp315$i) block142 : {
            $sub$ptr$rhs$cast319$i = $a$3$lcssa$i;
            $sub$ptr$sub320$i = $sub$ptr$rhs$cast345$i - $sub$ptr$rhs$cast319$i | 0;
            $sub$ptr$div321$i = $sub$ptr$sub320$i >> 2 | 0;
            $mul322$i = Math_imul($sub$ptr$div321$i, 9);
            $228 = HEAPU32[$a$3$lcssa$i >> 2] | 0;
            $cmp324$529$i = ($228 >>> 0 | 0) >>> 0 < 10 >>> 0;
            if ($cmp324$529$i) block143 : {
             $e$1$i = $mul322$i;
             break do_once$70;
            } else block144 : {
             $e$0531$i = $mul322$i;
             $i$0530$i = 10;
            }
            while_out$71 : do block145 : {
             $mul328$i = Math_imul($i$0530$i, 10);
             $inc$i = $e$0531$i + 1 | 0;
             $cmp324$i = ($228 >>> 0 | 0) >>> 0 < ($mul328$i >>> 0 | 0) >>> 0;
             if ($cmp324$i) block146 : {
              $e$1$i = $inc$i;
              break while_out$71;
             } else block147 : {
              $e$0531$i = $inc$i;
              $i$0530$i = $mul328$i;
             }
             continue while_out$71;
            } while (0);
           } else $e$1$i = 0;
          }
          $cmp333$i = ($or$i$241 | 0) != (102 | 0);
          if ($cmp333$i) wasm2asm_i32$1 = $e$1$i; else wasm2asm_i32$1 = 0;
          $mul335$i = wasm2asm_i32$1;
          $sub336$i = $$p$i - $mul335$i | 0;
          $cmp338$i = ($or$i$241 | 0) == (103 | 0);
          $tobool341$i = ($$p$i | 0) != (0 | 0);
          $229 = $tobool341$i & $cmp338$i | 0;
          $land$ext$neg$i = ($229 << 31 | 0) >> 31 | 0;
          $sub343$i = $sub336$i + $land$ext$neg$i | 0;
          $sub$ptr$lhs$cast344$i = $z$3$lcssa$i;
          $sub$ptr$sub346$i = $sub$ptr$lhs$cast344$i - $sub$ptr$rhs$cast345$i | 0;
          $sub$ptr$div347$i = $sub$ptr$sub346$i >> 2 | 0;
          $230 = Math_imul($sub$ptr$div347$i, 9);
          $mul349$i = $230 + 4294967287 | 0;
          $cmp350$i = ($sub343$i | 0) < ($mul349$i | 0);
          if ($cmp350$i) block148 : {
           $add$ptr354$i = $arraydecay208$add$ptr213$i + 4 | 0;
           $add355$i = $sub343$i + 9216 | 0;
           $div356$i = (($add355$i | 0) / (9 | 0) | 0) & 4294967295 | 0;
           $sub357$i = $div356$i + 4294966272 | 0;
           $add$ptr358$i = $add$ptr354$i + ($sub357$i << 2 | 0) | 0;
           $rem360$i = (($add355$i | 0) % (9 | 0) | 0) & 4294967295 | 0;
           $j$0$524$i = $rem360$i + 1 | 0;
           $cmp363$525$i = ($j$0$524$i | 0) < (9 | 0);
           if ($cmp363$525$i) block149 : {
            $i$1526$i = 10;
            $j$0527$i = $j$0$524$i;
            while_out$73 : do block150 : {
             $mul367$i = Math_imul($i$1526$i, 10);
             $j$0$i = $j$0527$i + 1 | 0;
             $exitcond$i = ($j$0$i | 0) == (9 | 0);
             if ($exitcond$i) block151 : {
              $i$1$lcssa$i = $mul367$i;
              break while_out$73;
             } else block152 : {
              $i$1526$i = $mul367$i;
              $j$0527$i = $j$0$i;
             }
             continue while_out$73;
            } while (0);
           } else $i$1$lcssa$i = 10;
           $231 = HEAPU32[$add$ptr358$i >> 2] | 0;
           $rem370$i = ((($231 >>> 0 | 0) >>> 0) % (($i$1$lcssa$i >>> 0 | 0) >>> 0) | 0) & 4294967295 | 0;
           $tobool371$i = ($rem370$i | 0) == (0 | 0);
           $add$ptr373$i = $add$ptr358$i + 4 | 0;
           $cmp374$i = ($add$ptr373$i | 0) == ($z$3$lcssa$i | 0);
           $or$cond395$i = $cmp374$i & $tobool371$i | 0;
           do_once$75 : {
            if ($or$cond395$i) block153 : {
             $a$8$i = $a$3$lcssa$i;
             $d$4$i = $add$ptr358$i;
             $e$4$i = $e$1$i;
            } else block154 : {
             $div378$i = ((($231 >>> 0 | 0) >>> 0) / (($i$1$lcssa$i >>> 0 | 0) >>> 0) | 0) & 4294967295 | 0;
             $and379$i = $div378$i & 1 | 0;
             $tobool380$i = ($and379$i | 0) == (0 | 0);
             if ($tobool380$i) wasm2asm_f64$0 = 9007199254740992.0; else wasm2asm_f64$0 = 9007199254740994.0;
             $$396$i = wasm2asm_f64$0;
             $div384$i = (($i$1$lcssa$i | 0) / (2 | 0) | 0) & 4294967295 | 0;
             $cmp385$i = ($rem370$i >>> 0 | 0) >>> 0 < ($div384$i >>> 0 | 0) >>> 0;
             if ($cmp385$i) $small$0$i = .5; else block155 : {
              $cmp390$i = ($rem370$i | 0) == ($div384$i | 0);
              $or$cond397$i = $cmp374$i & $cmp390$i | 0;
              if ($or$cond397$i) wasm2asm_f64$0 = 1.0; else wasm2asm_f64$0 = 1.5;
              $$404$i = wasm2asm_f64$0;
              $small$0$i = $$404$i;
             }
             $tobool400$i = ($pl$0$i | 0) == (0 | 0);
             do_once$76 : {
              if ($tobool400$i) block156 : {
               $round377$1$i = $$396$i;
               $small$1$i = $small$0$i;
              } else block157 : {
               $232 = HEAP8[$prefix$0$i >> 0] | 0;
               $cmp403$i = (($232 << 24 | 0) >> 24 | 0 | 0) == (45 | 0);
               if (($cmp403$i | 0) == (0 | 0)) block158 : {
                $round377$1$i = $$396$i;
                $small$1$i = $small$0$i;
                break do_once$76;
               }
               $mul406$i = -$$396$i;
               $mul407$i = -$small$0$i;
               $round377$1$i = $mul406$i;
               $small$1$i = $mul407$i;
              }
             }
             $sub409$i = $231 - $rem370$i | 0;
             HEAP32[$add$ptr358$i >> 2] = $sub409$i;
             $add410$i = +($round377$1$i + $small$1$i);
             $cmp411$i = $add410$i != $round377$1$i;
             if (($cmp411$i | 0) == (0 | 0)) block159 : {
              $a$8$i = $a$3$lcssa$i;
              $d$4$i = $add$ptr358$i;
              $e$4$i = $e$1$i;
              break do_once$75;
             }
             $add414$i = $sub409$i + $i$1$lcssa$i | 0;
             HEAP32[$add$ptr358$i >> 2] = $add414$i;
             $cmp416$519$i = ($add414$i >>> 0 | 0) >>> 0 > 999999999 >>> 0;
             if ($cmp416$519$i) block160 : {
              $a$5521$i = $a$3$lcssa$i;
              $d$2520$i = $add$ptr358$i;
              while_out$77 : do block161 : {
               $incdec$ptr419$i = $d$2520$i + 4294967292 | 0;
               HEAP32[$d$2520$i >> 2] = 0;
               $cmp420$i = ($incdec$ptr419$i >>> 0 | 0) >>> 0 < ($a$5521$i >>> 0 | 0) >>> 0;
               if ($cmp420$i) block162 : {
                $incdec$ptr423$i = $a$5521$i + 4294967292 | 0;
                HEAP32[$incdec$ptr423$i >> 2] = 0;
                $a$6$i = $incdec$ptr423$i;
               } else $a$6$i = $a$5521$i;
               $233 = HEAPU32[$incdec$ptr419$i >> 2] | 0;
               $inc425$i = $233 + 1 | 0;
               HEAP32[$incdec$ptr419$i >> 2] = $inc425$i;
               $cmp416$i = ($inc425$i >>> 0 | 0) >>> 0 > 999999999 >>> 0;
               if ($cmp416$i) block163 : {
                $a$5521$i = $a$6$i;
                $d$2520$i = $incdec$ptr419$i;
               } else block164 : {
                $a$5$lcssa$i = $a$6$i;
                $d$2$lcssa$i = $incdec$ptr419$i;
                break while_out$77;
               }
               continue while_out$77;
              } while (0);
             } else block165 : {
              $a$5$lcssa$i = $a$3$lcssa$i;
              $d$2$lcssa$i = $add$ptr358$i;
             }
             $sub$ptr$rhs$cast428$i = $a$5$lcssa$i;
             $sub$ptr$sub429$i = $sub$ptr$rhs$cast345$i - $sub$ptr$rhs$cast428$i | 0;
             $sub$ptr$div430$i = $sub$ptr$sub429$i >> 2 | 0;
             $mul431$i = Math_imul($sub$ptr$div430$i, 9);
             $234 = HEAPU32[$a$5$lcssa$i >> 2] | 0;
             $cmp433$515$i = ($234 >>> 0 | 0) >>> 0 < 10 >>> 0;
             if ($cmp433$515$i) block166 : {
              $a$8$i = $a$5$lcssa$i;
              $d$4$i = $d$2$lcssa$i;
              $e$4$i = $mul431$i;
              break do_once$75;
             } else block167 : {
              $e$2517$i = $mul431$i;
              $i$2516$i = 10;
             }
             while_out$79 : do block168 : {
              $mul437$i = Math_imul($i$2516$i, 10);
              $inc438$i = $e$2517$i + 1 | 0;
              $cmp433$i = ($234 >>> 0 | 0) >>> 0 < ($mul437$i >>> 0 | 0) >>> 0;
              if ($cmp433$i) block169 : {
               $a$8$i = $a$5$lcssa$i;
               $d$4$i = $d$2$lcssa$i;
               $e$4$i = $inc438$i;
               break while_out$79;
              } else block170 : {
               $e$2517$i = $inc438$i;
               $i$2516$i = $mul437$i;
              }
              continue while_out$79;
             } while (0);
            }
           }
           $add$ptr442$i = $d$4$i + 4 | 0;
           $cmp443$i = ($z$3$lcssa$i >>> 0 | 0) >>> 0 > ($add$ptr442$i >>> 0 | 0) >>> 0;
           if ($cmp443$i) wasm2asm_i32$1 = $add$ptr442$i; else wasm2asm_i32$1 = $z$3$lcssa$i;
           $add$ptr442$z$3$i = wasm2asm_i32$1;
           $a$9$ph$i = $a$8$i;
           $e$5$ph$i = $e$4$i;
           $z$7$ph$i = $add$ptr442$z$3$i;
          } else block171 : {
           $a$9$ph$i = $a$3$lcssa$i;
           $e$5$ph$i = $e$1$i;
           $z$7$ph$i = $z$3$lcssa$i;
          }
          $sub626$le$i = 0 - $e$5$ph$i | 0;
          $z$7$i = $z$7$ph$i;
          while_out$81 : do block172 : {
           $cmp450$i = ($z$7$i >>> 0 | 0) >>> 0 > ($a$9$ph$i >>> 0 | 0) >>> 0;
           if (($cmp450$i | 0) == (0 | 0)) block173 : {
            $cmp450$lcssa$i = 0;
            $z$7$i$lcssa = $z$7$i;
            break while_out$81;
           }
           $arrayidx453$i = $z$7$i + 4294967292 | 0;
           $235 = HEAPU32[$arrayidx453$i >> 2] | 0;
           $lnot455$i = ($235 | 0) == (0 | 0);
           if ($lnot455$i) $z$7$i = $arrayidx453$i; else block174 : {
            $cmp450$lcssa$i = 1;
            $z$7$i$lcssa = $z$7$i;
            break while_out$81;
           }
           continue while_out$81;
          } while (0);
          do_once$83 : {
           if ($cmp338$i) block175 : {
            $236 = $tobool341$i & 1 | 0;
            $inc468$i = $236 ^ 1 | 0;
            $$p$inc468$i = $inc468$i + $$p$i | 0;
            $cmp470$i = ($$p$inc468$i | 0) > ($e$5$ph$i | 0);
            $cmp473$i = ($e$5$ph$i | 0) > (4294967291 | 0);
            $or$cond2$i = $cmp470$i & $cmp473$i | 0;
            if ($or$cond2$i) block176 : {
             $dec476$i = $t$0 + 4294967295 | 0;
             $add477$neg$i = $$p$inc468$i + 4294967295 | 0;
             $sub478$i = $add477$neg$i - $e$5$ph$i | 0;
             $p$addr$2$i = $sub478$i;
             $t$addr$0$i = $dec476$i;
            } else block177 : {
             $sub480$i = $t$0 + 4294967294 | 0;
             $dec481$i = $$p$inc468$i + 4294967295 | 0;
             $p$addr$2$i = $dec481$i;
             $t$addr$0$i = $sub480$i;
            }
            $and483$i = $fl$1$and219 & 8 | 0;
            $tobool484$i = ($and483$i | 0) == (0 | 0);
            if (($tobool484$i | 0) == (0 | 0)) block178 : {
             $and610$pre$phi$iZ2D = $and483$i;
             $p$addr$3$i = $p$addr$2$i;
             $t$addr$1$i = $t$addr$0$i;
             break do_once$83;
            }
            do_once$84 : {
             if ($cmp450$lcssa$i) block179 : {
              $arrayidx489$i = $z$7$i$lcssa + 4294967292 | 0;
              $237 = HEAPU32[$arrayidx489$i >> 2] | 0;
              $tobool490$i = ($237 | 0) == (0 | 0);
              if ($tobool490$i) block180 : {
               $j$2$i = 9;
               break do_once$84;
              }
              $rem494$510$i = ((($237 >>> 0 | 0) >>> 0) % (10 >>> 0) | 0) & 4294967295 | 0;
              $cmp495$511$i = ($rem494$510$i | 0) == (0 | 0);
              if ($cmp495$511$i) block181 : {
               $i$3512$i = 10;
               $j$1513$i = 0;
              } else block182 : {
               $j$2$i = 0;
               break do_once$84;
              }
              while_out$85 : do block183 : {
               $mul499$i = Math_imul($i$3512$i, 10);
               $inc500$i = $j$1513$i + 1 | 0;
               $rem494$i = ((($237 >>> 0 | 0) >>> 0) % (($mul499$i >>> 0 | 0) >>> 0) | 0) & 4294967295 | 0;
               $cmp495$i = ($rem494$i | 0) == (0 | 0);
               if ($cmp495$i) block184 : {
                $i$3512$i = $mul499$i;
                $j$1513$i = $inc500$i;
               } else block185 : {
                $j$2$i = $inc500$i;
                break while_out$85;
               }
               continue while_out$85;
              } while (0);
             } else $j$2$i = 9;
            }
            $or504$i = $t$addr$0$i | 32 | 0;
            $cmp505$i = ($or504$i | 0) == (102 | 0);
            $sub$ptr$lhs$cast508$i = $z$7$i$lcssa;
            $sub$ptr$sub510$i = $sub$ptr$lhs$cast508$i - $sub$ptr$rhs$cast345$i | 0;
            $sub$ptr$div511$i = $sub$ptr$sub510$i >> 2 | 0;
            $238 = Math_imul($sub$ptr$div511$i, 9);
            $mul513$i = $238 + 4294967287 | 0;
            if ($cmp505$i) block186 : {
             $sub514$i = $mul513$i - $j$2$i | 0;
             $cmp515$i = ($sub514$i | 0) < (0 | 0);
             if ($cmp515$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub514$i;
             $$sub514$i = wasm2asm_i32$1;
             $cmp528$i = ($p$addr$2$i | 0) < ($$sub514$i | 0);
             if ($cmp528$i) wasm2asm_i32$1 = $p$addr$2$i; else wasm2asm_i32$1 = $$sub514$i;
             $p$addr$2$$sub514398$i = wasm2asm_i32$1;
             $and610$pre$phi$iZ2D = 0;
             $p$addr$3$i = $p$addr$2$$sub514398$i;
             $t$addr$1$i = $t$addr$0$i;
             break do_once$83;
            } else block187 : {
             $add561$i = $mul513$i + $e$5$ph$i | 0;
             $sub562$i = $add561$i - $j$2$i | 0;
             $cmp563$i = ($sub562$i | 0) < (0 | 0);
             if ($cmp563$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub562$i;
             $$sub562$i = wasm2asm_i32$1;
             $cmp577$i = ($p$addr$2$i | 0) < ($$sub562$i | 0);
             if ($cmp577$i) wasm2asm_i32$1 = $p$addr$2$i; else wasm2asm_i32$1 = $$sub562$i;
             $p$addr$2$$sub562399$i = wasm2asm_i32$1;
             $and610$pre$phi$iZ2D = 0;
             $p$addr$3$i = $p$addr$2$$sub562399$i;
             $t$addr$1$i = $t$addr$0$i;
             break do_once$83;
            }
           } else block188 : {
            $$pre567$i = $fl$1$and219 & 8 | 0;
            $and610$pre$phi$iZ2D = $$pre567$i;
            $p$addr$3$i = $$p$i;
            $t$addr$1$i = $t$0;
           }
          }
          $239 = $p$addr$3$i | $and610$pre$phi$iZ2D | 0;
          $240 = ($239 | 0) != (0 | 0);
          $lor$ext$i = $240 & 1 | 0;
          $or613$i = $t$addr$1$i | 32 | 0;
          $cmp614$i = ($or613$i | 0) == (102 | 0);
          if ($cmp614$i) block189 : {
           $cmp617$i = ($e$5$ph$i | 0) > (0 | 0);
           if ($cmp617$i) wasm2asm_i32$1 = $e$5$ph$i; else wasm2asm_i32$1 = 0;
           $add620$i = wasm2asm_i32$1;
           $estr$2$i = 0;
           $sub$ptr$sub650$pn$i = $add620$i;
          } else block190 : {
           $cmp623$i = ($e$5$ph$i | 0) < (0 | 0);
           if ($cmp623$i) wasm2asm_i32$1 = $sub626$le$i; else wasm2asm_i32$1 = $e$5$ph$i;
           $cond629$i = wasm2asm_i32$1;
           $241 = ($cond629$i | 0) < (0 | 0);
           $242 = ($241 << 31 | 0) >> 31 | 0;
           $243 = _fmt_u($cond629$i | 0, $242 | 0, $arrayidx$i$236 | 0) | 0;
           $sub$ptr$rhs$cast634$504$i = $243;
           $sub$ptr$sub635$505$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast634$504$i | 0;
           $cmp636$506$i = ($sub$ptr$sub635$505$i | 0) < (2 | 0);
           if ($cmp636$506$i) block191 : {
            $estr$1507$i = $243;
            while_out$87 : do block192 : {
             $incdec$ptr639$i = $estr$1507$i + 4294967295 | 0;
             HEAP8[$incdec$ptr639$i >> 0] = 48;
             $sub$ptr$rhs$cast634$i = $incdec$ptr639$i;
             $sub$ptr$sub635$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast634$i | 0;
             $cmp636$i = ($sub$ptr$sub635$i | 0) < (2 | 0);
             if ($cmp636$i) $estr$1507$i = $incdec$ptr639$i; else block193 : {
              $estr$1$lcssa$i = $incdec$ptr639$i;
              break while_out$87;
             }
             continue while_out$87;
            } while (0);
           } else $estr$1$lcssa$i = $243;
           $244 = $e$5$ph$i >> 31 | 0;
           $245 = $244 & 2 | 0;
           $246 = $245 + 43 | 0;
           $conv644$i = $246 & 255 | 0;
           $incdec$ptr645$i = $estr$1$lcssa$i + 4294967295 | 0;
           HEAP8[$incdec$ptr645$i >> 0] = $conv644$i;
           $conv646$i = $t$addr$1$i & 255 | 0;
           $incdec$ptr647$i = $estr$1$lcssa$i + 4294967294 | 0;
           HEAP8[$incdec$ptr647$i >> 0] = $conv646$i;
           $sub$ptr$rhs$cast649$i = $incdec$ptr647$i;
           $sub$ptr$sub650$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast649$i | 0;
           $estr$2$i = $incdec$ptr647$i;
           $sub$ptr$sub650$pn$i = $sub$ptr$sub650$i;
          }
          $add608$i = $pl$0$i + 1 | 0;
          $add612$i = $add608$i + $p$addr$3$i | 0;
          $l$1$i = $add612$i + $lor$ext$i | 0;
          $add653$i = $l$1$i + $sub$ptr$sub650$pn$i | 0;
          _pad($f | 0, 32 | 0, $w$1 | 0, $add653$i | 0, $fl$1$and219 | 0);
          $247 = HEAPU32[$f >> 2] | 0;
          $and$i$436$i = $247 & 32 | 0;
          $tobool$i$437$i = ($and$i$436$i | 0) == (0 | 0);
          if ($tobool$i$437$i) ___fwritex($prefix$0$i | 0, $pl$0$i | 0, $f | 0) | 0;
          $xor655$i = $fl$1$and219 ^ 65536 | 0;
          _pad($f | 0, 48 | 0, $w$1 | 0, $add653$i | 0, $xor655$i | 0);
          do_once$89 : {
           if ($cmp614$i) block194 : {
            $cmp660$i = ($a$9$ph$i >>> 0 | 0) >>> 0 > ($arraydecay208$add$ptr213$i >>> 0 | 0) >>> 0;
            if ($cmp660$i) wasm2asm_i32$1 = $arraydecay208$add$ptr213$i; else wasm2asm_i32$1 = $a$9$ph$i;
            $r$0$a$9$i = wasm2asm_i32$1;
            $d$5494$i = $r$0$a$9$i;
            while_out$90 : do block195 : {
             $248 = HEAPU32[$d$5494$i >> 2] | 0;
             $249 = _fmt_u($248 | 0, 0 | 0, $add$ptr671$i | 0) | 0;
             $cmp673$i = ($d$5494$i | 0) == ($r$0$a$9$i | 0);
             do_once$92 : {
              if ($cmp673$i) block196 : {
               $cmp686$i = ($249 | 0) == ($add$ptr671$i | 0);
               if (($cmp686$i | 0) == (0 | 0)) block197 : {
                $s668$1$i = $249;
                break do_once$92;
               }
               HEAP8[$incdec$ptr689$i >> 0] = 48;
               $s668$1$i = $incdec$ptr689$i;
              } else block198 : {
               $cmp678$491$i = ($249 >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
               if ($cmp678$491$i) $s668$0492$i = $249; else block199 : {
                $s668$1$i = $249;
                break do_once$92;
               }
               while_out$93 : do block200 : {
                $incdec$ptr681$i = $s668$0492$i + 4294967295 | 0;
                HEAP8[$incdec$ptr681$i >> 0] = 48;
                $cmp678$i = ($incdec$ptr681$i >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
                if ($cmp678$i) $s668$0492$i = $incdec$ptr681$i; else block201 : {
                 $s668$1$i = $incdec$ptr681$i;
                 break while_out$93;
                }
                continue while_out$93;
               } while (0);
              }
             }
             $250 = HEAPU32[$f >> 2] | 0;
             $and$i$442$i = $250 & 32 | 0;
             $tobool$i$443$i = ($and$i$442$i | 0) == (0 | 0);
             if ($tobool$i$443$i) block202 : {
              $sub$ptr$rhs$cast695$i = $s668$1$i;
              $sub$ptr$sub696$i = $sub$ptr$lhs$cast694$i - $sub$ptr$rhs$cast695$i | 0;
              ___fwritex($s668$1$i | 0, $sub$ptr$sub696$i | 0, $f | 0) | 0;
             }
             $incdec$ptr698$i = $d$5494$i + 4 | 0;
             $cmp665$i = ($incdec$ptr698$i >>> 0 | 0) >>> 0 > ($arraydecay208$add$ptr213$i >>> 0 | 0) >>> 0;
             if ($cmp665$i) block203 : {
              $incdec$ptr698$i$lcssa = $incdec$ptr698$i;
              break while_out$90;
             } else $d$5494$i = $incdec$ptr698$i;
             continue while_out$90;
            } while (0);
            $251 = ($239 | 0) == (0 | 0);
            do_once$95 : {
             if (($251 | 0) == (0 | 0)) block204 : {
              $252 = HEAPU32[$f >> 2] | 0;
              $and$i$448$i = $252 & 32 | 0;
              $tobool$i$449$i = ($and$i$448$i | 0) == (0 | 0);
              if (($tobool$i$449$i | 0) == (0 | 0)) break do_once$95;
              ___fwritex(4143 | 0, 1 | 0, $f | 0) | 0;
             }
            }
            $cmp707$486$i = ($incdec$ptr698$i$lcssa >>> 0 | 0) >>> 0 < ($z$7$i$lcssa >>> 0 | 0) >>> 0;
            $cmp710$487$i = ($p$addr$3$i | 0) > (0 | 0);
            $253 = $cmp710$487$i & $cmp707$486$i | 0;
            if ($253) block205 : {
             $d$6488$i = $incdec$ptr698$i$lcssa;
             $p$addr$4489$i = $p$addr$3$i;
             while_out$96 : do block206 : {
              $254 = HEAPU32[$d$6488$i >> 2] | 0;
              $255 = _fmt_u($254 | 0, 0 | 0, $add$ptr671$i | 0) | 0;
              $cmp722$483$i = ($255 >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
              if ($cmp722$483$i) block207 : {
               $s715$0484$i = $255;
               while_out$98 : do block208 : {
                $incdec$ptr725$i = $s715$0484$i + 4294967295 | 0;
                HEAP8[$incdec$ptr725$i >> 0] = 48;
                $cmp722$i = ($incdec$ptr725$i >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
                if ($cmp722$i) $s715$0484$i = $incdec$ptr725$i; else block209 : {
                 $s715$0$lcssa$i = $incdec$ptr725$i;
                 break while_out$98;
                }
                continue while_out$98;
               } while (0);
              } else $s715$0$lcssa$i = $255;
              $256 = HEAPU32[$f >> 2] | 0;
              $and$i$454$i = $256 & 32 | 0;
              $tobool$i$455$i = ($and$i$454$i | 0) == (0 | 0);
              if ($tobool$i$455$i) block210 : {
               $cmp727$i = ($p$addr$4489$i | 0) > (9 | 0);
               if ($cmp727$i) wasm2asm_i32$1 = 9; else wasm2asm_i32$1 = $p$addr$4489$i;
               $cond732$i = wasm2asm_i32$1;
               ___fwritex($s715$0$lcssa$i | 0, $cond732$i | 0, $f | 0) | 0;
              }
              $incdec$ptr734$i = $d$6488$i + 4 | 0;
              $sub735$i = $p$addr$4489$i + 4294967287 | 0;
              $cmp707$i = ($incdec$ptr734$i >>> 0 | 0) >>> 0 < ($z$7$i$lcssa >>> 0 | 0) >>> 0;
              $cmp710$i = ($p$addr$4489$i | 0) > (9 | 0);
              $257 = $cmp710$i & $cmp707$i | 0;
              if ($257) block211 : {
               $d$6488$i = $incdec$ptr734$i;
               $p$addr$4489$i = $sub735$i;
              } else block212 : {
               $p$addr$4$lcssa$i = $sub735$i;
               break while_out$96;
              }
              continue while_out$96;
             } while (0);
            } else $p$addr$4$lcssa$i = $p$addr$3$i;
            $add737$i = $p$addr$4$lcssa$i + 9 | 0;
            _pad($f | 0, 48 | 0, $add737$i | 0, 9 | 0, 0 | 0);
           } else block213 : {
            $add$ptr742$i = $a$9$ph$i + 4 | 0;
            if ($cmp450$lcssa$i) wasm2asm_i32$1 = $z$7$i$lcssa; else wasm2asm_i32$1 = $add$ptr742$i;
            $z$7$add$ptr742$i = wasm2asm_i32$1;
            $cmp748$499$i = ($p$addr$3$i | 0) > (4294967295 | 0);
            if ($cmp748$499$i) block214 : {
             $tobool781$i = ($and610$pre$phi$iZ2D | 0) == (0 | 0);
             $d$7500$i = $a$9$ph$i;
             $p$addr$5501$i = $p$addr$3$i;
             while_out$100 : do block215 : {
              $258 = HEAPU32[$d$7500$i >> 2] | 0;
              $259 = _fmt_u($258 | 0, 0 | 0, $add$ptr671$i | 0) | 0;
              $cmp760$i = ($259 | 0) == ($add$ptr671$i | 0);
              if ($cmp760$i) block216 : {
               HEAP8[$incdec$ptr689$i >> 0] = 48;
               $s753$0$i = $incdec$ptr689$i;
              } else $s753$0$i = $259;
              $cmp765$i = ($d$7500$i | 0) == ($a$9$ph$i | 0);
              do_once$102 : {
               if ($cmp765$i) block217 : {
                $incdec$ptr776$i = $s753$0$i + 1 | 0;
                $260 = HEAPU32[$f >> 2] | 0;
                $and$i$460$i = $260 & 32 | 0;
                $tobool$i$461$i = ($and$i$460$i | 0) == (0 | 0);
                if ($tobool$i$461$i) ___fwritex($s753$0$i | 0, 1 | 0, $f | 0) | 0;
                $cmp777$i = ($p$addr$5501$i | 0) < (1 | 0);
                $or$cond401$i = $tobool781$i & $cmp777$i | 0;
                if ($or$cond401$i) block218 : {
                 $s753$2$i = $incdec$ptr776$i;
                 break do_once$102;
                }
                $261 = HEAPU32[$f >> 2] | 0;
                $and$i$466$i = $261 & 32 | 0;
                $tobool$i$467$i = ($and$i$466$i | 0) == (0 | 0);
                if (($tobool$i$467$i | 0) == (0 | 0)) block219 : {
                 $s753$2$i = $incdec$ptr776$i;
                 break do_once$102;
                }
                ___fwritex(4143 | 0, 1 | 0, $f | 0) | 0;
                $s753$2$i = $incdec$ptr776$i;
               } else block220 : {
                $cmp770$495$i = ($s753$0$i >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
                if ($cmp770$495$i) $s753$1496$i = $s753$0$i; else block221 : {
                 $s753$2$i = $s753$0$i;
                 break do_once$102;
                }
                while_out$103 : do block222 : {
                 $incdec$ptr773$i = $s753$1496$i + 4294967295 | 0;
                 HEAP8[$incdec$ptr773$i >> 0] = 48;
                 $cmp770$i = ($incdec$ptr773$i >>> 0 | 0) >>> 0 > ($buf$i >>> 0 | 0) >>> 0;
                 if ($cmp770$i) $s753$1496$i = $incdec$ptr773$i; else block223 : {
                  $s753$2$i = $incdec$ptr773$i;
                  break while_out$103;
                 }
                 continue while_out$103;
                } while (0);
               }
              }
              $sub$ptr$rhs$cast788$i = $s753$2$i;
              $sub$ptr$sub789$i = $sub$ptr$lhs$cast694$i - $sub$ptr$rhs$cast788$i | 0;
              $262 = HEAPU32[$f >> 2] | 0;
              $and$i$472$i = $262 & 32 | 0;
              $tobool$i$473$i = ($and$i$472$i | 0) == (0 | 0);
              if ($tobool$i$473$i) block224 : {
               $cmp790$i = ($p$addr$5501$i | 0) > ($sub$ptr$sub789$i | 0);
               if ($cmp790$i) wasm2asm_i32$1 = $sub$ptr$sub789$i; else wasm2asm_i32$1 = $p$addr$5501$i;
               $cond800$i = wasm2asm_i32$1;
               ___fwritex($s753$2$i | 0, $cond800$i | 0, $f | 0) | 0;
              }
              $sub806$i = $p$addr$5501$i - $sub$ptr$sub789$i | 0;
              $incdec$ptr808$i = $d$7500$i + 4 | 0;
              $cmp745$i = ($incdec$ptr808$i >>> 0 | 0) >>> 0 < ($z$7$add$ptr742$i >>> 0 | 0) >>> 0;
              $cmp748$i = ($sub806$i | 0) > (4294967295 | 0);
              $263 = $cmp745$i & $cmp748$i | 0;
              if ($263) block225 : {
               $d$7500$i = $incdec$ptr808$i;
               $p$addr$5501$i = $sub806$i;
              } else block226 : {
               $p$addr$5$lcssa$i = $sub806$i;
               break while_out$100;
              }
              continue while_out$100;
             } while (0);
            } else $p$addr$5$lcssa$i = $p$addr$3$i;
            $add810$i = $p$addr$5$lcssa$i + 18 | 0;
            _pad($f | 0, 48 | 0, $add810$i | 0, 18 | 0, 0 | 0);
            $264 = HEAPU32[$f >> 2] | 0;
            $and$i$i = $264 & 32 | 0;
            $tobool$i$i = ($and$i$i | 0) == (0 | 0);
            if (($tobool$i$i | 0) == (0 | 0)) break do_once$89;
            $sub$ptr$rhs$cast812$i = $estr$2$i;
            $sub$ptr$sub813$i = $sub$ptr$lhs$cast160$i - $sub$ptr$rhs$cast812$i | 0;
            ___fwritex($estr$2$i | 0, $sub$ptr$sub813$i | 0, $f | 0) | 0;
           }
          }
          $xor816$i = $fl$1$and219 ^ 8192 | 0;
          _pad($f | 0, 32 | 0, $w$1 | 0, $add653$i | 0, $xor816$i | 0);
          $cmp818$i = ($add653$i | 0) < ($w$1 | 0);
          if ($cmp818$i) wasm2asm_i32$1 = $w$1; else wasm2asm_i32$1 = $add653$i;
          $w$add653$i = wasm2asm_i32$1;
          $retval$0$i = $w$add653$i;
         } else block227 : {
          $and36$i = $t$0 & 32 | 0;
          $tobool37$i = ($and36$i | 0) != (0 | 0);
          if ($tobool37$i) wasm2asm_i32$1 = 4127; else wasm2asm_i32$1 = 4131;
          $cond$i = wasm2asm_i32$1;
          $cmp38$i = $y$addr$0$i != $y$addr$0$i | 0.0 != 0.0 | 0;
          if ($tobool37$i) wasm2asm_i32$1 = 4135; else wasm2asm_i32$1 = 4139;
          $cond43$i = wasm2asm_i32$1;
          if ($cmp38$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $pl$0$i;
          $pl$1$i = wasm2asm_i32$1;
          if ($cmp38$i) wasm2asm_i32$1 = $cond43$i; else wasm2asm_i32$1 = $cond$i;
          $s35$0$i = wasm2asm_i32$1;
          $add$i$239 = $pl$1$i + 3 | 0;
          _pad($f | 0, 32 | 0, $w$1 | 0, $add$i$239 | 0, $and219 | 0);
          $193 = HEAPU32[$f >> 2] | 0;
          $and$i$406$i = $193 & 32 | 0;
          $tobool$i$407$i = ($and$i$406$i | 0) == (0 | 0);
          if ($tobool$i$407$i) block228 : {
           ___fwritex($prefix$0$i | 0, $pl$1$i | 0, $f | 0) | 0;
           $$pre$i = HEAPU32[$f >> 2] | 0;
           $194 = $$pre$i;
          } else $194 = $193;
          $and$i$412$i = $194 & 32 | 0;
          $tobool$i$413$i = ($and$i$412$i | 0) == (0 | 0);
          if ($tobool$i$413$i) ___fwritex($s35$0$i | 0, 3 | 0, $f | 0) | 0;
          $xor$i = $fl$1$and219 ^ 8192 | 0;
          _pad($f | 0, 32 | 0, $w$1 | 0, $add$i$239 | 0, $xor$i | 0);
          $cmp48$i = ($add$i$239 | 0) < ($w$1 | 0);
          if ($cmp48$i) wasm2asm_i32$1 = $w$1; else wasm2asm_i32$1 = $add$i$239;
          $cond53$i = wasm2asm_i32$1;
          $retval$0$i = $cond53$i;
         }
        }
        $cnt$0 = $cnt$1;
        $incdec$ptr169275 = $incdec$ptr169$lcssa;
        $l$0 = $retval$0$i;
        $l10n$0 = $l10n$3;
        continue label$break$L1;
        break switch$17;
       }
      case 1:
      case 3:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 19:
      case 20:
      case 21:
      case 22:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 33:
      case 39:
      case 41:
      case 42:
      case 43:
      case 48:
      case 49:
      case 51:
      case 53:
      case 54:
      default:
       block229 : {
        $a$2 = $incdec$ptr169275;
        $fl$6 = $fl$1$and219;
        $p$5 = $p$0;
        $pl$2 = 0;
        $prefix$2 = 4091;
        $z$2 = $add$ptr205;
       }
      }
     }
    }
    label$break$L308 : {
     if ((label | 0) == (64 | 0)) block230 : {
      label = 0;
      $90 = $arg;
      $91 = $90;
      $92 = HEAPU32[$91 >> 2] | 0;
      $93 = $90 + 4 | 0;
      $94 = $93;
      $95 = HEAPU32[$94 >> 2] | 0;
      $and249 = $t$1 & 32 | 0;
      $96 = ($92 | 0) == (0 | 0);
      $97 = ($95 | 0) == (0 | 0);
      $98 = $96 & $97 | 0;
      if ($98) block231 : {
       $a$0 = $add$ptr205;
       $fl$4 = $fl$3;
       $p$2 = $p$1;
       $pl$1 = 0;
       $prefix$1 = 4091;
       label = 77;
      } else block232 : {
       $101 = $95;
       $99 = $92;
       $s$addr$06$i = $add$ptr205;
       while_out$107 : do block233 : {
        $idxprom$i = $99 & 15 | 0;
        $arrayidx$i = 4075 + $idxprom$i | 0;
        $100 = HEAP8[$arrayidx$i >> 0] | 0;
        $conv$4$i$211 = $100 & 255 | 0;
        $or$i = $conv$4$i$211 | $and249 | 0;
        $conv1$i = $or$i & 255 | 0;
        $incdec$ptr$i$212 = $s$addr$06$i + 4294967295 | 0;
        HEAP8[$incdec$ptr$i$212 >> 0] = $conv1$i;
        $102 = _bitshift64Lshr($99 | 0, $101 | 0, 4 | 0) | 0;
        $103 = HEAPU32[168 >> 2] | 0;
        $104 = ($102 | 0) == (0 | 0);
        $105 = ($103 | 0) == (0 | 0);
        $106 = $104 & $105 | 0;
        if ($106) block234 : {
         $incdec$ptr$i$212$lcssa = $incdec$ptr$i$212;
         break while_out$107;
        } else block235 : {
         $101 = $103;
         $99 = $102;
         $s$addr$06$i = $incdec$ptr$i$212;
        }
        continue while_out$107;
       } while (0);
       $107 = $arg;
       $108 = $107;
       $109 = HEAPU32[$108 >> 2] | 0;
       $110 = $107 + 4 | 0;
       $111 = $110;
       $112 = HEAPU32[$111 >> 2] | 0;
       $113 = ($109 | 0) == (0 | 0);
       $114 = ($112 | 0) == (0 | 0);
       $115 = $113 & $114 | 0;
       $and254 = $fl$3 & 8 | 0;
       $tobool255 = ($and254 | 0) == (0 | 0);
       $or$cond193 = $tobool255 | $115 | 0;
       if ($or$cond193) block236 : {
        $a$0 = $incdec$ptr$i$212$lcssa;
        $fl$4 = $fl$3;
        $p$2 = $p$1;
        $pl$1 = 0;
        $prefix$1 = 4091;
        label = 77;
       } else block237 : {
        $shr = $t$1 >> 4 | 0;
        $add$ptr257 = 4091 + $shr | 0;
        $a$0 = $incdec$ptr$i$212$lcssa;
        $fl$4 = $fl$3;
        $p$2 = $p$1;
        $pl$1 = 2;
        $prefix$1 = $add$ptr257;
        label = 77;
       }
      }
     } else if ((label | 0) == (76 | 0)) block238 : {
      label = 0;
      $150 = _fmt_u($148 | 0, $149 | 0, $add$ptr205 | 0) | 0;
      $a$0 = $150;
      $fl$4 = $fl$1$and219;
      $p$2 = $p$0;
      $pl$1 = $pl$0;
      $prefix$1 = $prefix$0;
      label = 77;
     } else if ((label | 0) == (82 | 0)) block239 : {
      label = 0;
      $call356 = _memchr($a$1 | 0, 0 | 0, $p$0 | 0) | 0;
      $tobool357 = ($call356 | 0) == (0 | 0);
      $sub$ptr$lhs$cast361 = $call356;
      $sub$ptr$rhs$cast362 = $a$1;
      $sub$ptr$sub363 = $sub$ptr$lhs$cast361 - $sub$ptr$rhs$cast362 | 0;
      $add$ptr359 = $a$1 + $p$0 | 0;
      if ($tobool357) wasm2asm_i32$1 = $add$ptr359; else wasm2asm_i32$1 = $call356;
      $z$1 = wasm2asm_i32$1;
      if ($tobool357) wasm2asm_i32$1 = $p$0; else wasm2asm_i32$1 = $sub$ptr$sub363;
      $p$3 = wasm2asm_i32$1;
      $a$2 = $a$1;
      $fl$6 = $and219;
      $p$5 = $p$3;
      $pl$2 = 0;
      $prefix$2 = 4091;
      $z$2 = $z$1;
     } else if ((label | 0) == (86 | 0)) block240 : {
      label = 0;
      $176 = HEAPU32[$arg >> 2] | 0;
      $i$0316 = 0;
      $l$1315 = 0;
      $ws$0317 = $176;
      while_out$109 : do block241 : {
       $177 = HEAPU32[$ws$0317 >> 2] | 0;
       $tobool380 = ($177 | 0) == (0 | 0);
       if ($tobool380) block242 : {
        $i$0$lcssa = $i$0316;
        $l$2 = $l$1315;
        break while_out$109;
       }
       $call384 = _wctomb($mb | 0, $177 | 0) | 0;
       $cmp385 = ($call384 | 0) < (0 | 0);
       $sub389 = $p$4365 - $i$0316 | 0;
       $cmp390 = ($call384 >>> 0 | 0) >>> 0 > ($sub389 >>> 0 | 0) >>> 0;
       $or$cond195 = $cmp385 | $cmp390 | 0;
       if ($or$cond195) block243 : {
        $i$0$lcssa = $i$0316;
        $l$2 = $call384;
        break while_out$109;
       }
       $incdec$ptr383 = $ws$0317 + 4 | 0;
       $add395 = $call384 + $i$0316 | 0;
       $cmp377 = ($p$4365 >>> 0 | 0) >>> 0 > ($add395 >>> 0 | 0) >>> 0;
       if ($cmp377) block244 : {
        $i$0316 = $add395;
        $l$1315 = $call384;
        $ws$0317 = $incdec$ptr383;
       } else block245 : {
        $i$0$lcssa = $add395;
        $l$2 = $call384;
        break while_out$109;
       }
       continue while_out$109;
      } while (0);
      $cmp397 = ($l$2 | 0) < (0 | 0);
      if ($cmp397) block246 : {
       $retval$0 = 4294967295;
       break label$break$L1;
      }
      _pad($f | 0, 32 | 0, $w$1 | 0, $i$0$lcssa | 0, $fl$1$and219 | 0);
      $cmp404$324 = ($i$0$lcssa | 0) == (0 | 0);
      if ($cmp404$324) block247 : {
       $i$0$lcssa368 = 0;
       label = 98;
      } else block248 : {
       $178 = HEAPU32[$arg >> 2] | 0;
       $i$1325 = 0;
       $ws$1326 = $178;
       while_out$111 : do block249 : {
        $179 = HEAPU32[$ws$1326 >> 2] | 0;
        $tobool407 = ($179 | 0) == (0 | 0);
        if ($tobool407) block250 : {
         $i$0$lcssa368 = $i$0$lcssa;
         label = 98;
         break label$break$L308;
        }
        $incdec$ptr410 = $ws$1326 + 4 | 0;
        $call411 = _wctomb($mb | 0, $179 | 0) | 0;
        $add412 = $call411 + $i$1325 | 0;
        $cmp413 = ($add412 | 0) > ($i$0$lcssa | 0);
        if ($cmp413) block251 : {
         $i$0$lcssa368 = $i$0$lcssa;
         label = 98;
         break label$break$L308;
        }
        $180 = HEAPU32[$f >> 2] | 0;
        $and$i$231 = $180 & 32 | 0;
        $tobool$i$232 = ($and$i$231 | 0) == (0 | 0);
        if ($tobool$i$232) ___fwritex($mb | 0, $call411 | 0, $f | 0) | 0;
        $cmp404 = ($add412 >>> 0 | 0) >>> 0 < ($i$0$lcssa >>> 0 | 0) >>> 0;
        if ($cmp404) block252 : {
         $i$1325 = $add412;
         $ws$1326 = $incdec$ptr410;
        } else block253 : {
         $i$0$lcssa368 = $i$0$lcssa;
         label = 98;
         break while_out$111;
        }
        continue while_out$111;
       } while (0);
      }
     }
    }
    if ((label | 0) == (98 | 0)) block254 : {
     label = 0;
     $xor = $fl$1$and219 ^ 8192 | 0;
     _pad($f | 0, 32 | 0, $w$1 | 0, $i$0$lcssa368 | 0, $xor | 0);
     $cmp421 = ($w$1 | 0) > ($i$0$lcssa368 | 0);
     if ($cmp421) wasm2asm_i32$1 = $w$1; else wasm2asm_i32$1 = $i$0$lcssa368;
     $cond426 = wasm2asm_i32$1;
     $cnt$0 = $cnt$1;
     $incdec$ptr169275 = $incdec$ptr169$lcssa;
     $l$0 = $cond426;
     $l10n$0 = $l10n$3;
     continue label$break$L1;
    }
    if ((label | 0) == (77 | 0)) block255 : {
     label = 0;
     $cmp306 = ($p$2 | 0) > (4294967295 | 0);
     $and309 = $fl$4 & 4294901759 | 0;
     if ($cmp306) wasm2asm_i32$1 = $and309; else wasm2asm_i32$1 = $fl$4;
     $and309$fl$4 = wasm2asm_i32$1;
     $151 = $arg;
     $152 = $151;
     $153 = HEAPU32[$152 >> 2] | 0;
     $154 = $151 + 4 | 0;
     $155 = $154;
     $156 = HEAPU32[$155 >> 2] | 0;
     $157 = ($153 | 0) != (0 | 0);
     $158 = ($156 | 0) != (0 | 0);
     $159 = $157 | $158 | 0;
     $tobool314 = ($p$2 | 0) != (0 | 0);
     $or$cond = $tobool314 | $159 | 0;
     if ($or$cond) block256 : {
      $sub$ptr$rhs$cast318 = $a$0;
      $sub$ptr$sub319 = $sub$ptr$lhs$cast317 - $sub$ptr$rhs$cast318 | 0;
      $160 = $159 & 1 | 0;
      $lnot$ext = $160 ^ 1 | 0;
      $add322 = $lnot$ext + $sub$ptr$sub319 | 0;
      $cmp323 = ($p$2 | 0) > ($add322 | 0);
      if ($cmp323) wasm2asm_i32$1 = $p$2; else wasm2asm_i32$1 = $add322;
      $p$2$add322 = wasm2asm_i32$1;
      $a$2 = $a$0;
      $fl$6 = $and309$fl$4;
      $p$5 = $p$2$add322;
      $pl$2 = $pl$1;
      $prefix$2 = $prefix$1;
      $z$2 = $add$ptr205;
     } else block257 : {
      $a$2 = $add$ptr205;
      $fl$6 = $and309$fl$4;
      $p$5 = 0;
      $pl$2 = $pl$1;
      $prefix$2 = $prefix$1;
      $z$2 = $add$ptr205;
     }
    }
    $sub$ptr$lhs$cast431 = $z$2;
    $sub$ptr$rhs$cast432 = $a$2;
    $sub$ptr$sub433 = $sub$ptr$lhs$cast431 - $sub$ptr$rhs$cast432 | 0;
    $cmp434 = ($p$5 | 0) < ($sub$ptr$sub433 | 0);
    if ($cmp434) wasm2asm_i32$1 = $sub$ptr$sub433; else wasm2asm_i32$1 = $p$5;
    $sub$ptr$sub433$p$5 = wasm2asm_i32$1;
    $add441 = $pl$2 + $sub$ptr$sub433$p$5 | 0;
    $cmp442 = ($w$1 | 0) < ($add441 | 0);
    if ($cmp442) wasm2asm_i32$1 = $add441; else wasm2asm_i32$1 = $w$1;
    $w$2 = wasm2asm_i32$1;
    _pad($f | 0, 32 | 0, $w$2 | 0, $add441 | 0, $fl$6 | 0);
    $265 = HEAPU32[$f >> 2] | 0;
    $and$i$244 = $265 & 32 | 0;
    $tobool$i$245 = ($and$i$244 | 0) == (0 | 0);
    if ($tobool$i$245) ___fwritex($prefix$2 | 0, $pl$2 | 0, $f | 0) | 0;
    $xor449 = $fl$6 ^ 65536 | 0;
    _pad($f | 0, 48 | 0, $w$2 | 0, $add441 | 0, $xor449 | 0);
    _pad($f | 0, 48 | 0, $sub$ptr$sub433$p$5 | 0, $sub$ptr$sub433 | 0, 0 | 0);
    $266 = HEAPU32[$f >> 2] | 0;
    $and$i$216 = $266 & 32 | 0;
    $tobool$i$217 = ($and$i$216 | 0) == (0 | 0);
    if ($tobool$i$217) ___fwritex($a$2 | 0, $sub$ptr$sub433 | 0, $f | 0) | 0;
    $xor457 = $fl$6 ^ 8192 | 0;
    _pad($f | 0, 32 | 0, $w$2 | 0, $add441 | 0, $xor457 | 0);
    $cnt$0 = $cnt$1;
    $incdec$ptr169275 = $incdec$ptr169$lcssa;
    $l$0 = $w$2;
    $l10n$0 = $l10n$3;
    continue label$break$L1;
   } while (0);
   label$break$L343 : {
    if ((label | 0) == (242 | 0)) block258 : {
     $tobool459 = ($f | 0) == (0 | 0);
     if ($tobool459) block259 : {
      $tobool462 = ($l10n$0$lcssa | 0) == (0 | 0);
      if ($tobool462) $retval$0 = 0; else block260 : {
       $i$2299 = 1;
       while_out$113 : do block261 : {
        $arrayidx469 = $nl_type + ($i$2299 << 2 | 0) | 0;
        $267 = HEAPU32[$arrayidx469 >> 2] | 0;
        $tobool470 = ($267 | 0) == (0 | 0);
        if ($tobool470) block262 : {
         $i$2299$lcssa = $i$2299;
         break while_out$113;
        }
        $add$ptr473 = $nl_arg + ($i$2299 << 3 | 0) | 0;
        _pop_arg_336($add$ptr473 | 0, $267 | 0, $ap | 0);
        $inc = $i$2299 + 1 | 0;
        $cmp466 = ($inc | 0) < (10 | 0);
        if ($cmp466) $i$2299 = $inc; else block263 : {
         $retval$0 = 1;
         break label$break$L343;
        }
        continue while_out$113;
       } while (0);
       $cmp478$295 = ($i$2299$lcssa | 0) < (10 | 0);
       if ($cmp478$295) block264 : {
        $i$3296 = $i$2299$lcssa;
        while_out$115 : do block265 : {
         $arrayidx481 = $nl_type + ($i$3296 << 2 | 0) | 0;
         $268 = HEAPU32[$arrayidx481 >> 2] | 0;
         $lnot483 = ($268 | 0) == (0 | 0);
         $inc488 = $i$3296 + 1 | 0;
         if (($lnot483 | 0) == (0 | 0)) block266 : {
          $retval$0 = 4294967295;
          break label$break$L343;
         }
         $cmp478 = ($inc488 | 0) < (10 | 0);
         if ($cmp478) $i$3296 = $inc488; else block267 : {
          $retval$0 = 1;
          break while_out$115;
         }
         continue while_out$115;
        } while (0);
       } else $retval$0 = 1;
      }
     } else $retval$0 = $cnt$1$lcssa;
    }
   }
   HEAP32[8 >> 2] = sp;
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _pop_arg_336($arg, $type, $ap) {
  $arg = $arg | 0;
  $type = $type | 0;
  $ap = $ap | 0;
  var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0.0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv12 = 0, $conv17$mask = 0, $conv22 = 0, $conv27$mask = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $cmp = ($type >>> 0 | 0) >>> 0 > 20 >>> 0;
   label$break$L1 : {
    if (($cmp | 0) == (0 | 0)) switch$1 : {
     switch ($type - 9 | 0) {
     case 0:
      block0 : {
       $arglist_current = HEAPU32[$ap >> 2] | 0;
       $0 = $arglist_current;
       $1 = 0 + 4 | 0;
       $expanded28 = $1;
       $expanded = $expanded28 - 1 | 0;
       $2 = $0 + $expanded | 0;
       $3 = 0 + 4 | 0;
       $expanded32 = $3;
       $expanded31 = $expanded32 - 1 | 0;
       $expanded30 = $expanded31 ^ 4294967295 | 0;
       $4 = $2 & $expanded30 | 0;
       $5 = $4;
       $6 = HEAPU32[$5 >> 2] | 0;
       $arglist_next = $5 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next;
       HEAP32[$arg >> 2] = $6;
       break label$break$L1;
       break switch$1;
      }
     case 1:
      block1 : {
       $arglist_current2 = HEAPU32[$ap >> 2] | 0;
       $7 = $arglist_current2;
       $8 = 0 + 4 | 0;
       $expanded35 = $8;
       $expanded34 = $expanded35 - 1 | 0;
       $9 = $7 + $expanded34 | 0;
       $10 = 0 + 4 | 0;
       $expanded39 = $10;
       $expanded38 = $expanded39 - 1 | 0;
       $expanded37 = $expanded38 ^ 4294967295 | 0;
       $11 = $9 & $expanded37 | 0;
       $12 = $11;
       $13 = HEAPU32[$12 >> 2] | 0;
       $arglist_next3 = $12 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next3;
       $14 = ($13 | 0) < (0 | 0);
       $15 = ($14 << 31 | 0) >> 31 | 0;
       $16 = $arg;
       $17 = $16;
       HEAP32[$17 >> 2] = $13;
       $18 = $16 + 4 | 0;
       $19 = $18;
       HEAP32[$19 >> 2] = $15;
       break label$break$L1;
       break switch$1;
      }
     case 2:
      block2 : {
       $arglist_current5 = HEAPU32[$ap >> 2] | 0;
       $20 = $arglist_current5;
       $21 = 0 + 4 | 0;
       $expanded42 = $21;
       $expanded41 = $expanded42 - 1 | 0;
       $22 = $20 + $expanded41 | 0;
       $23 = 0 + 4 | 0;
       $expanded46 = $23;
       $expanded45 = $expanded46 - 1 | 0;
       $expanded44 = $expanded45 ^ 4294967295 | 0;
       $24 = $22 & $expanded44 | 0;
       $25 = $24;
       $26 = HEAPU32[$25 >> 2] | 0;
       $arglist_next6 = $25 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next6;
       $27 = $arg;
       $28 = $27;
       HEAP32[$28 >> 2] = $26;
       $29 = $27 + 4 | 0;
       $30 = $29;
       HEAP32[$30 >> 2] = 0;
       break label$break$L1;
       break switch$1;
      }
     case 3:
      block3 : {
       $arglist_current8 = HEAPU32[$ap >> 2] | 0;
       $31 = $arglist_current8;
       $32 = 0 + 8 | 0;
       $expanded49 = $32;
       $expanded48 = $expanded49 - 1 | 0;
       $33 = $31 + $expanded48 | 0;
       $34 = 0 + 8 | 0;
       $expanded53 = $34;
       $expanded52 = $expanded53 - 1 | 0;
       $expanded51 = $expanded52 ^ 4294967295 | 0;
       $35 = $33 & $expanded51 | 0;
       $36 = $35;
       $37 = $36;
       $38 = $37;
       $39 = HEAPU32[$38 >> 2] | 0;
       $40 = $37 + 4 | 0;
       $41 = $40;
       $42 = HEAPU32[$41 >> 2] | 0;
       $arglist_next9 = $36 + 8 | 0;
       HEAP32[$ap >> 2] = $arglist_next9;
       $43 = $arg;
       $44 = $43;
       HEAP32[$44 >> 2] = $39;
       $45 = $43 + 4 | 0;
       $46 = $45;
       HEAP32[$46 >> 2] = $42;
       break label$break$L1;
       break switch$1;
      }
     case 4:
      block4 : {
       $arglist_current11 = HEAPU32[$ap >> 2] | 0;
       $47 = $arglist_current11;
       $48 = 0 + 4 | 0;
       $expanded56 = $48;
       $expanded55 = $expanded56 - 1 | 0;
       $49 = $47 + $expanded55 | 0;
       $50 = 0 + 4 | 0;
       $expanded60 = $50;
       $expanded59 = $expanded60 - 1 | 0;
       $expanded58 = $expanded59 ^ 4294967295 | 0;
       $51 = $49 & $expanded58 | 0;
       $52 = $51;
       $53 = HEAPU32[$52 >> 2] | 0;
       $arglist_next12 = $52 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next12;
       $conv12 = $53 & 65535 | 0;
       $54 = ($conv12 << 16 | 0) >> 16 | 0;
       $55 = ($54 | 0) < (0 | 0);
       $56 = ($55 << 31 | 0) >> 31 | 0;
       $57 = $arg;
       $58 = $57;
       HEAP32[$58 >> 2] = $54;
       $59 = $57 + 4 | 0;
       $60 = $59;
       HEAP32[$60 >> 2] = $56;
       break label$break$L1;
       break switch$1;
      }
     case 5:
      block5 : {
       $arglist_current14 = HEAPU32[$ap >> 2] | 0;
       $61 = $arglist_current14;
       $62 = 0 + 4 | 0;
       $expanded63 = $62;
       $expanded62 = $expanded63 - 1 | 0;
       $63 = $61 + $expanded62 | 0;
       $64 = 0 + 4 | 0;
       $expanded67 = $64;
       $expanded66 = $expanded67 - 1 | 0;
       $expanded65 = $expanded66 ^ 4294967295 | 0;
       $65 = $63 & $expanded65 | 0;
       $66 = $65;
       $67 = HEAPU32[$66 >> 2] | 0;
       $arglist_next15 = $66 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next15;
       $conv17$mask = $67 & 65535 | 0;
       $68 = $arg;
       $69 = $68;
       HEAP32[$69 >> 2] = $conv17$mask;
       $70 = $68 + 4 | 0;
       $71 = $70;
       HEAP32[$71 >> 2] = 0;
       break label$break$L1;
       break switch$1;
      }
     case 6:
      block6 : {
       $arglist_current17 = HEAPU32[$ap >> 2] | 0;
       $72 = $arglist_current17;
       $73 = 0 + 4 | 0;
       $expanded70 = $73;
       $expanded69 = $expanded70 - 1 | 0;
       $74 = $72 + $expanded69 | 0;
       $75 = 0 + 4 | 0;
       $expanded74 = $75;
       $expanded73 = $expanded74 - 1 | 0;
       $expanded72 = $expanded73 ^ 4294967295 | 0;
       $76 = $74 & $expanded72 | 0;
       $77 = $76;
       $78 = HEAPU32[$77 >> 2] | 0;
       $arglist_next18 = $77 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next18;
       $conv22 = $78 & 255 | 0;
       $79 = ($conv22 << 24 | 0) >> 24 | 0;
       $80 = ($79 | 0) < (0 | 0);
       $81 = ($80 << 31 | 0) >> 31 | 0;
       $82 = $arg;
       $83 = $82;
       HEAP32[$83 >> 2] = $79;
       $84 = $82 + 4 | 0;
       $85 = $84;
       HEAP32[$85 >> 2] = $81;
       break label$break$L1;
       break switch$1;
      }
     case 7:
      block7 : {
       $arglist_current20 = HEAPU32[$ap >> 2] | 0;
       $86 = $arglist_current20;
       $87 = 0 + 4 | 0;
       $expanded77 = $87;
       $expanded76 = $expanded77 - 1 | 0;
       $88 = $86 + $expanded76 | 0;
       $89 = 0 + 4 | 0;
       $expanded81 = $89;
       $expanded80 = $expanded81 - 1 | 0;
       $expanded79 = $expanded80 ^ 4294967295 | 0;
       $90 = $88 & $expanded79 | 0;
       $91 = $90;
       $92 = HEAPU32[$91 >> 2] | 0;
       $arglist_next21 = $91 + 4 | 0;
       HEAP32[$ap >> 2] = $arglist_next21;
       $conv27$mask = $92 & 255 | 0;
       $93 = $arg;
       $94 = $93;
       HEAP32[$94 >> 2] = $conv27$mask;
       $95 = $93 + 4 | 0;
       $96 = $95;
       HEAP32[$96 >> 2] = 0;
       break label$break$L1;
       break switch$1;
      }
     case 8:
      block8 : {
       $arglist_current23 = HEAPU32[$ap >> 2] | 0;
       $97 = $arglist_current23;
       $98 = 0 + 8 | 0;
       $expanded84 = $98;
       $expanded83 = $expanded84 - 1 | 0;
       $99 = $97 + $expanded83 | 0;
       $100 = 0 + 8 | 0;
       $expanded88 = $100;
       $expanded87 = $expanded88 - 1 | 0;
       $expanded86 = $expanded87 ^ 4294967295 | 0;
       $101 = $99 & $expanded86 | 0;
       $102 = $101;
       $103 = +HEAPF64[$102 >> 3];
       $arglist_next24 = $102 + 8 | 0;
       HEAP32[$ap >> 2] = $arglist_next24;
       HEAPF64[$arg >> 3] = $103;
       break label$break$L1;
       break switch$1;
      }
     case 9:
      block9 : {
       $arglist_current26 = HEAPU32[$ap >> 2] | 0;
       $104 = $arglist_current26;
       $105 = 0 + 8 | 0;
       $expanded91 = $105;
       $expanded90 = $expanded91 - 1 | 0;
       $106 = $104 + $expanded90 | 0;
       $107 = 0 + 8 | 0;
       $expanded95 = $107;
       $expanded94 = $expanded95 - 1 | 0;
       $expanded93 = $expanded94 ^ 4294967295 | 0;
       $108 = $106 & $expanded93 | 0;
       $109 = $108;
       $110 = +HEAPF64[$109 >> 3];
       $arglist_next27 = $109 + 8 | 0;
       HEAP32[$ap >> 2] = $arglist_next27;
       HEAPF64[$arg >> 3] = $110;
       break label$break$L1;
       break switch$1;
      }
     default:
      break label$break$L1;
     }
    }
   }
   break topmost;
  }
 }
 
 function _fmt_u($0, $1, $s) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $s = $s | 0;
  var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add5 = 0, $conv6 = 0, $div9 = 0, $incdec$ptr = 0, $incdec$ptr$lcssa = 0, $incdec$ptr7 = 0, $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool$8 = 0, $x$addr$0$lcssa$off0 = 0, $y$010 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $2 = ($1 >>> 0 | 0) >>> 0 > 0 >>> 0;
   $3 = ($0 >>> 0 | 0) >>> 0 > 4294967295 >>> 0;
   $4 = ($1 | 0) == (0 | 0);
   $5 = $4 & $3 | 0;
   $6 = $2 | $5 | 0;
   if ($6) block0 : {
    $7 = $0;
    $8 = $1;
    $s$addr$013 = $s;
    while_out$0 : do block1 : {
     $9 = ___uremdi3($7 | 0, $8 | 0, 10 | 0, 0 | 0) | 0;
     $10 = HEAPU32[168 >> 2] | 0;
     $11 = $9 | 48 | 0;
     $12 = $11 & 255 | 0;
     $incdec$ptr = $s$addr$013 + 4294967295 | 0;
     HEAP8[$incdec$ptr >> 0] = $12;
     $13 = ___udivdi3($7 | 0, $8 | 0, 10 | 0, 0 | 0) | 0;
     $14 = HEAPU32[168 >> 2] | 0;
     $15 = ($8 >>> 0 | 0) >>> 0 > 9 >>> 0;
     $16 = ($7 >>> 0 | 0) >>> 0 > 4294967295 >>> 0;
     $17 = ($8 | 0) == (9 | 0);
     $18 = $17 & $16 | 0;
     $19 = $15 | $18 | 0;
     if ($19) block2 : {
      $7 = $13;
      $8 = $14;
      $s$addr$013 = $incdec$ptr;
     } else block3 : {
      $21 = $13;
      $22 = $14;
      $incdec$ptr$lcssa = $incdec$ptr;
      break while_out$0;
     }
     continue while_out$0;
    } while (0);
    $s$addr$0$lcssa = $incdec$ptr$lcssa;
    $x$addr$0$lcssa$off0 = $21;
   } else block4 : {
    $s$addr$0$lcssa = $s;
    $x$addr$0$lcssa$off0 = $0;
   }
   $tobool$8 = ($x$addr$0$lcssa$off0 | 0) == (0 | 0);
   if ($tobool$8) $s$addr$1$lcssa = $s$addr$0$lcssa; else block5 : {
    $s$addr$19 = $s$addr$0$lcssa;
    $y$010 = $x$addr$0$lcssa$off0;
    while_out$2 : do block6 : {
     $rem4 = ((($y$010 >>> 0 | 0) >>> 0) % (10 >>> 0) | 0) & 4294967295 | 0;
     $add5 = $rem4 | 48 | 0;
     $conv6 = $add5 & 255 | 0;
     $incdec$ptr7 = $s$addr$19 + 4294967295 | 0;
     HEAP8[$incdec$ptr7 >> 0] = $conv6;
     $div9 = ((($y$010 >>> 0 | 0) >>> 0) / (10 >>> 0) | 0) & 4294967295 | 0;
     $20 = ($y$010 >>> 0 | 0) >>> 0 < 10 >>> 0;
     if ($20) block7 : {
      $s$addr$1$lcssa = $incdec$ptr7;
      break while_out$2;
     } else block8 : {
      $s$addr$19 = $incdec$ptr7;
      $y$010 = $div9;
     }
     continue while_out$2;
    } while (0);
   }
   wasm2asm_i32$0 = $s$addr$1$lcssa;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _pad($f, $c, $w, $l, $fl) {
  $f = $f | 0;
  $c = $c | 0;
  $w = $w | 0;
  $l = $l | 0;
  $fl = $fl | 0;
  var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and$i = 0, $and$i$15 = 0, $cmp = 0, $cmp1 = 0, $cmp3 = 0, $cmp3$14 = 0, $cond = 0, $l$addr$0$lcssa21 = 0, $l$addr$017 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub5 = 0, $tobool = 0, $tobool$i = 0, $tobool$i$16 = 0, $tobool$i18 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 256 | 0;
   if ((HEAPU32[8 >> 2] | 0 | 0) >= (HEAPU32[16 >> 2] | 0 | 0)) abort();
   $pad = sp;
   $and = $fl & 73728 | 0;
   $tobool = ($and | 0) == (0 | 0);
   $cmp = ($w | 0) > ($l | 0);
   $or$cond = $cmp & $tobool | 0;
   do_once$0 : {
    if ($or$cond) block0 : {
     $sub = $w - $l | 0;
     $cmp1 = ($sub >>> 0 | 0) >>> 0 > 256 >>> 0;
     if ($cmp1) wasm2asm_i32$0 = 256; else wasm2asm_i32$0 = $sub;
     $cond = wasm2asm_i32$0;
     _memset($pad | 0, $c | 0, $cond | 0) | 0;
     $cmp3$14 = ($sub >>> 0 | 0) >>> 0 > 255 >>> 0;
     $0 = HEAPU32[$f >> 2] | 0;
     $and$i$15 = $0 & 32 | 0;
     $tobool$i$16 = ($and$i$15 | 0) == (0 | 0);
     if ($cmp3$14) block1 : {
      $1 = $w - $l | 0;
      $4 = $0;
      $l$addr$017 = $sub;
      $tobool$i18 = $tobool$i$16;
      while_out$1 : do block2 : {
       if ($tobool$i18) block3 : {
        ___fwritex($pad | 0, 256 | 0, $f | 0) | 0;
        $$pre = HEAPU32[$f >> 2] | 0;
        $2 = $$pre;
       } else $2 = $4;
       $sub5 = $l$addr$017 + 4294967040 | 0;
       $cmp3 = ($sub5 >>> 0 | 0) >>> 0 > 255 >>> 0;
       $and$i = $2 & 32 | 0;
       $tobool$i = ($and$i | 0) == (0 | 0);
       if ($cmp3) block4 : {
        $4 = $2;
        $l$addr$017 = $sub5;
        $tobool$i18 = $tobool$i;
       } else break while_out$1;
       continue while_out$1;
      } while (0);
      $3 = $1 & 255 | 0;
      if ($tobool$i) $l$addr$0$lcssa21 = $3; else break do_once$0;
     } else if ($tobool$i$16) $l$addr$0$lcssa21 = $sub; else break do_once$0;
     ___fwritex($pad | 0, $l$addr$0$lcssa21 | 0, $f | 0) | 0;
    }
   }
   HEAP32[8 >> 2] = sp;
   break topmost;
  }
 }
 
 function _malloc($bytes) {
  $bytes = $bytes | 0;
  var $$lcssa = 0, $$lcssa290 = 0, $$pre = 0, $$pre$i = 0, $$pre$i$177 = 0, $$pre$i$56$i = 0, $$pre$i$i = 0, $$pre$phi$i$178Z2D = 0, $$pre$phi$i$57$iZ2D = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre241 = 0, $$pre5$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0, $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$168 = 0, $R$1$i$168$lcssa = 0, $R$1$i$i = 0, $R$1$i$i$lcssa = 0, $R$1$i$lcssa = 0, $R$3$i = 0, $R$3$i$171 = 0, $R$3$i$i = 0, $RP$1$i = 0, $RP$1$i$167 = 0, $RP$1$i$167$lcssa = 0, $RP$1$i$i = 0, $RP$1$i$i$lcssa = 0, $RP$1$i$lcssa = 0, $T$0$i = 0, $T$0$i$58$i = 0, $T$0$i$58$i$lcssa = 0, $T$0$i$58$i$lcssa283 = 0, $T$0$i$i = 0, $T$0$i$i$lcssa = 0, $T$0$i$i$lcssa284 = 0, $T$0$i$lcssa = 0, $T$0$i$lcssa293 = 0, $add$i = 0, $add$i$146 = 0, $add$i$180 = 0, $add$i$i = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$1$i$i = 0, $add$ptr$i$11$i = 0, $add$ptr$i$161 = 0, $add$ptr$i$193 = 0, $add$ptr$i$21$i = 0, $add$ptr$i$32$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i$i$i$lcssa = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0, $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0, $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$26$i = 0, $add$ptr4$i$37$i = 0, $add$ptr4$i$i = 0, $add$ptr4$i$i$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$30$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr7$i$i = 0, $add$ptr8$i122$i = 0, $add$ptr95 = 0, $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0, $add17$i = 0, $add17$i$183 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0, $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0, $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0, $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0, $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$12$i = 0, $and$i$14$i = 0, $and$i$143 = 0, $and$i$22$i = 0, $and$i$33$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$i = 0, $and119$i$i = 0, $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i$204 = 0, $and199$i = 0, $and209$i$i = 0, $and21$i = 0, $and21$i$149 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0, $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$24$i = 0, $and3$i$35$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0, $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0, $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0, $and6$i$38$i = 0, $and6$i$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and7$i$i = 0, $and73$i = 0, $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0, $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$150 = 0, $arrayidx$i$20$i = 0, $arrayidx$i$48$i = 0, $arrayidx$i$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0, $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i$159 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx126$i$i$lcssa = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0, $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i$169 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0, $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0, $arrayidx27$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx325$i$i$lcssa = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx394$i$lcssa = 0, $arrayidx40$i = 0, $arrayidx44$i = 0, $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i$156 = 0, $arrayidx96$i$i = 0, $base$i$i$lcssa = 0, $base226$i$lcssa = 0, $bk = 0, $bk$i = 0, $bk$i$163 = 0, $bk$i$46$i = 0, $bk$i$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0, $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0, $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0, $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call$i$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0, $call6$i$i = 0, $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$13$i = 0, $cmp$i$140 = 0, $cmp$i$15$i = 0, $cmp$i$179 = 0, $cmp$i$2$i$i = 0, $cmp$i$23$i = 0, $cmp$i$34$i = 0, $cmp$i$9$i = 0, $cmp$i$i$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp1$i$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp107$i$157 = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0, $cmp114$i = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$53$i = 0, $cmp120$i$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$196 = 0, $cmp133$i$i = 0, $cmp135$i = 0, $cmp137$i = 0, $cmp137$i$197 = 0, $cmp137$i$i = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$not$i = 0, $cmp142$i = 0, $cmp144$i$i = 0, $cmp146 = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0, $cmp159$i = 0, $cmp159$i$199 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i$200 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp205$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0, $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i$185 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0, $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i$155 = 0, $cmp46$i = 0, $cmp46$i$49$i = 0, $cmp46$i$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i$187 = 0, $cmp57$i = 0, $cmp57$i$188 = 0, $cmp57$i$i = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i$190 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$191 = 0, $cmp81$i$i = 0, $cmp83$i$i = 0, $cmp85$i = 0, $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$7$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$16$i = 0, $cond$i$25$i = 0, $cond$i$36$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$v$0$i = 0, $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $cond4$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$164 = 0, $fd$i$i = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0, $head$i$154 = 0, $head$i$17$i = 0, $head$i$29$i = 0, $head$i$42$i = 0, $head$i$i = 0, $head$i$i$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$31$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$172 = 0, $index$i$54$i = 0, $index$i$i = 0, $index288$i$i = 0, $index356$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$173 = 0, $neg$i$182 = 0, $neg$i$i = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp150$i$i = 0, $not$cmp346$i$i = 0, $not$cmp418$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i$189 = 0, $or$cond1$i = 0, $or$cond1$i$184 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond98$i = 0, $or$i = 0, $or$i$195 = 0, $or$i$28$i = 0, $or$i$i = 0, $or$i$i$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0, $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $p$0$i$i = 0, $parent$i = 0, $parent$i$162 = 0, $parent$i$51$i = 0, $parent$i$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0, $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$i$152 = 0, $rsize$0$i$lcssa = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$144 = 0, $shl$i$19$i = 0, $shl$i$47$i = 0, $shl$i$i = 0, $shl102 = 0, $shl105 = 0, $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl221$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0, $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0, $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$139 = 0, $shr$i$45$i = 0, $shr$i$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i$147 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr123$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i$148 = 0, $shr19$i = 0, $shr194$i = 0, $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr322$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0, $shr391$i = 0, $shr4$i = 0, $shr41$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i$142 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i$145 = 0, $shr72$i = 0, $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size$i$i$lcssa = 0, $size188$i = 0, $size188$i$lcssa = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0108$i = 0, $sp$0108$i$lcssa = 0, $sp$1107$i = 0, $sp$1107$i$lcssa = 0, $ssize$0$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $sub = 0, $sub$i = 0, $sub$i$138 = 0, $sub$i$181 = 0, $sub$i$i = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$39$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$40$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$41$i = 0, $sub$ptr$sub$i$i = 0, $sub10$i = 0, $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0, $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$27$i = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0, $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$0$i$151 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$796$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0, $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$795$i = 0, $v$0$i = 0, $v$0$i$153 = 0, $v$0$i$lcssa = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $cmp = ($bytes >>> 0 | 0) >>> 0 < 245 >>> 0;
   do_once$0 : {
    if ($cmp) block0 : {
     $cmp1 = ($bytes >>> 0 | 0) >>> 0 < 11 >>> 0;
     $add2 = $bytes + 11 | 0;
     $and = $add2 & 4294967288 | 0;
     if ($cmp1) wasm2asm_i32$1 = 16; else wasm2asm_i32$1 = $and;
     $cond = wasm2asm_i32$1;
     $shr = $cond >>> 3 | 0;
     $0 = HEAPU32[176 >> 2] | 0;
     $shr3 = $0 >>> $shr | 0;
     $and4 = $shr3 & 3 | 0;
     $cmp5 = ($and4 | 0) == (0 | 0);
     if (($cmp5 | 0) == (0 | 0)) block1 : {
      $neg = $shr3 & 1 | 0;
      $and7 = $neg ^ 1 | 0;
      $add8 = $and7 + $shr | 0;
      $shl = $add8 << 1 | 0;
      $arrayidx = 216 + ($shl << 2 | 0) | 0;
      $1 = $arrayidx + 8 | 0;
      $2 = HEAPU32[$1 >> 2] | 0;
      $fd9 = $2 + 8 | 0;
      $3 = HEAPU32[$fd9 >> 2] | 0;
      $cmp10 = ($arrayidx | 0) == ($3 | 0);
      do_once$1 : {
       if ($cmp10) block2 : {
        $shl12 = 1 << $add8 | 0;
        $neg13 = $shl12 ^ 4294967295 | 0;
        $and14 = $0 & $neg13 | 0;
        HEAP32[176 >> 2] = $and14;
       } else block3 : {
        $4 = HEAPU32[192 >> 2] | 0;
        $cmp15 = ($3 >>> 0 | 0) >>> 0 < ($4 >>> 0 | 0) >>> 0;
        if ($cmp15) _abort();
        $bk = $3 + 12 | 0;
        $5 = HEAPU32[$bk >> 2] | 0;
        $cmp16 = ($5 | 0) == ($2 | 0);
        if ($cmp16) block4 : {
         HEAP32[$bk >> 2] = $arrayidx;
         HEAP32[$1 >> 2] = $3;
         break do_once$1;
        } else _abort();
       }
      }
      $shl22 = $add8 << 3 | 0;
      $or23 = $shl22 | 3 | 0;
      $head = $2 + 4 | 0;
      HEAP32[$head >> 2] = $or23;
      $add$ptr = $2 + $shl22 | 0;
      $head25 = $add$ptr + 4 | 0;
      $6 = HEAPU32[$head25 >> 2] | 0;
      $or26 = $6 | 1 | 0;
      HEAP32[$head25 >> 2] = $or26;
      $retval$0 = $fd9;
      wasm2asm_i32$0 = $retval$0;
      break topmost;
     }
     $7 = HEAPU32[184 >> 2] | 0;
     $cmp29 = ($cond >>> 0 | 0) >>> 0 > ($7 >>> 0 | 0) >>> 0;
     if ($cmp29) block5 : {
      $cmp31 = ($shr3 | 0) == (0 | 0);
      if (($cmp31 | 0) == (0 | 0)) block6 : {
       $shl35 = $shr3 << $shr | 0;
       $shl37 = 2 << $shr | 0;
       $sub = 0 - $shl37 | 0;
       $or40 = $shl37 | $sub | 0;
       $and41 = $shl35 & $or40 | 0;
       $sub42 = 0 - $and41 | 0;
       $and43 = $and41 & $sub42 | 0;
       $sub44 = $and43 + 4294967295 | 0;
       $shr45 = $sub44 >>> 12 | 0;
       $and46 = $shr45 & 16 | 0;
       $shr47 = $sub44 >>> $and46 | 0;
       $shr48 = $shr47 >>> 5 | 0;
       $and49 = $shr48 & 8 | 0;
       $add50 = $and49 | $and46 | 0;
       $shr51 = $shr47 >>> $and49 | 0;
       $shr52 = $shr51 >>> 2 | 0;
       $and53 = $shr52 & 4 | 0;
       $add54 = $add50 | $and53 | 0;
       $shr55 = $shr51 >>> $and53 | 0;
       $shr56 = $shr55 >>> 1 | 0;
       $and57 = $shr56 & 2 | 0;
       $add58 = $add54 | $and57 | 0;
       $shr59 = $shr55 >>> $and57 | 0;
       $shr60 = $shr59 >>> 1 | 0;
       $and61 = $shr60 & 1 | 0;
       $add62 = $add58 | $and61 | 0;
       $shr63 = $shr59 >>> $and61 | 0;
       $add64 = $add62 + $shr63 | 0;
       $shl65 = $add64 << 1 | 0;
       $arrayidx66 = 216 + ($shl65 << 2 | 0) | 0;
       $8 = $arrayidx66 + 8 | 0;
       $9 = HEAPU32[$8 >> 2] | 0;
       $fd69 = $9 + 8 | 0;
       $10 = HEAPU32[$fd69 >> 2] | 0;
       $cmp70 = ($arrayidx66 | 0) == ($10 | 0);
       do_once$2 : {
        if ($cmp70) block7 : {
         $shl72 = 1 << $add64 | 0;
         $neg73 = $shl72 ^ 4294967295 | 0;
         $and74 = $0 & $neg73 | 0;
         HEAP32[176 >> 2] = $and74;
         $13 = $7;
        } else block8 : {
         $11 = HEAPU32[192 >> 2] | 0;
         $cmp76 = ($10 >>> 0 | 0) >>> 0 < ($11 >>> 0 | 0) >>> 0;
         if ($cmp76) _abort();
         $bk78 = $10 + 12 | 0;
         $12 = HEAPU32[$bk78 >> 2] | 0;
         $cmp79 = ($12 | 0) == ($9 | 0);
         if ($cmp79) block9 : {
          HEAP32[$bk78 >> 2] = $arrayidx66;
          HEAP32[$8 >> 2] = $10;
          $$pre = HEAPU32[184 >> 2] | 0;
          $13 = $$pre;
          break do_once$2;
         } else _abort();
        }
       }
       $shl90 = $add64 << 3 | 0;
       $sub91 = $shl90 - $cond | 0;
       $or93 = $cond | 3 | 0;
       $head94 = $9 + 4 | 0;
       HEAP32[$head94 >> 2] = $or93;
       $add$ptr95 = $9 + $cond | 0;
       $or96 = $sub91 | 1 | 0;
       $head97 = $add$ptr95 + 4 | 0;
       HEAP32[$head97 >> 2] = $or96;
       $add$ptr98 = $add$ptr95 + $sub91 | 0;
       HEAP32[$add$ptr98 >> 2] = $sub91;
       $cmp99 = ($13 | 0) == (0 | 0);
       if (($cmp99 | 0) == (0 | 0)) block10 : {
        $14 = HEAPU32[196 >> 2] | 0;
        $shr101 = $13 >>> 3 | 0;
        $shl102 = $shr101 << 1 | 0;
        $arrayidx103 = 216 + ($shl102 << 2 | 0) | 0;
        $15 = HEAPU32[176 >> 2] | 0;
        $shl105 = 1 << $shr101 | 0;
        $and106 = $15 & $shl105 | 0;
        $tobool107 = ($and106 | 0) == (0 | 0);
        if ($tobool107) block11 : {
         $or110 = $15 | $shl105 | 0;
         HEAP32[176 >> 2] = $or110;
         $$pre241 = $arrayidx103 + 8 | 0;
         $$pre$phiZ2D = $$pre241;
         $F104$0 = $arrayidx103;
        } else block12 : {
         $16 = $arrayidx103 + 8 | 0;
         $17 = HEAPU32[$16 >> 2] | 0;
         $18 = HEAPU32[192 >> 2] | 0;
         $cmp113 = ($17 >>> 0 | 0) >>> 0 < ($18 >>> 0 | 0) >>> 0;
         if ($cmp113) _abort(); else block13 : {
          $$pre$phiZ2D = $16;
          $F104$0 = $17;
         }
        }
        HEAP32[$$pre$phiZ2D >> 2] = $14;
        $bk122 = $F104$0 + 12 | 0;
        HEAP32[$bk122 >> 2] = $14;
        $fd123 = $14 + 8 | 0;
        HEAP32[$fd123 >> 2] = $F104$0;
        $bk124 = $14 + 12 | 0;
        HEAP32[$bk124 >> 2] = $arrayidx103;
       }
       HEAP32[184 >> 2] = $sub91;
       HEAP32[196 >> 2] = $add$ptr95;
       $retval$0 = $fd69;
       wasm2asm_i32$0 = $retval$0;
       break topmost;
      }
      $19 = HEAPU32[180 >> 2] | 0;
      $cmp128 = ($19 | 0) == (0 | 0);
      if ($cmp128) $nb$0 = $cond; else block14 : {
       $sub$i = 0 - $19 | 0;
       $and$i = $19 & $sub$i | 0;
       $sub2$i = $and$i + 4294967295 | 0;
       $shr$i = $sub2$i >>> 12 | 0;
       $and3$i = $shr$i & 16 | 0;
       $shr4$i = $sub2$i >>> $and3$i | 0;
       $shr5$i = $shr4$i >>> 5 | 0;
       $and6$i = $shr5$i & 8 | 0;
       $add$i = $and6$i | $and3$i | 0;
       $shr7$i = $shr4$i >>> $and6$i | 0;
       $shr8$i = $shr7$i >>> 2 | 0;
       $and9$i = $shr8$i & 4 | 0;
       $add10$i = $add$i | $and9$i | 0;
       $shr11$i = $shr7$i >>> $and9$i | 0;
       $shr12$i = $shr11$i >>> 1 | 0;
       $and13$i = $shr12$i & 2 | 0;
       $add14$i = $add10$i | $and13$i | 0;
       $shr15$i = $shr11$i >>> $and13$i | 0;
       $shr16$i = $shr15$i >>> 1 | 0;
       $and17$i = $shr16$i & 1 | 0;
       $add18$i = $add14$i | $and17$i | 0;
       $shr19$i = $shr15$i >>> $and17$i | 0;
       $add20$i = $add18$i + $shr19$i | 0;
       $arrayidx$i = 480 + ($add20$i << 2 | 0) | 0;
       $20 = HEAPU32[$arrayidx$i >> 2] | 0;
       $head$i = $20 + 4 | 0;
       $21 = HEAPU32[$head$i >> 2] | 0;
       $and21$i = $21 & 4294967288 | 0;
       $sub22$i = $and21$i - $cond | 0;
       $rsize$0$i = $sub22$i;
       $t$0$i = $20;
       $v$0$i = $20;
       while_out$3 : do block15 : {
        $arrayidx23$i = $t$0$i + 16 | 0;
        $22 = HEAPU32[$arrayidx23$i >> 2] | 0;
        $cmp$i = ($22 | 0) == (0 | 0);
        if ($cmp$i) block16 : {
         $arrayidx27$i = $t$0$i + 20 | 0;
         $23 = HEAPU32[$arrayidx27$i >> 2] | 0;
         $cmp28$i = ($23 | 0) == (0 | 0);
         if ($cmp28$i) block17 : {
          $rsize$0$i$lcssa = $rsize$0$i;
          $v$0$i$lcssa = $v$0$i;
          break while_out$3;
         } else $cond4$i = $23;
        } else $cond4$i = $22;
        $head29$i = $cond4$i + 4 | 0;
        $24 = HEAPU32[$head29$i >> 2] | 0;
        $and30$i = $24 & 4294967288 | 0;
        $sub31$i = $and30$i - $cond | 0;
        $cmp32$i = ($sub31$i >>> 0 | 0) >>> 0 < ($rsize$0$i >>> 0 | 0) >>> 0;
        if ($cmp32$i) wasm2asm_i32$1 = $sub31$i; else wasm2asm_i32$1 = $rsize$0$i;
        $sub31$rsize$0$i = wasm2asm_i32$1;
        if ($cmp32$i) wasm2asm_i32$1 = $cond4$i; else wasm2asm_i32$1 = $v$0$i;
        $cond$v$0$i = wasm2asm_i32$1;
        $rsize$0$i = $sub31$rsize$0$i;
        $t$0$i = $cond4$i;
        $v$0$i = $cond$v$0$i;
        continue while_out$3;
       } while (0);
       $25 = HEAPU32[192 >> 2] | 0;
       $cmp33$i = ($v$0$i$lcssa >>> 0 | 0) >>> 0 < ($25 >>> 0 | 0) >>> 0;
       if ($cmp33$i) _abort();
       $add$ptr$i = $v$0$i$lcssa + $cond | 0;
       $cmp35$i = ($v$0$i$lcssa >>> 0 | 0) >>> 0 < ($add$ptr$i >>> 0 | 0) >>> 0;
       if (($cmp35$i | 0) == (0 | 0)) _abort();
       $parent$i = $v$0$i$lcssa + 24 | 0;
       $26 = HEAPU32[$parent$i >> 2] | 0;
       $bk$i = $v$0$i$lcssa + 12 | 0;
       $27 = HEAPU32[$bk$i >> 2] | 0;
       $cmp40$i = ($27 | 0) == ($v$0$i$lcssa | 0);
       do_once$5 : {
        if ($cmp40$i) block18 : {
         $arrayidx61$i = $v$0$i$lcssa + 20 | 0;
         $31 = HEAPU32[$arrayidx61$i >> 2] | 0;
         $cmp62$i = ($31 | 0) == (0 | 0);
         if ($cmp62$i) block19 : {
          $arrayidx65$i = $v$0$i$lcssa + 16 | 0;
          $32 = HEAPU32[$arrayidx65$i >> 2] | 0;
          $cmp66$i = ($32 | 0) == (0 | 0);
          if ($cmp66$i) block20 : {
           $R$3$i = 0;
           break do_once$5;
          } else block21 : {
           $R$1$i = $32;
           $RP$1$i = $arrayidx65$i;
          }
         } else block22 : {
          $R$1$i = $31;
          $RP$1$i = $arrayidx61$i;
         }
         while_out$6 : do block23 : {
          $arrayidx71$i = $R$1$i + 20 | 0;
          $33 = HEAPU32[$arrayidx71$i >> 2] | 0;
          $cmp72$i = ($33 | 0) == (0 | 0);
          if (($cmp72$i | 0) == (0 | 0)) block24 : {
           $R$1$i = $33;
           $RP$1$i = $arrayidx71$i;
           continue while_out$6;
          }
          $arrayidx75$i = $R$1$i + 16 | 0;
          $34 = HEAPU32[$arrayidx75$i >> 2] | 0;
          $cmp76$i = ($34 | 0) == (0 | 0);
          if ($cmp76$i) block25 : {
           $R$1$i$lcssa = $R$1$i;
           $RP$1$i$lcssa = $RP$1$i;
           break while_out$6;
          } else block26 : {
           $R$1$i = $34;
           $RP$1$i = $arrayidx75$i;
          }
          continue while_out$6;
         } while (0);
         $cmp81$i = ($RP$1$i$lcssa >>> 0 | 0) >>> 0 < ($25 >>> 0 | 0) >>> 0;
         if ($cmp81$i) _abort(); else block27 : {
          HEAP32[$RP$1$i$lcssa >> 2] = 0;
          $R$3$i = $R$1$i$lcssa;
          break do_once$5;
         }
        } else block28 : {
         $fd$i = $v$0$i$lcssa + 8 | 0;
         $28 = HEAPU32[$fd$i >> 2] | 0;
         $cmp45$i = ($28 >>> 0 | 0) >>> 0 < ($25 >>> 0 | 0) >>> 0;
         if ($cmp45$i) _abort();
         $bk47$i = $28 + 12 | 0;
         $29 = HEAPU32[$bk47$i >> 2] | 0;
         $cmp48$i = ($29 | 0) == ($v$0$i$lcssa | 0);
         if (($cmp48$i | 0) == (0 | 0)) _abort();
         $fd50$i = $27 + 8 | 0;
         $30 = HEAPU32[$fd50$i >> 2] | 0;
         $cmp51$i = ($30 | 0) == ($v$0$i$lcssa | 0);
         if ($cmp51$i) block29 : {
          HEAP32[$bk47$i >> 2] = $27;
          HEAP32[$fd50$i >> 2] = $28;
          $R$3$i = $27;
          break do_once$5;
         } else _abort();
        }
       }
       $cmp90$i = ($26 | 0) == (0 | 0);
       do_once$8 : {
        if (($cmp90$i | 0) == (0 | 0)) block30 : {
         $index$i = $v$0$i$lcssa + 28 | 0;
         $35 = HEAPU32[$index$i >> 2] | 0;
         $arrayidx94$i = 480 + ($35 << 2 | 0) | 0;
         $36 = HEAPU32[$arrayidx94$i >> 2] | 0;
         $cmp95$i = ($v$0$i$lcssa | 0) == ($36 | 0);
         if ($cmp95$i) block31 : {
          HEAP32[$arrayidx94$i >> 2] = $R$3$i;
          $cond2$i = ($R$3$i | 0) == (0 | 0);
          if ($cond2$i) block32 : {
           $shl$i = 1 << $35 | 0;
           $neg$i = $shl$i ^ 4294967295 | 0;
           $37 = HEAPU32[180 >> 2] | 0;
           $and103$i = $37 & $neg$i | 0;
           HEAP32[180 >> 2] = $and103$i;
           break do_once$8;
          }
         } else block33 : {
          $38 = HEAPU32[192 >> 2] | 0;
          $cmp107$i = ($26 >>> 0 | 0) >>> 0 < ($38 >>> 0 | 0) >>> 0;
          if ($cmp107$i) _abort();
          $arrayidx113$i = $26 + 16 | 0;
          $39 = HEAPU32[$arrayidx113$i >> 2] | 0;
          $cmp114$i = ($39 | 0) == ($v$0$i$lcssa | 0);
          if ($cmp114$i) HEAP32[$arrayidx113$i >> 2] = $R$3$i; else block34 : {
           $arrayidx121$i = $26 + 20 | 0;
           HEAP32[$arrayidx121$i >> 2] = $R$3$i;
          }
          $cmp126$i = ($R$3$i | 0) == (0 | 0);
          if ($cmp126$i) break do_once$8;
         }
         $40 = HEAPU32[192 >> 2] | 0;
         $cmp130$i = ($R$3$i >>> 0 | 0) >>> 0 < ($40 >>> 0 | 0) >>> 0;
         if ($cmp130$i) _abort();
         $parent135$i = $R$3$i + 24 | 0;
         HEAP32[$parent135$i >> 2] = $26;
         $arrayidx137$i = $v$0$i$lcssa + 16 | 0;
         $41 = HEAPU32[$arrayidx137$i >> 2] | 0;
         $cmp138$i = ($41 | 0) == (0 | 0);
         do_once$9 : {
          if (($cmp138$i | 0) == (0 | 0)) block35 : {
           $cmp142$i = ($41 >>> 0 | 0) >>> 0 < ($40 >>> 0 | 0) >>> 0;
           if ($cmp142$i) _abort(); else block36 : {
            $arrayidx148$i = $R$3$i + 16 | 0;
            HEAP32[$arrayidx148$i >> 2] = $41;
            $parent149$i = $41 + 24 | 0;
            HEAP32[$parent149$i >> 2] = $R$3$i;
            break do_once$9;
           }
          }
         }
         $arrayidx154$i = $v$0$i$lcssa + 20 | 0;
         $42 = HEAPU32[$arrayidx154$i >> 2] | 0;
         $cmp155$i = ($42 | 0) == (0 | 0);
         if (($cmp155$i | 0) == (0 | 0)) block37 : {
          $43 = HEAPU32[192 >> 2] | 0;
          $cmp159$i = ($42 >>> 0 | 0) >>> 0 < ($43 >>> 0 | 0) >>> 0;
          if ($cmp159$i) _abort(); else block38 : {
           $arrayidx165$i = $R$3$i + 20 | 0;
           HEAP32[$arrayidx165$i >> 2] = $42;
           $parent166$i = $42 + 24 | 0;
           HEAP32[$parent166$i >> 2] = $R$3$i;
           break do_once$8;
          }
         }
        }
       }
       $cmp174$i = ($rsize$0$i$lcssa >>> 0 | 0) >>> 0 < 16 >>> 0;
       if ($cmp174$i) block39 : {
        $add177$i = $rsize$0$i$lcssa + $cond | 0;
        $or178$i = $add177$i | 3 | 0;
        $head179$i = $v$0$i$lcssa + 4 | 0;
        HEAP32[$head179$i >> 2] = $or178$i;
        $add$ptr181$i = $v$0$i$lcssa + $add177$i | 0;
        $head182$i = $add$ptr181$i + 4 | 0;
        $44 = HEAPU32[$head182$i >> 2] | 0;
        $or183$i = $44 | 1 | 0;
        HEAP32[$head182$i >> 2] = $or183$i;
       } else block40 : {
        $or186$i = $cond | 3 | 0;
        $head187$i = $v$0$i$lcssa + 4 | 0;
        HEAP32[$head187$i >> 2] = $or186$i;
        $or188$i = $rsize$0$i$lcssa | 1 | 0;
        $head189$i = $add$ptr$i + 4 | 0;
        HEAP32[$head189$i >> 2] = $or188$i;
        $add$ptr190$i = $add$ptr$i + $rsize$0$i$lcssa | 0;
        HEAP32[$add$ptr190$i >> 2] = $rsize$0$i$lcssa;
        $45 = HEAPU32[184 >> 2] | 0;
        $cmp191$i = ($45 | 0) == (0 | 0);
        if (($cmp191$i | 0) == (0 | 0)) block41 : {
         $46 = HEAPU32[196 >> 2] | 0;
         $shr194$i = $45 >>> 3 | 0;
         $shl195$i = $shr194$i << 1 | 0;
         $arrayidx196$i = 216 + ($shl195$i << 2 | 0) | 0;
         $47 = HEAPU32[176 >> 2] | 0;
         $shl198$i = 1 << $shr194$i | 0;
         $and199$i = $47 & $shl198$i | 0;
         $tobool200$i = ($and199$i | 0) == (0 | 0);
         if ($tobool200$i) block42 : {
          $or204$i = $47 | $shl198$i | 0;
          HEAP32[176 >> 2] = $or204$i;
          $$pre$i = $arrayidx196$i + 8 | 0;
          $$pre$phi$iZ2D = $$pre$i;
          $F197$0$i = $arrayidx196$i;
         } else block43 : {
          $48 = $arrayidx196$i + 8 | 0;
          $49 = HEAPU32[$48 >> 2] | 0;
          $50 = HEAPU32[192 >> 2] | 0;
          $cmp208$i = ($49 >>> 0 | 0) >>> 0 < ($50 >>> 0 | 0) >>> 0;
          if ($cmp208$i) _abort(); else block44 : {
           $$pre$phi$iZ2D = $48;
           $F197$0$i = $49;
          }
         }
         HEAP32[$$pre$phi$iZ2D >> 2] = $46;
         $bk218$i = $F197$0$i + 12 | 0;
         HEAP32[$bk218$i >> 2] = $46;
         $fd219$i = $46 + 8 | 0;
         HEAP32[$fd219$i >> 2] = $F197$0$i;
         $bk220$i = $46 + 12 | 0;
         HEAP32[$bk220$i >> 2] = $arrayidx196$i;
        }
        HEAP32[184 >> 2] = $rsize$0$i$lcssa;
        HEAP32[196 >> 2] = $add$ptr$i;
       }
       $add$ptr225$i = $v$0$i$lcssa + 8 | 0;
       $retval$0 = $add$ptr225$i;
       wasm2asm_i32$0 = $retval$0;
       break topmost;
      }
     } else $nb$0 = $cond;
    } else block45 : {
     $cmp139 = ($bytes >>> 0 | 0) >>> 0 > 4294967231 >>> 0;
     if ($cmp139) $nb$0 = 4294967295; else block46 : {
      $add144 = $bytes + 11 | 0;
      $and145 = $add144 & 4294967288 | 0;
      $51 = HEAPU32[180 >> 2] | 0;
      $cmp146 = ($51 | 0) == (0 | 0);
      if ($cmp146) $nb$0 = $and145; else block47 : {
       $sub$i$138 = 0 - $and145 | 0;
       $shr$i$139 = $add144 >>> 8 | 0;
       $cmp$i$140 = ($shr$i$139 | 0) == (0 | 0);
       if ($cmp$i$140) $idx$0$i = 0; else block48 : {
        $cmp1$i = ($and145 >>> 0 | 0) >>> 0 > 16777215 >>> 0;
        if ($cmp1$i) $idx$0$i = 31; else block49 : {
         $sub4$i = $shr$i$139 + 1048320 | 0;
         $shr5$i$142 = $sub4$i >>> 16 | 0;
         $and$i$143 = $shr5$i$142 & 8 | 0;
         $shl$i$144 = $shr$i$139 << $and$i$143 | 0;
         $sub6$i = $shl$i$144 + 520192 | 0;
         $shr7$i$145 = $sub6$i >>> 16 | 0;
         $and8$i = $shr7$i$145 & 4 | 0;
         $add$i$146 = $and8$i | $and$i$143 | 0;
         $shl9$i = $shl$i$144 << $and8$i | 0;
         $sub10$i = $shl9$i + 245760 | 0;
         $shr11$i$147 = $sub10$i >>> 16 | 0;
         $and12$i = $shr11$i$147 & 2 | 0;
         $add13$i = $add$i$146 | $and12$i | 0;
         $sub14$i = 14 - $add13$i | 0;
         $shl15$i = $shl9$i << $and12$i | 0;
         $shr16$i$148 = $shl15$i >>> 15 | 0;
         $add17$i = $sub14$i + $shr16$i$148 | 0;
         $shl18$i = $add17$i << 1 | 0;
         $add19$i = $add17$i + 7 | 0;
         $shr20$i = $and145 >>> $add19$i | 0;
         $and21$i$149 = $shr20$i & 1 | 0;
         $add22$i = $and21$i$149 | $shl18$i | 0;
         $idx$0$i = $add22$i;
        }
       }
       $arrayidx$i$150 = 480 + ($idx$0$i << 2 | 0) | 0;
       $52 = HEAPU32[$arrayidx$i$150 >> 2] | 0;
       $cmp24$i = ($52 | 0) == (0 | 0);
       label$break$L123 : {
        if ($cmp24$i) block50 : {
         $rsize$3$i = $sub$i$138;
         $t$2$i = 0;
         $v$3$i = 0;
         label = 86;
        } else block51 : {
         $cmp26$i = ($idx$0$i | 0) == (31 | 0);
         $shr27$i = $idx$0$i >>> 1 | 0;
         $sub30$i = 25 - $shr27$i | 0;
         if ($cmp26$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub30$i;
         $cond$i = wasm2asm_i32$1;
         $shl31$i = $and145 << $cond$i | 0;
         $rsize$0$i$152 = $sub$i$138;
         $rst$0$i = 0;
         $sizebits$0$i = $shl31$i;
         $t$0$i$151 = $52;
         $v$0$i$153 = 0;
         while_out$10 : do block52 : {
          $head$i$154 = $t$0$i$151 + 4 | 0;
          $53 = HEAPU32[$head$i$154 >> 2] | 0;
          $and32$i = $53 & 4294967288 | 0;
          $sub33$i = $and32$i - $and145 | 0;
          $cmp34$i = ($sub33$i >>> 0 | 0) >>> 0 < ($rsize$0$i$152 >>> 0 | 0) >>> 0;
          if ($cmp34$i) block53 : {
           $cmp36$i = ($and32$i | 0) == ($and145 | 0);
           if ($cmp36$i) block54 : {
            $rsize$49$i = $sub33$i;
            $t$48$i = $t$0$i$151;
            $v$410$i = $t$0$i$151;
            label = 90;
            break label$break$L123;
           } else block55 : {
            $rsize$1$i = $sub33$i;
            $v$1$i = $t$0$i$151;
           }
          } else block56 : {
           $rsize$1$i = $rsize$0$i$152;
           $v$1$i = $v$0$i$153;
          }
          $arrayidx40$i = $t$0$i$151 + 20 | 0;
          $54 = HEAPU32[$arrayidx40$i >> 2] | 0;
          $shr41$i = $sizebits$0$i >>> 31 | 0;
          $arrayidx44$i = ($t$0$i$151 + 16 | 0) + ($shr41$i << 2 | 0) | 0;
          $55 = HEAPU32[$arrayidx44$i >> 2] | 0;
          $cmp45$i$155 = ($54 | 0) == (0 | 0);
          $cmp46$i = ($54 | 0) == ($55 | 0);
          $or$cond1$i = $cmp45$i$155 | $cmp46$i | 0;
          if ($or$cond1$i) wasm2asm_i32$1 = $rst$0$i; else wasm2asm_i32$1 = $54;
          $rst$1$i = wasm2asm_i32$1;
          $cmp49$i = ($55 | 0) == (0 | 0);
          $56 = $cmp49$i & 1 | 0;
          $shl52$i = $56 ^ 1 | 0;
          $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i | 0;
          if ($cmp49$i) block57 : {
           $rsize$3$i = $rsize$1$i;
           $t$2$i = $rst$1$i;
           $v$3$i = $v$1$i;
           label = 86;
           break while_out$10;
          } else block58 : {
           $rsize$0$i$152 = $rsize$1$i;
           $rst$0$i = $rst$1$i;
           $sizebits$0$i = $sizebits$0$shl52$i;
           $t$0$i$151 = $55;
           $v$0$i$153 = $v$1$i;
          }
          continue while_out$10;
         } while (0);
        }
       }
       if ((label | 0) == (86 | 0)) block59 : {
        $cmp55$i = ($t$2$i | 0) == (0 | 0);
        $cmp57$i = ($v$3$i | 0) == (0 | 0);
        $or$cond$i = $cmp55$i & $cmp57$i | 0;
        if ($or$cond$i) block60 : {
         $shl60$i = 2 << $idx$0$i | 0;
         $sub63$i = 0 - $shl60$i | 0;
         $or$i = $shl60$i | $sub63$i | 0;
         $and64$i = $51 & $or$i | 0;
         $cmp65$i = ($and64$i | 0) == (0 | 0);
         if ($cmp65$i) block61 : {
          $nb$0 = $and145;
          break do_once$0;
         }
         $sub67$i = 0 - $and64$i | 0;
         $and68$i = $and64$i & $sub67$i | 0;
         $sub70$i = $and68$i + 4294967295 | 0;
         $shr72$i = $sub70$i >>> 12 | 0;
         $and73$i = $shr72$i & 16 | 0;
         $shr75$i = $sub70$i >>> $and73$i | 0;
         $shr76$i = $shr75$i >>> 5 | 0;
         $and77$i = $shr76$i & 8 | 0;
         $add78$i = $and77$i | $and73$i | 0;
         $shr79$i = $shr75$i >>> $and77$i | 0;
         $shr80$i = $shr79$i >>> 2 | 0;
         $and81$i = $shr80$i & 4 | 0;
         $add82$i = $add78$i | $and81$i | 0;
         $shr83$i = $shr79$i >>> $and81$i | 0;
         $shr84$i = $shr83$i >>> 1 | 0;
         $and85$i = $shr84$i & 2 | 0;
         $add86$i = $add82$i | $and85$i | 0;
         $shr87$i = $shr83$i >>> $and85$i | 0;
         $shr88$i = $shr87$i >>> 1 | 0;
         $and89$i = $shr88$i & 1 | 0;
         $add90$i = $add86$i | $and89$i | 0;
         $shr91$i = $shr87$i >>> $and89$i | 0;
         $add92$i = $add90$i + $shr91$i | 0;
         $arrayidx94$i$156 = 480 + ($add92$i << 2 | 0) | 0;
         $57 = HEAPU32[$arrayidx94$i$156 >> 2] | 0;
         $t$4$ph$i = $57;
        } else $t$4$ph$i = $t$2$i;
        $cmp97$7$i = ($t$4$ph$i | 0) == (0 | 0);
        if ($cmp97$7$i) block62 : {
         $rsize$4$lcssa$i = $rsize$3$i;
         $v$4$lcssa$i = $v$3$i;
        } else block63 : {
         $rsize$49$i = $rsize$3$i;
         $t$48$i = $t$4$ph$i;
         $v$410$i = $v$3$i;
         label = 90;
        }
       }
       if ((label | 0) == (90 | 0)) while_out$12 : do block64 : {
        label = 0;
        $head99$i = $t$48$i + 4 | 0;
        $58 = HEAPU32[$head99$i >> 2] | 0;
        $and100$i = $58 & 4294967288 | 0;
        $sub101$i = $and100$i - $and145 | 0;
        $cmp102$i = ($sub101$i >>> 0 | 0) >>> 0 < ($rsize$49$i >>> 0 | 0) >>> 0;
        if ($cmp102$i) wasm2asm_i32$1 = $sub101$i; else wasm2asm_i32$1 = $rsize$49$i;
        $sub101$rsize$4$i = wasm2asm_i32$1;
        if ($cmp102$i) wasm2asm_i32$1 = $t$48$i; else wasm2asm_i32$1 = $v$410$i;
        $t$4$v$4$i = wasm2asm_i32$1;
        $arrayidx106$i = $t$48$i + 16 | 0;
        $59 = HEAPU32[$arrayidx106$i >> 2] | 0;
        $cmp107$i$157 = ($59 | 0) == (0 | 0);
        if (($cmp107$i$157 | 0) == (0 | 0)) block65 : {
         $rsize$49$i = $sub101$rsize$4$i;
         $t$48$i = $59;
         $v$410$i = $t$4$v$4$i;
         label = 90;
         continue while_out$12;
        }
        $arrayidx113$i$159 = $t$48$i + 20 | 0;
        $60 = HEAPU32[$arrayidx113$i$159 >> 2] | 0;
        $cmp97$i = ($60 | 0) == (0 | 0);
        if ($cmp97$i) block66 : {
         $rsize$4$lcssa$i = $sub101$rsize$4$i;
         $v$4$lcssa$i = $t$4$v$4$i;
         break while_out$12;
        } else block67 : {
         $rsize$49$i = $sub101$rsize$4$i;
         $t$48$i = $60;
         $v$410$i = $t$4$v$4$i;
         label = 90;
        }
        continue while_out$12;
       } while (0);
       $cmp116$i = ($v$4$lcssa$i | 0) == (0 | 0);
       if ($cmp116$i) $nb$0 = $and145; else block68 : {
        $61 = HEAPU32[184 >> 2] | 0;
        $sub118$i = $61 - $and145 | 0;
        $cmp119$i = ($rsize$4$lcssa$i >>> 0 | 0) >>> 0 < ($sub118$i >>> 0 | 0) >>> 0;
        if ($cmp119$i) block69 : {
         $62 = HEAPU32[192 >> 2] | 0;
         $cmp121$i = ($v$4$lcssa$i >>> 0 | 0) >>> 0 < ($62 >>> 0 | 0) >>> 0;
         if ($cmp121$i) _abort();
         $add$ptr$i$161 = $v$4$lcssa$i + $and145 | 0;
         $cmp123$i = ($v$4$lcssa$i >>> 0 | 0) >>> 0 < ($add$ptr$i$161 >>> 0 | 0) >>> 0;
         if (($cmp123$i | 0) == (0 | 0)) _abort();
         $parent$i$162 = $v$4$lcssa$i + 24 | 0;
         $63 = HEAPU32[$parent$i$162 >> 2] | 0;
         $bk$i$163 = $v$4$lcssa$i + 12 | 0;
         $64 = HEAPU32[$bk$i$163 >> 2] | 0;
         $cmp128$i = ($64 | 0) == ($v$4$lcssa$i | 0);
         do_once$14 : {
          if ($cmp128$i) block70 : {
           $arrayidx151$i = $v$4$lcssa$i + 20 | 0;
           $68 = HEAPU32[$arrayidx151$i >> 2] | 0;
           $cmp152$i = ($68 | 0) == (0 | 0);
           if ($cmp152$i) block71 : {
            $arrayidx155$i = $v$4$lcssa$i + 16 | 0;
            $69 = HEAPU32[$arrayidx155$i >> 2] | 0;
            $cmp156$i = ($69 | 0) == (0 | 0);
            if ($cmp156$i) block72 : {
             $R$3$i$171 = 0;
             break do_once$14;
            } else block73 : {
             $R$1$i$168 = $69;
             $RP$1$i$167 = $arrayidx155$i;
            }
           } else block74 : {
            $R$1$i$168 = $68;
            $RP$1$i$167 = $arrayidx151$i;
           }
           while_out$15 : do block75 : {
            $arrayidx161$i = $R$1$i$168 + 20 | 0;
            $70 = HEAPU32[$arrayidx161$i >> 2] | 0;
            $cmp162$i = ($70 | 0) == (0 | 0);
            if (($cmp162$i | 0) == (0 | 0)) block76 : {
             $R$1$i$168 = $70;
             $RP$1$i$167 = $arrayidx161$i;
             continue while_out$15;
            }
            $arrayidx165$i$169 = $R$1$i$168 + 16 | 0;
            $71 = HEAPU32[$arrayidx165$i$169 >> 2] | 0;
            $cmp166$i = ($71 | 0) == (0 | 0);
            if ($cmp166$i) block77 : {
             $R$1$i$168$lcssa = $R$1$i$168;
             $RP$1$i$167$lcssa = $RP$1$i$167;
             break while_out$15;
            } else block78 : {
             $R$1$i$168 = $71;
             $RP$1$i$167 = $arrayidx165$i$169;
            }
            continue while_out$15;
           } while (0);
           $cmp171$i = ($RP$1$i$167$lcssa >>> 0 | 0) >>> 0 < ($62 >>> 0 | 0) >>> 0;
           if ($cmp171$i) _abort(); else block79 : {
            HEAP32[$RP$1$i$167$lcssa >> 2] = 0;
            $R$3$i$171 = $R$1$i$168$lcssa;
            break do_once$14;
           }
          } else block80 : {
           $fd$i$164 = $v$4$lcssa$i + 8 | 0;
           $65 = HEAPU32[$fd$i$164 >> 2] | 0;
           $cmp133$i = ($65 >>> 0 | 0) >>> 0 < ($62 >>> 0 | 0) >>> 0;
           if ($cmp133$i) _abort();
           $bk136$i = $65 + 12 | 0;
           $66 = HEAPU32[$bk136$i >> 2] | 0;
           $cmp137$i = ($66 | 0) == ($v$4$lcssa$i | 0);
           if (($cmp137$i | 0) == (0 | 0)) _abort();
           $fd139$i = $64 + 8 | 0;
           $67 = HEAPU32[$fd139$i >> 2] | 0;
           $cmp140$i = ($67 | 0) == ($v$4$lcssa$i | 0);
           if ($cmp140$i) block81 : {
            HEAP32[$bk136$i >> 2] = $64;
            HEAP32[$fd139$i >> 2] = $65;
            $R$3$i$171 = $64;
            break do_once$14;
           } else _abort();
          }
         }
         $cmp180$i = ($63 | 0) == (0 | 0);
         do_once$17 : {
          if (($cmp180$i | 0) == (0 | 0)) block82 : {
           $index$i$172 = $v$4$lcssa$i + 28 | 0;
           $72 = HEAPU32[$index$i$172 >> 2] | 0;
           $arrayidx184$i = 480 + ($72 << 2 | 0) | 0;
           $73 = HEAPU32[$arrayidx184$i >> 2] | 0;
           $cmp185$i = ($v$4$lcssa$i | 0) == ($73 | 0);
           if ($cmp185$i) block83 : {
            HEAP32[$arrayidx184$i >> 2] = $R$3$i$171;
            $cond3$i = ($R$3$i$171 | 0) == (0 | 0);
            if ($cond3$i) block84 : {
             $shl192$i = 1 << $72 | 0;
             $neg$i$173 = $shl192$i ^ 4294967295 | 0;
             $74 = HEAPU32[180 >> 2] | 0;
             $and194$i = $74 & $neg$i$173 | 0;
             HEAP32[180 >> 2] = $and194$i;
             break do_once$17;
            }
           } else block85 : {
            $75 = HEAPU32[192 >> 2] | 0;
            $cmp198$i = ($63 >>> 0 | 0) >>> 0 < ($75 >>> 0 | 0) >>> 0;
            if ($cmp198$i) _abort();
            $arrayidx204$i = $63 + 16 | 0;
            $76 = HEAPU32[$arrayidx204$i >> 2] | 0;
            $cmp205$i = ($76 | 0) == ($v$4$lcssa$i | 0);
            if ($cmp205$i) HEAP32[$arrayidx204$i >> 2] = $R$3$i$171; else block86 : {
             $arrayidx212$i = $63 + 20 | 0;
             HEAP32[$arrayidx212$i >> 2] = $R$3$i$171;
            }
            $cmp217$i = ($R$3$i$171 | 0) == (0 | 0);
            if ($cmp217$i) break do_once$17;
           }
           $77 = HEAPU32[192 >> 2] | 0;
           $cmp221$i = ($R$3$i$171 >>> 0 | 0) >>> 0 < ($77 >>> 0 | 0) >>> 0;
           if ($cmp221$i) _abort();
           $parent226$i = $R$3$i$171 + 24 | 0;
           HEAP32[$parent226$i >> 2] = $63;
           $arrayidx228$i = $v$4$lcssa$i + 16 | 0;
           $78 = HEAPU32[$arrayidx228$i >> 2] | 0;
           $cmp229$i = ($78 | 0) == (0 | 0);
           do_once$18 : {
            if (($cmp229$i | 0) == (0 | 0)) block87 : {
             $cmp233$i = ($78 >>> 0 | 0) >>> 0 < ($77 >>> 0 | 0) >>> 0;
             if ($cmp233$i) _abort(); else block88 : {
              $arrayidx239$i = $R$3$i$171 + 16 | 0;
              HEAP32[$arrayidx239$i >> 2] = $78;
              $parent240$i = $78 + 24 | 0;
              HEAP32[$parent240$i >> 2] = $R$3$i$171;
              break do_once$18;
             }
            }
           }
           $arrayidx245$i = $v$4$lcssa$i + 20 | 0;
           $79 = HEAPU32[$arrayidx245$i >> 2] | 0;
           $cmp246$i = ($79 | 0) == (0 | 0);
           if (($cmp246$i | 0) == (0 | 0)) block89 : {
            $80 = HEAPU32[192 >> 2] | 0;
            $cmp250$i = ($79 >>> 0 | 0) >>> 0 < ($80 >>> 0 | 0) >>> 0;
            if ($cmp250$i) _abort(); else block90 : {
             $arrayidx256$i = $R$3$i$171 + 20 | 0;
             HEAP32[$arrayidx256$i >> 2] = $79;
             $parent257$i = $79 + 24 | 0;
             HEAP32[$parent257$i >> 2] = $R$3$i$171;
             break do_once$17;
            }
           }
          }
         }
         $cmp265$i = ($rsize$4$lcssa$i >>> 0 | 0) >>> 0 < 16 >>> 0;
         do_once$19 : {
          if ($cmp265$i) block91 : {
           $add268$i = $rsize$4$lcssa$i + $and145 | 0;
           $or270$i = $add268$i | 3 | 0;
           $head271$i = $v$4$lcssa$i + 4 | 0;
           HEAP32[$head271$i >> 2] = $or270$i;
           $add$ptr273$i = $v$4$lcssa$i + $add268$i | 0;
           $head274$i = $add$ptr273$i + 4 | 0;
           $81 = HEAPU32[$head274$i >> 2] | 0;
           $or275$i = $81 | 1 | 0;
           HEAP32[$head274$i >> 2] = $or275$i;
          } else block92 : {
           $or278$i = $and145 | 3 | 0;
           $head279$i = $v$4$lcssa$i + 4 | 0;
           HEAP32[$head279$i >> 2] = $or278$i;
           $or280$i = $rsize$4$lcssa$i | 1 | 0;
           $head281$i = $add$ptr$i$161 + 4 | 0;
           HEAP32[$head281$i >> 2] = $or280$i;
           $add$ptr282$i = $add$ptr$i$161 + $rsize$4$lcssa$i | 0;
           HEAP32[$add$ptr282$i >> 2] = $rsize$4$lcssa$i;
           $shr283$i = $rsize$4$lcssa$i >>> 3 | 0;
           $cmp284$i = ($rsize$4$lcssa$i >>> 0 | 0) >>> 0 < 256 >>> 0;
           if ($cmp284$i) block93 : {
            $shl288$i = $shr283$i << 1 | 0;
            $arrayidx289$i = 216 + ($shl288$i << 2 | 0) | 0;
            $82 = HEAPU32[176 >> 2] | 0;
            $shl291$i = 1 << $shr283$i | 0;
            $and292$i = $82 & $shl291$i | 0;
            $tobool293$i = ($and292$i | 0) == (0 | 0);
            if ($tobool293$i) block94 : {
             $or297$i = $82 | $shl291$i | 0;
             HEAP32[176 >> 2] = $or297$i;
             $$pre$i$177 = $arrayidx289$i + 8 | 0;
             $$pre$phi$i$178Z2D = $$pre$i$177;
             $F290$0$i = $arrayidx289$i;
            } else block95 : {
             $83 = $arrayidx289$i + 8 | 0;
             $84 = HEAPU32[$83 >> 2] | 0;
             $85 = HEAPU32[192 >> 2] | 0;
             $cmp301$i = ($84 >>> 0 | 0) >>> 0 < ($85 >>> 0 | 0) >>> 0;
             if ($cmp301$i) _abort(); else block96 : {
              $$pre$phi$i$178Z2D = $83;
              $F290$0$i = $84;
             }
            }
            HEAP32[$$pre$phi$i$178Z2D >> 2] = $add$ptr$i$161;
            $bk311$i = $F290$0$i + 12 | 0;
            HEAP32[$bk311$i >> 2] = $add$ptr$i$161;
            $fd312$i = $add$ptr$i$161 + 8 | 0;
            HEAP32[$fd312$i >> 2] = $F290$0$i;
            $bk313$i = $add$ptr$i$161 + 12 | 0;
            HEAP32[$bk313$i >> 2] = $arrayidx289$i;
            break do_once$19;
           }
           $shr318$i = $rsize$4$lcssa$i >>> 8 | 0;
           $cmp319$i = ($shr318$i | 0) == (0 | 0);
           if ($cmp319$i) $I316$0$i = 0; else block97 : {
            $cmp323$i = ($rsize$4$lcssa$i >>> 0 | 0) >>> 0 > 16777215 >>> 0;
            if ($cmp323$i) $I316$0$i = 31; else block98 : {
             $sub329$i = $shr318$i + 1048320 | 0;
             $shr330$i = $sub329$i >>> 16 | 0;
             $and331$i = $shr330$i & 8 | 0;
             $shl333$i = $shr318$i << $and331$i | 0;
             $sub334$i = $shl333$i + 520192 | 0;
             $shr335$i = $sub334$i >>> 16 | 0;
             $and336$i = $shr335$i & 4 | 0;
             $add337$i = $and336$i | $and331$i | 0;
             $shl338$i = $shl333$i << $and336$i | 0;
             $sub339$i = $shl338$i + 245760 | 0;
             $shr340$i = $sub339$i >>> 16 | 0;
             $and341$i = $shr340$i & 2 | 0;
             $add342$i = $add337$i | $and341$i | 0;
             $sub343$i = 14 - $add342$i | 0;
             $shl344$i = $shl338$i << $and341$i | 0;
             $shr345$i = $shl344$i >>> 15 | 0;
             $add346$i = $sub343$i + $shr345$i | 0;
             $shl347$i = $add346$i << 1 | 0;
             $add348$i = $add346$i + 7 | 0;
             $shr349$i = $rsize$4$lcssa$i >>> $add348$i | 0;
             $and350$i = $shr349$i & 1 | 0;
             $add351$i = $and350$i | $shl347$i | 0;
             $I316$0$i = $add351$i;
            }
           }
           $arrayidx355$i = 480 + ($I316$0$i << 2 | 0) | 0;
           $index356$i = $add$ptr$i$161 + 28 | 0;
           HEAP32[$index356$i >> 2] = $I316$0$i;
           $child357$i = $add$ptr$i$161 + 16 | 0;
           $arrayidx358$i = $child357$i + 4 | 0;
           HEAP32[$arrayidx358$i >> 2] = 0;
           HEAP32[$child357$i >> 2] = 0;
           $86 = HEAPU32[180 >> 2] | 0;
           $shl362$i = 1 << $I316$0$i | 0;
           $and363$i = $86 & $shl362$i | 0;
           $tobool364$i = ($and363$i | 0) == (0 | 0);
           if ($tobool364$i) block99 : {
            $or368$i = $86 | $shl362$i | 0;
            HEAP32[180 >> 2] = $or368$i;
            HEAP32[$arrayidx355$i >> 2] = $add$ptr$i$161;
            $parent369$i = $add$ptr$i$161 + 24 | 0;
            HEAP32[$parent369$i >> 2] = $arrayidx355$i;
            $bk370$i = $add$ptr$i$161 + 12 | 0;
            HEAP32[$bk370$i >> 2] = $add$ptr$i$161;
            $fd371$i = $add$ptr$i$161 + 8 | 0;
            HEAP32[$fd371$i >> 2] = $add$ptr$i$161;
            break do_once$19;
           }
           $87 = HEAPU32[$arrayidx355$i >> 2] | 0;
           $cmp374$i = ($I316$0$i | 0) == (31 | 0);
           $shr378$i = $I316$0$i >>> 1 | 0;
           $sub381$i = 25 - $shr378$i | 0;
           if ($cmp374$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub381$i;
           $cond383$i = wasm2asm_i32$1;
           $shl384$i = $rsize$4$lcssa$i << $cond383$i | 0;
           $K373$0$i = $shl384$i;
           $T$0$i = $87;
           while_out$20 : do block100 : {
            $head386$i = $T$0$i + 4 | 0;
            $88 = HEAPU32[$head386$i >> 2] | 0;
            $and387$i = $88 & 4294967288 | 0;
            $cmp388$i = ($and387$i | 0) == ($rsize$4$lcssa$i | 0);
            if ($cmp388$i) block101 : {
             $T$0$i$lcssa = $T$0$i;
             label = 148;
             break while_out$20;
            }
            $shr391$i = $K373$0$i >>> 31 | 0;
            $arrayidx394$i = ($T$0$i + 16 | 0) + ($shr391$i << 2 | 0) | 0;
            $shl395$i = $K373$0$i << 1 | 0;
            $89 = HEAPU32[$arrayidx394$i >> 2] | 0;
            $cmp396$i = ($89 | 0) == (0 | 0);
            if ($cmp396$i) block102 : {
             $T$0$i$lcssa293 = $T$0$i;
             $arrayidx394$i$lcssa = $arrayidx394$i;
             label = 145;
             break while_out$20;
            } else block103 : {
             $K373$0$i = $shl395$i;
             $T$0$i = $89;
            }
            continue while_out$20;
           } while (0);
           if ((label | 0) == (145 | 0)) block104 : {
            $90 = HEAPU32[192 >> 2] | 0;
            $cmp401$i = ($arrayidx394$i$lcssa >>> 0 | 0) >>> 0 < ($90 >>> 0 | 0) >>> 0;
            if ($cmp401$i) _abort(); else block105 : {
             HEAP32[$arrayidx394$i$lcssa >> 2] = $add$ptr$i$161;
             $parent406$i = $add$ptr$i$161 + 24 | 0;
             HEAP32[$parent406$i >> 2] = $T$0$i$lcssa293;
             $bk407$i = $add$ptr$i$161 + 12 | 0;
             HEAP32[$bk407$i >> 2] = $add$ptr$i$161;
             $fd408$i = $add$ptr$i$161 + 8 | 0;
             HEAP32[$fd408$i >> 2] = $add$ptr$i$161;
             break do_once$19;
            }
           } else if ((label | 0) == (148 | 0)) block106 : {
            $fd416$i = $T$0$i$lcssa + 8 | 0;
            $91 = HEAPU32[$fd416$i >> 2] | 0;
            $92 = HEAPU32[192 >> 2] | 0;
            $cmp422$i = ($91 >>> 0 | 0) >>> 0 >= ($92 >>> 0 | 0) >>> 0;
            $not$cmp418$i = ($T$0$i$lcssa >>> 0 | 0) >>> 0 >= ($92 >>> 0 | 0) >>> 0;
            $93 = $cmp422$i & $not$cmp418$i | 0;
            if ($93) block107 : {
             $bk429$i = $91 + 12 | 0;
             HEAP32[$bk429$i >> 2] = $add$ptr$i$161;
             HEAP32[$fd416$i >> 2] = $add$ptr$i$161;
             $fd431$i = $add$ptr$i$161 + 8 | 0;
             HEAP32[$fd431$i >> 2] = $91;
             $bk432$i = $add$ptr$i$161 + 12 | 0;
             HEAP32[$bk432$i >> 2] = $T$0$i$lcssa;
             $parent433$i = $add$ptr$i$161 + 24 | 0;
             HEAP32[$parent433$i >> 2] = 0;
             break do_once$19;
            } else _abort();
           }
          }
         }
         $add$ptr441$i = $v$4$lcssa$i + 8 | 0;
         $retval$0 = $add$ptr441$i;
         wasm2asm_i32$0 = $retval$0;
         break topmost;
        } else $nb$0 = $and145;
       }
      }
     }
    }
   }
   $94 = HEAPU32[184 >> 2] | 0;
   $cmp156 = ($94 >>> 0 | 0) >>> 0 < ($nb$0 >>> 0 | 0) >>> 0;
   if (($cmp156 | 0) == (0 | 0)) block108 : {
    $sub160 = $94 - $nb$0 | 0;
    $95 = HEAPU32[196 >> 2] | 0;
    $cmp162 = ($sub160 >>> 0 | 0) >>> 0 > 15 >>> 0;
    if ($cmp162) block109 : {
     $add$ptr166 = $95 + $nb$0 | 0;
     HEAP32[196 >> 2] = $add$ptr166;
     HEAP32[184 >> 2] = $sub160;
     $or167 = $sub160 | 1 | 0;
     $head168 = $add$ptr166 + 4 | 0;
     HEAP32[$head168 >> 2] = $or167;
     $add$ptr169 = $add$ptr166 + $sub160 | 0;
     HEAP32[$add$ptr169 >> 2] = $sub160;
     $or172 = $nb$0 | 3 | 0;
     $head173 = $95 + 4 | 0;
     HEAP32[$head173 >> 2] = $or172;
    } else block110 : {
     HEAP32[184 >> 2] = 0;
     HEAP32[196 >> 2] = 0;
     $or176 = $94 | 3 | 0;
     $head177 = $95 + 4 | 0;
     HEAP32[$head177 >> 2] = $or176;
     $add$ptr178 = $95 + $94 | 0;
     $head179 = $add$ptr178 + 4 | 0;
     $96 = HEAPU32[$head179 >> 2] | 0;
     $or180 = $96 | 1 | 0;
     HEAP32[$head179 >> 2] = $or180;
    }
    $add$ptr182 = $95 + 8 | 0;
    $retval$0 = $add$ptr182;
    wasm2asm_i32$0 = $retval$0;
    break topmost;
   }
   $97 = HEAPU32[188 >> 2] | 0;
   $cmp186 = ($97 >>> 0 | 0) >>> 0 > ($nb$0 >>> 0 | 0) >>> 0;
   if ($cmp186) block111 : {
    $sub190 = $97 - $nb$0 | 0;
    HEAP32[188 >> 2] = $sub190;
    $98 = HEAPU32[200 >> 2] | 0;
    $add$ptr193 = $98 + $nb$0 | 0;
    HEAP32[200 >> 2] = $add$ptr193;
    $or194 = $sub190 | 1 | 0;
    $head195 = $add$ptr193 + 4 | 0;
    HEAP32[$head195 >> 2] = $or194;
    $or197 = $nb$0 | 3 | 0;
    $head198 = $98 + 4 | 0;
    HEAP32[$head198 >> 2] = $or197;
    $add$ptr199 = $98 + 8 | 0;
    $retval$0 = $add$ptr199;
    wasm2asm_i32$0 = $retval$0;
    break topmost;
   }
   $99 = HEAPU32[648 >> 2] | 0;
   $cmp$i$179 = ($99 | 0) == (0 | 0);
   do_once$22 : {
    if ($cmp$i$179) block112 : {
     $call$i$i = _sysconf(30 | 0) | 0;
     $sub$i$i = $call$i$i + 4294967295 | 0;
     $and$i$i = $sub$i$i & $call$i$i | 0;
     $cmp1$i$i = ($and$i$i | 0) == (0 | 0);
     if ($cmp1$i$i) block113 : {
      HEAP32[656 >> 2] = $call$i$i;
      HEAP32[652 >> 2] = $call$i$i;
      HEAP32[660 >> 2] = 4294967295;
      HEAP32[664 >> 2] = 4294967295;
      HEAP32[668 >> 2] = 0;
      HEAP32[620 >> 2] = 0;
      $call6$i$i = _time(0 | 0) | 0;
      $xor$i$i = $call6$i$i & 4294967280 | 0;
      $and7$i$i = $xor$i$i ^ 1431655768 | 0;
      HEAP32[648 >> 2] = $and7$i$i;
      break do_once$22;
     } else _abort();
    }
   }
   $add$i$180 = $nb$0 + 48 | 0;
   $100 = HEAPU32[656 >> 2] | 0;
   $sub$i$181 = $nb$0 + 47 | 0;
   $add9$i = $100 + $sub$i$181 | 0;
   $neg$i$182 = 0 - $100 | 0;
   $and11$i = $add9$i & $neg$i$182 | 0;
   $cmp12$i = ($and11$i >>> 0 | 0) >>> 0 > ($nb$0 >>> 0 | 0) >>> 0;
   if (($cmp12$i | 0) == (0 | 0)) block114 : {
    $retval$0 = 0;
    wasm2asm_i32$0 = $retval$0;
    break topmost;
   }
   $101 = HEAPU32[616 >> 2] | 0;
   $cmp15$i = ($101 | 0) == (0 | 0);
   if (($cmp15$i | 0) == (0 | 0)) block115 : {
    $102 = HEAPU32[608 >> 2] | 0;
    $add17$i$183 = $102 + $and11$i | 0;
    $cmp19$i = ($add17$i$183 >>> 0 | 0) >>> 0 <= ($102 >>> 0 | 0) >>> 0;
    $cmp21$i = ($add17$i$183 >>> 0 | 0) >>> 0 > ($101 >>> 0 | 0) >>> 0;
    $or$cond1$i$184 = $cmp19$i | $cmp21$i | 0;
    if ($or$cond1$i$184) block116 : {
     $retval$0 = 0;
     wasm2asm_i32$0 = $retval$0;
     break topmost;
    }
   }
   $103 = HEAPU32[620 >> 2] | 0;
   $and29$i = $103 & 4 | 0;
   $tobool30$i = ($and29$i | 0) == (0 | 0);
   label$break$L257 : {
    if ($tobool30$i) block117 : {
     $104 = HEAPU32[200 >> 2] | 0;
     $cmp32$i$185 = ($104 | 0) == (0 | 0);
     label$break$L259 : {
      if ($cmp32$i$185) label = 173; else block118 : {
       $sp$0$i$i = 624;
       while_out$23 : do block119 : {
        $105 = HEAPU32[$sp$0$i$i >> 2] | 0;
        $cmp$i$9$i = ($105 >>> 0 | 0) >>> 0 > ($104 >>> 0 | 0) >>> 0;
        if (($cmp$i$9$i | 0) == (0 | 0)) block120 : {
         $size$i$i = $sp$0$i$i + 4 | 0;
         $106 = HEAPU32[$size$i$i >> 2] | 0;
         $add$ptr$i$i = $105 + $106 | 0;
         $cmp2$i$i = ($add$ptr$i$i >>> 0 | 0) >>> 0 > ($104 >>> 0 | 0) >>> 0;
         if ($cmp2$i$i) block121 : {
          $base$i$i$lcssa = $sp$0$i$i;
          $size$i$i$lcssa = $size$i$i;
          break while_out$23;
         }
        }
        $next$i$i = $sp$0$i$i + 8 | 0;
        $107 = HEAPU32[$next$i$i >> 2] | 0;
        $cmp3$i$i = ($107 | 0) == (0 | 0);
        if ($cmp3$i$i) block122 : {
         label = 173;
         break label$break$L259;
        } else $sp$0$i$i = $107;
        continue while_out$23;
       } while (0);
       $112 = HEAPU32[188 >> 2] | 0;
       $add77$i = $add9$i - $112 | 0;
       $and80$i = $add77$i & $neg$i$182 | 0;
       $cmp81$i$191 = ($and80$i >>> 0 | 0) >>> 0 < 2147483647 >>> 0;
       if ($cmp81$i$191) block123 : {
        $call83$i = _sbrk($and80$i | 0) | 0;
        $113 = HEAPU32[$base$i$i$lcssa >> 2] | 0;
        $114 = HEAPU32[$size$i$i$lcssa >> 2] | 0;
        $add$ptr$i$193 = $113 + $114 | 0;
        $cmp85$i = ($call83$i | 0) == ($add$ptr$i$193 | 0);
        if ($cmp85$i) block124 : {
         $cmp89$i = ($call83$i | 0) == (4294967295 | 0);
         if (($cmp89$i | 0) == (0 | 0)) block125 : {
          $tbase$796$i = $call83$i;
          $tsize$795$i = $and80$i;
          label = 193;
          break label$break$L257;
         }
        } else block126 : {
         $br$2$ph$i = $call83$i;
         $ssize$2$ph$i = $and80$i;
         label = 183;
        }
       }
      }
     }
     do_once$25 : {
      if ((label | 0) == (173 | 0)) block127 : {
       $call37$i = _sbrk(0 | 0) | 0;
       $cmp38$i = ($call37$i | 0) == (4294967295 | 0);
       if (($cmp38$i | 0) == (0 | 0)) block128 : {
        $108 = $call37$i;
        $109 = HEAPU32[652 >> 2] | 0;
        $sub41$i = $109 + 4294967295 | 0;
        $and42$i = $sub41$i & $108 | 0;
        $cmp43$i = ($and42$i | 0) == (0 | 0);
        if ($cmp43$i) $ssize$0$i = $and11$i; else block129 : {
         $add46$i = $sub41$i + $108 | 0;
         $neg48$i = 0 - $109 | 0;
         $and49$i = $add46$i & $neg48$i | 0;
         $sub50$i = $and11$i - $108 | 0;
         $add51$i = $sub50$i + $and49$i | 0;
         $ssize$0$i = $add51$i;
        }
        $110 = HEAPU32[608 >> 2] | 0;
        $add54$i = $110 + $ssize$0$i | 0;
        $cmp55$i$187 = ($ssize$0$i >>> 0 | 0) >>> 0 > ($nb$0 >>> 0 | 0) >>> 0;
        $cmp57$i$188 = ($ssize$0$i >>> 0 | 0) >>> 0 < 2147483647 >>> 0;
        $or$cond$i$189 = $cmp55$i$187 & $cmp57$i$188 | 0;
        if ($or$cond$i$189) block130 : {
         $111 = HEAPU32[616 >> 2] | 0;
         $cmp60$i = ($111 | 0) == (0 | 0);
         if (($cmp60$i | 0) == (0 | 0)) block131 : {
          $cmp63$i = ($add54$i >>> 0 | 0) >>> 0 <= ($110 >>> 0 | 0) >>> 0;
          $cmp66$i$190 = ($add54$i >>> 0 | 0) >>> 0 > ($111 >>> 0 | 0) >>> 0;
          $or$cond2$i = $cmp63$i | $cmp66$i$190 | 0;
          if ($or$cond2$i) break do_once$25;
         }
         $call68$i = _sbrk($ssize$0$i | 0) | 0;
         $cmp69$i = ($call68$i | 0) == ($call37$i | 0);
         if ($cmp69$i) block132 : {
          $tbase$796$i = $call37$i;
          $tsize$795$i = $ssize$0$i;
          label = 193;
          break label$break$L257;
         } else block133 : {
          $br$2$ph$i = $call68$i;
          $ssize$2$ph$i = $ssize$0$i;
          label = 183;
         }
        }
       }
      }
     }
     label$break$L279 : {
      if ((label | 0) == (183 | 0)) block134 : {
       $sub112$i = 0 - $ssize$2$ph$i | 0;
       $cmp91$i = ($br$2$ph$i | 0) != (4294967295 | 0);
       $cmp93$i = ($ssize$2$ph$i >>> 0 | 0) >>> 0 < 2147483647 >>> 0;
       $or$cond5$i = $cmp93$i & $cmp91$i | 0;
       $cmp96$i = ($add$i$180 >>> 0 | 0) >>> 0 > ($ssize$2$ph$i >>> 0 | 0) >>> 0;
       $or$cond3$i = $cmp96$i & $or$cond5$i | 0;
       do_once$26 : {
        if ($or$cond3$i) block135 : {
         $115 = HEAPU32[656 >> 2] | 0;
         $sub99$i = $sub$i$181 - $ssize$2$ph$i | 0;
         $add101$i = $sub99$i + $115 | 0;
         $neg103$i = 0 - $115 | 0;
         $and104$i = $add101$i & $neg103$i | 0;
         $cmp105$i = ($and104$i >>> 0 | 0) >>> 0 < 2147483647 >>> 0;
         if ($cmp105$i) block136 : {
          $call107$i = _sbrk($and104$i | 0) | 0;
          $cmp108$i = ($call107$i | 0) == (4294967295 | 0);
          if ($cmp108$i) block137 : {
           _sbrk($sub112$i | 0) | 0;
           break label$break$L279;
          } else block138 : {
           $add110$i = $and104$i + $ssize$2$ph$i | 0;
           $ssize$5$i = $add110$i;
           break do_once$26;
          }
         } else $ssize$5$i = $ssize$2$ph$i;
        } else $ssize$5$i = $ssize$2$ph$i;
       }
       $cmp118$i = ($br$2$ph$i | 0) == (4294967295 | 0);
       if (($cmp118$i | 0) == (0 | 0)) block139 : {
        $tbase$796$i = $br$2$ph$i;
        $tsize$795$i = $ssize$5$i;
        label = 193;
        break label$break$L257;
       }
      }
     }
     $116 = HEAPU32[620 >> 2] | 0;
     $or$i$195 = $116 | 4 | 0;
     HEAP32[620 >> 2] = $or$i$195;
     label = 190;
    } else label = 190;
   }
   if ((label | 0) == (190 | 0)) block140 : {
    $cmp127$i = ($and11$i >>> 0 | 0) >>> 0 < 2147483647 >>> 0;
    if ($cmp127$i) block141 : {
     $call131$i = _sbrk($and11$i | 0) | 0;
     $call132$i = _sbrk(0 | 0) | 0;
     $cmp133$i$196 = ($call131$i | 0) != (4294967295 | 0);
     $cmp135$i = ($call132$i | 0) != (4294967295 | 0);
     $or$cond4$i = $cmp133$i$196 & $cmp135$i | 0;
     $cmp137$i$197 = ($call131$i >>> 0 | 0) >>> 0 < ($call132$i >>> 0 | 0) >>> 0;
     $or$cond7$i = $cmp137$i$197 & $or$cond4$i | 0;
     if ($or$cond7$i) block142 : {
      $sub$ptr$lhs$cast$i = $call132$i;
      $sub$ptr$rhs$cast$i = $call131$i;
      $sub$ptr$sub$i = $sub$ptr$lhs$cast$i - $sub$ptr$rhs$cast$i | 0;
      $add140$i = $nb$0 + 40 | 0;
      $cmp141$not$i = ($sub$ptr$sub$i >>> 0 | 0) >>> 0 > ($add140$i >>> 0 | 0) >>> 0;
      if ($cmp141$not$i) block143 : {
       $tbase$796$i = $call131$i;
       $tsize$795$i = $sub$ptr$sub$i;
       label = 193;
      }
     }
    }
   }
   if ((label | 0) == (193 | 0)) block144 : {
    $117 = HEAPU32[608 >> 2] | 0;
    $add150$i = $117 + $tsize$795$i | 0;
    HEAP32[608 >> 2] = $add150$i;
    $118 = HEAPU32[612 >> 2] | 0;
    $cmp151$i = ($add150$i >>> 0 | 0) >>> 0 > ($118 >>> 0 | 0) >>> 0;
    if ($cmp151$i) HEAP32[612 >> 2] = $add150$i;
    $119 = HEAPU32[200 >> 2] | 0;
    $cmp157$i = ($119 | 0) == (0 | 0);
    do_once$27 : {
     if ($cmp157$i) block145 : {
      $120 = HEAPU32[192 >> 2] | 0;
      $cmp159$i$199 = ($120 | 0) == (0 | 0);
      $cmp162$i$200 = ($tbase$796$i >>> 0 | 0) >>> 0 < ($120 >>> 0 | 0) >>> 0;
      $or$cond8$i = $cmp159$i$199 | $cmp162$i$200 | 0;
      if ($or$cond8$i) HEAP32[192 >> 2] = $tbase$796$i;
      HEAP32[624 >> 2] = $tbase$796$i;
      HEAP32[628 >> 2] = $tsize$795$i;
      HEAP32[636 >> 2] = 0;
      $121 = HEAPU32[648 >> 2] | 0;
      HEAP32[212 >> 2] = $121;
      HEAP32[208 >> 2] = 4294967295;
      $i$01$i$i = 0;
      while_out$28 : do block146 : {
       $shl$i$i = $i$01$i$i << 1 | 0;
       $arrayidx$i$i = 216 + ($shl$i$i << 2 | 0) | 0;
       $122 = $arrayidx$i$i + 12 | 0;
       HEAP32[$122 >> 2] = $arrayidx$i$i;
       $123 = $arrayidx$i$i + 8 | 0;
       HEAP32[$123 >> 2] = $arrayidx$i$i;
       $inc$i$i = $i$01$i$i + 1 | 0;
       $exitcond$i$i = ($inc$i$i | 0) == (32 | 0);
       if ($exitcond$i$i) break while_out$28; else $i$01$i$i = $inc$i$i;
       continue while_out$28;
      } while (0);
      $sub172$i = $tsize$795$i + 4294967256 | 0;
      $add$ptr$i$11$i = $tbase$796$i + 8 | 0;
      $124 = $add$ptr$i$11$i;
      $and$i$12$i = $124 & 7 | 0;
      $cmp$i$13$i = ($and$i$12$i | 0) == (0 | 0);
      $125 = 0 - $124 | 0;
      $and3$i$i = $125 & 7 | 0;
      if ($cmp$i$13$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and3$i$i;
      $cond$i$i = wasm2asm_i32$1;
      $add$ptr4$i$i = $tbase$796$i + $cond$i$i | 0;
      $sub5$i$i = $sub172$i - $cond$i$i | 0;
      HEAP32[200 >> 2] = $add$ptr4$i$i;
      HEAP32[188 >> 2] = $sub5$i$i;
      $or$i$i = $sub5$i$i | 1 | 0;
      $head$i$i = $add$ptr4$i$i + 4 | 0;
      HEAP32[$head$i$i >> 2] = $or$i$i;
      $add$ptr6$i$i = $add$ptr4$i$i + $sub5$i$i | 0;
      $head7$i$i = $add$ptr6$i$i + 4 | 0;
      HEAP32[$head7$i$i >> 2] = 40;
      $126 = HEAPU32[664 >> 2] | 0;
      HEAP32[204 >> 2] = $126;
     } else block147 : {
      $sp$0108$i = 624;
      while_out$30 : do block148 : {
       $127 = HEAPU32[$sp$0108$i >> 2] | 0;
       $size188$i = $sp$0108$i + 4 | 0;
       $128 = HEAPU32[$size188$i >> 2] | 0;
       $add$ptr189$i = $127 + $128 | 0;
       $cmp190$i = ($tbase$796$i | 0) == ($add$ptr189$i | 0);
       if ($cmp190$i) block149 : {
        $$lcssa = $127;
        $$lcssa290 = $128;
        $size188$i$lcssa = $size188$i;
        $sp$0108$i$lcssa = $sp$0108$i;
        label = 203;
        break while_out$30;
       }
       $next$i = $sp$0108$i + 8 | 0;
       $129 = HEAPU32[$next$i >> 2] | 0;
       $cmp186$i = ($129 | 0) == (0 | 0);
       if ($cmp186$i) break while_out$30; else $sp$0108$i = $129;
       continue while_out$30;
      } while (0);
      if ((label | 0) == (203 | 0)) block150 : {
       $sflags193$i = $sp$0108$i$lcssa + 12 | 0;
       $130 = HEAPU32[$sflags193$i >> 2] | 0;
       $and194$i$204 = $130 & 8 | 0;
       $tobool195$i = ($and194$i$204 | 0) == (0 | 0);
       if ($tobool195$i) block151 : {
        $cmp203$i = ($119 >>> 0 | 0) >>> 0 >= ($$lcssa >>> 0 | 0) >>> 0;
        $cmp209$i = ($119 >>> 0 | 0) >>> 0 < ($tbase$796$i >>> 0 | 0) >>> 0;
        $or$cond98$i = $cmp209$i & $cmp203$i | 0;
        if ($or$cond98$i) block152 : {
         $add212$i = $$lcssa290 + $tsize$795$i | 0;
         HEAP32[$size188$i$lcssa >> 2] = $add212$i;
         $131 = HEAPU32[188 >> 2] | 0;
         $add$ptr$i$21$i = $119 + 8 | 0;
         $132 = $add$ptr$i$21$i;
         $and$i$22$i = $132 & 7 | 0;
         $cmp$i$23$i = ($and$i$22$i | 0) == (0 | 0);
         $133 = 0 - $132 | 0;
         $and3$i$24$i = $133 & 7 | 0;
         if ($cmp$i$23$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and3$i$24$i;
         $cond$i$25$i = wasm2asm_i32$1;
         $add$ptr4$i$26$i = $119 + $cond$i$25$i | 0;
         $add215$i = $tsize$795$i - $cond$i$25$i | 0;
         $sub5$i$27$i = $add215$i + $131 | 0;
         HEAP32[200 >> 2] = $add$ptr4$i$26$i;
         HEAP32[188 >> 2] = $sub5$i$27$i;
         $or$i$28$i = $sub5$i$27$i | 1 | 0;
         $head$i$29$i = $add$ptr4$i$26$i + 4 | 0;
         HEAP32[$head$i$29$i >> 2] = $or$i$28$i;
         $add$ptr6$i$30$i = $add$ptr4$i$26$i + $sub5$i$27$i | 0;
         $head7$i$31$i = $add$ptr6$i$30$i + 4 | 0;
         HEAP32[$head7$i$31$i >> 2] = 40;
         $134 = HEAPU32[664 >> 2] | 0;
         HEAP32[204 >> 2] = $134;
         break do_once$27;
        }
       }
      }
      $135 = HEAPU32[192 >> 2] | 0;
      $cmp218$i = ($tbase$796$i >>> 0 | 0) >>> 0 < ($135 >>> 0 | 0) >>> 0;
      if ($cmp218$i) block153 : {
       HEAP32[192 >> 2] = $tbase$796$i;
       $150 = $tbase$796$i;
      } else $150 = $135;
      $add$ptr227$i = $tbase$796$i + $tsize$795$i | 0;
      $sp$1107$i = 624;
      while_out$32 : do block154 : {
       $136 = HEAPU32[$sp$1107$i >> 2] | 0;
       $cmp228$i = ($136 | 0) == ($add$ptr227$i | 0);
       if ($cmp228$i) block155 : {
        $base226$i$lcssa = $sp$1107$i;
        $sp$1107$i$lcssa = $sp$1107$i;
        label = 211;
        break while_out$32;
       }
       $next231$i = $sp$1107$i + 8 | 0;
       $137 = HEAPU32[$next231$i >> 2] | 0;
       $cmp224$i = ($137 | 0) == (0 | 0);
       if ($cmp224$i) block156 : {
        $sp$0$i$i$i = 624;
        break while_out$32;
       } else $sp$1107$i = $137;
       continue while_out$32;
      } while (0);
      if ((label | 0) == (211 | 0)) block157 : {
       $sflags235$i = $sp$1107$i$lcssa + 12 | 0;
       $138 = HEAPU32[$sflags235$i >> 2] | 0;
       $and236$i = $138 & 8 | 0;
       $tobool237$i = ($and236$i | 0) == (0 | 0);
       if ($tobool237$i) block158 : {
        HEAP32[$base226$i$lcssa >> 2] = $tbase$796$i;
        $size245$i = $sp$1107$i$lcssa + 4 | 0;
        $139 = HEAPU32[$size245$i >> 2] | 0;
        $add246$i = $139 + $tsize$795$i | 0;
        HEAP32[$size245$i >> 2] = $add246$i;
        $add$ptr$i$32$i = $tbase$796$i + 8 | 0;
        $140 = $add$ptr$i$32$i;
        $and$i$33$i = $140 & 7 | 0;
        $cmp$i$34$i = ($and$i$33$i | 0) == (0 | 0);
        $141 = 0 - $140 | 0;
        $and3$i$35$i = $141 & 7 | 0;
        if ($cmp$i$34$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and3$i$35$i;
        $cond$i$36$i = wasm2asm_i32$1;
        $add$ptr4$i$37$i = $tbase$796$i + $cond$i$36$i | 0;
        $add$ptr5$i$i = $add$ptr227$i + 8 | 0;
        $142 = $add$ptr5$i$i;
        $and6$i$38$i = $142 & 7 | 0;
        $cmp7$i$i = ($and6$i$38$i | 0) == (0 | 0);
        $143 = 0 - $142 | 0;
        $and13$i$i = $143 & 7 | 0;
        if ($cmp7$i$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and13$i$i;
        $cond15$i$i = wasm2asm_i32$1;
        $add$ptr16$i$i = $add$ptr227$i + $cond15$i$i | 0;
        $sub$ptr$lhs$cast$i$39$i = $add$ptr16$i$i;
        $sub$ptr$rhs$cast$i$40$i = $add$ptr4$i$37$i;
        $sub$ptr$sub$i$41$i = $sub$ptr$lhs$cast$i$39$i - $sub$ptr$rhs$cast$i$40$i | 0;
        $add$ptr17$i$i = $add$ptr4$i$37$i + $nb$0 | 0;
        $sub18$i$i = $sub$ptr$sub$i$41$i - $nb$0 | 0;
        $or19$i$i = $nb$0 | 3 | 0;
        $head$i$42$i = $add$ptr4$i$37$i + 4 | 0;
        HEAP32[$head$i$42$i >> 2] = $or19$i$i;
        $cmp20$i$i = ($add$ptr16$i$i | 0) == ($119 | 0);
        do_once$34 : {
         if ($cmp20$i$i) block159 : {
          $144 = HEAPU32[188 >> 2] | 0;
          $add$i$i = $144 + $sub18$i$i | 0;
          HEAP32[188 >> 2] = $add$i$i;
          HEAP32[200 >> 2] = $add$ptr17$i$i;
          $or22$i$i = $add$i$i | 1 | 0;
          $head23$i$i = $add$ptr17$i$i + 4 | 0;
          HEAP32[$head23$i$i >> 2] = $or22$i$i;
         } else block160 : {
          $145 = HEAPU32[196 >> 2] | 0;
          $cmp24$i$i = ($add$ptr16$i$i | 0) == ($145 | 0);
          if ($cmp24$i$i) block161 : {
           $146 = HEAPU32[184 >> 2] | 0;
           $add26$i$i = $146 + $sub18$i$i | 0;
           HEAP32[184 >> 2] = $add26$i$i;
           HEAP32[196 >> 2] = $add$ptr17$i$i;
           $or28$i$i = $add26$i$i | 1 | 0;
           $head29$i$i = $add$ptr17$i$i + 4 | 0;
           HEAP32[$head29$i$i >> 2] = $or28$i$i;
           $add$ptr30$i$i = $add$ptr17$i$i + $add26$i$i | 0;
           HEAP32[$add$ptr30$i$i >> 2] = $add26$i$i;
           break do_once$34;
          }
          $head32$i$i = $add$ptr16$i$i + 4 | 0;
          $147 = HEAPU32[$head32$i$i >> 2] | 0;
          $and33$i$i = $147 & 3 | 0;
          $cmp34$i$i = ($and33$i$i | 0) == (1 | 0);
          if ($cmp34$i$i) block162 : {
           $and37$i$i = $147 & 4294967288 | 0;
           $shr$i$45$i = $147 >>> 3 | 0;
           $cmp38$i$i = ($147 >>> 0 | 0) >>> 0 < 256 >>> 0;
           label$break$L331 : {
            if ($cmp38$i$i) block163 : {
             $fd$i$i = $add$ptr16$i$i + 8 | 0;
             $148 = HEAPU32[$fd$i$i >> 2] | 0;
             $bk$i$46$i = $add$ptr16$i$i + 12 | 0;
             $149 = HEAPU32[$bk$i$46$i >> 2] | 0;
             $shl$i$47$i = $shr$i$45$i << 1 | 0;
             $arrayidx$i$48$i = 216 + ($shl$i$47$i << 2 | 0) | 0;
             $cmp41$i$i = ($148 | 0) == ($arrayidx$i$48$i | 0);
             do_once$35 : {
              if (($cmp41$i$i | 0) == (0 | 0)) block164 : {
               $cmp42$i$i = ($148 >>> 0 | 0) >>> 0 < ($150 >>> 0 | 0) >>> 0;
               if ($cmp42$i$i) _abort();
               $bk43$i$i = $148 + 12 | 0;
               $151 = HEAPU32[$bk43$i$i >> 2] | 0;
               $cmp44$i$i = ($151 | 0) == ($add$ptr16$i$i | 0);
               if ($cmp44$i$i) break do_once$35;
               _abort();
              }
             }
             $cmp46$i$49$i = ($149 | 0) == ($148 | 0);
             if ($cmp46$i$49$i) block165 : {
              $shl48$i$i = 1 << $shr$i$45$i | 0;
              $neg$i$i = $shl48$i$i ^ 4294967295 | 0;
              $152 = HEAPU32[176 >> 2] | 0;
              $and49$i$i = $152 & $neg$i$i | 0;
              HEAP32[176 >> 2] = $and49$i$i;
              break label$break$L331;
             }
             $cmp54$i$i = ($149 | 0) == ($arrayidx$i$48$i | 0);
             do_once$36 : {
              if ($cmp54$i$i) block166 : {
               $$pre5$i$i = $149 + 8 | 0;
               $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
              } else block167 : {
               $cmp57$i$i = ($149 >>> 0 | 0) >>> 0 < ($150 >>> 0 | 0) >>> 0;
               if ($cmp57$i$i) _abort();
               $fd59$i$i = $149 + 8 | 0;
               $153 = HEAPU32[$fd59$i$i >> 2] | 0;
               $cmp60$i$i = ($153 | 0) == ($add$ptr16$i$i | 0);
               if ($cmp60$i$i) block168 : {
                $fd68$pre$phi$i$iZ2D = $fd59$i$i;
                break do_once$36;
               }
               _abort();
              }
             }
             $bk67$i$i = $148 + 12 | 0;
             HEAP32[$bk67$i$i >> 2] = $149;
             HEAP32[$fd68$pre$phi$i$iZ2D >> 2] = $148;
            } else block169 : {
             $parent$i$51$i = $add$ptr16$i$i + 24 | 0;
             $154 = HEAPU32[$parent$i$51$i >> 2] | 0;
             $bk74$i$i = $add$ptr16$i$i + 12 | 0;
             $155 = HEAPU32[$bk74$i$i >> 2] | 0;
             $cmp75$i$i = ($155 | 0) == ($add$ptr16$i$i | 0);
             do_once$37 : {
              if ($cmp75$i$i) block170 : {
               $child$i$i = $add$ptr16$i$i + 16 | 0;
               $arrayidx96$i$i = $child$i$i + 4 | 0;
               $159 = HEAPU32[$arrayidx96$i$i >> 2] | 0;
               $cmp97$i$i = ($159 | 0) == (0 | 0);
               if ($cmp97$i$i) block171 : {
                $160 = HEAPU32[$child$i$i >> 2] | 0;
                $cmp100$i$i = ($160 | 0) == (0 | 0);
                if ($cmp100$i$i) block172 : {
                 $R$3$i$i = 0;
                 break do_once$37;
                } else block173 : {
                 $R$1$i$i = $160;
                 $RP$1$i$i = $child$i$i;
                }
               } else block174 : {
                $R$1$i$i = $159;
                $RP$1$i$i = $arrayidx96$i$i;
               }
               while_out$38 : do block175 : {
                $arrayidx103$i$i = $R$1$i$i + 20 | 0;
                $161 = HEAPU32[$arrayidx103$i$i >> 2] | 0;
                $cmp104$i$i = ($161 | 0) == (0 | 0);
                if (($cmp104$i$i | 0) == (0 | 0)) block176 : {
                 $R$1$i$i = $161;
                 $RP$1$i$i = $arrayidx103$i$i;
                 continue while_out$38;
                }
                $arrayidx107$i$i = $R$1$i$i + 16 | 0;
                $162 = HEAPU32[$arrayidx107$i$i >> 2] | 0;
                $cmp108$i$i = ($162 | 0) == (0 | 0);
                if ($cmp108$i$i) block177 : {
                 $R$1$i$i$lcssa = $R$1$i$i;
                 $RP$1$i$i$lcssa = $RP$1$i$i;
                 break while_out$38;
                } else block178 : {
                 $R$1$i$i = $162;
                 $RP$1$i$i = $arrayidx107$i$i;
                }
                continue while_out$38;
               } while (0);
               $cmp112$i$i = ($RP$1$i$i$lcssa >>> 0 | 0) >>> 0 < ($150 >>> 0 | 0) >>> 0;
               if ($cmp112$i$i) _abort(); else block179 : {
                HEAP32[$RP$1$i$i$lcssa >> 2] = 0;
                $R$3$i$i = $R$1$i$i$lcssa;
                break do_once$37;
               }
              } else block180 : {
               $fd78$i$i = $add$ptr16$i$i + 8 | 0;
               $156 = HEAPU32[$fd78$i$i >> 2] | 0;
               $cmp81$i$i = ($156 >>> 0 | 0) >>> 0 < ($150 >>> 0 | 0) >>> 0;
               if ($cmp81$i$i) _abort();
               $bk82$i$i = $156 + 12 | 0;
               $157 = HEAPU32[$bk82$i$i >> 2] | 0;
               $cmp83$i$i = ($157 | 0) == ($add$ptr16$i$i | 0);
               if (($cmp83$i$i | 0) == (0 | 0)) _abort();
               $fd85$i$i = $155 + 8 | 0;
               $158 = HEAPU32[$fd85$i$i >> 2] | 0;
               $cmp86$i$i = ($158 | 0) == ($add$ptr16$i$i | 0);
               if ($cmp86$i$i) block181 : {
                HEAP32[$bk82$i$i >> 2] = $155;
                HEAP32[$fd85$i$i >> 2] = $156;
                $R$3$i$i = $155;
                break do_once$37;
               } else _abort();
              }
             }
             $cmp120$i$53$i = ($154 | 0) == (0 | 0);
             if ($cmp120$i$53$i) break label$break$L331;
             $index$i$54$i = $add$ptr16$i$i + 28 | 0;
             $163 = HEAPU32[$index$i$54$i >> 2] | 0;
             $arrayidx123$i$i = 480 + ($163 << 2 | 0) | 0;
             $164 = HEAPU32[$arrayidx123$i$i >> 2] | 0;
             $cmp124$i$i = ($add$ptr16$i$i | 0) == ($164 | 0);
             do_once$40 : {
              if ($cmp124$i$i) block182 : {
               HEAP32[$arrayidx123$i$i >> 2] = $R$3$i$i;
               $cond2$i$i = ($R$3$i$i | 0) == (0 | 0);
               if (($cond2$i$i | 0) == (0 | 0)) break do_once$40;
               $shl131$i$i = 1 << $163 | 0;
               $neg132$i$i = $shl131$i$i ^ 4294967295 | 0;
               $165 = HEAPU32[180 >> 2] | 0;
               $and133$i$i = $165 & $neg132$i$i | 0;
               HEAP32[180 >> 2] = $and133$i$i;
               break label$break$L331;
              } else block183 : {
               $166 = HEAPU32[192 >> 2] | 0;
               $cmp137$i$i = ($154 >>> 0 | 0) >>> 0 < ($166 >>> 0 | 0) >>> 0;
               if ($cmp137$i$i) _abort();
               $arrayidx143$i$i = $154 + 16 | 0;
               $167 = HEAPU32[$arrayidx143$i$i >> 2] | 0;
               $cmp144$i$i = ($167 | 0) == ($add$ptr16$i$i | 0);
               if ($cmp144$i$i) HEAP32[$arrayidx143$i$i >> 2] = $R$3$i$i; else block184 : {
                $arrayidx151$i$i = $154 + 20 | 0;
                HEAP32[$arrayidx151$i$i >> 2] = $R$3$i$i;
               }
               $cmp156$i$i = ($R$3$i$i | 0) == (0 | 0);
               if ($cmp156$i$i) break label$break$L331;
              }
             }
             $168 = HEAPU32[192 >> 2] | 0;
             $cmp160$i$i = ($R$3$i$i >>> 0 | 0) >>> 0 < ($168 >>> 0 | 0) >>> 0;
             if ($cmp160$i$i) _abort();
             $parent165$i$i = $R$3$i$i + 24 | 0;
             HEAP32[$parent165$i$i >> 2] = $154;
             $child166$i$i = $add$ptr16$i$i + 16 | 0;
             $169 = HEAPU32[$child166$i$i >> 2] | 0;
             $cmp168$i$i = ($169 | 0) == (0 | 0);
             do_once$41 : {
              if (($cmp168$i$i | 0) == (0 | 0)) block185 : {
               $cmp172$i$i = ($169 >>> 0 | 0) >>> 0 < ($168 >>> 0 | 0) >>> 0;
               if ($cmp172$i$i) _abort(); else block186 : {
                $arrayidx178$i$i = $R$3$i$i + 16 | 0;
                HEAP32[$arrayidx178$i$i >> 2] = $169;
                $parent179$i$i = $169 + 24 | 0;
                HEAP32[$parent179$i$i >> 2] = $R$3$i$i;
                break do_once$41;
               }
              }
             }
             $arrayidx184$i$i = $child166$i$i + 4 | 0;
             $170 = HEAPU32[$arrayidx184$i$i >> 2] | 0;
             $cmp185$i$i = ($170 | 0) == (0 | 0);
             if ($cmp185$i$i) break label$break$L331;
             $171 = HEAPU32[192 >> 2] | 0;
             $cmp189$i$i = ($170 >>> 0 | 0) >>> 0 < ($171 >>> 0 | 0) >>> 0;
             if ($cmp189$i$i) _abort(); else block187 : {
              $arrayidx195$i$i = $R$3$i$i + 20 | 0;
              HEAP32[$arrayidx195$i$i >> 2] = $170;
              $parent196$i$i = $170 + 24 | 0;
              HEAP32[$parent196$i$i >> 2] = $R$3$i$i;
              break label$break$L331;
             }
            }
           }
           $add$ptr205$i$i = $add$ptr16$i$i + $and37$i$i | 0;
           $add206$i$i = $and37$i$i + $sub18$i$i | 0;
           $oldfirst$0$i$i = $add$ptr205$i$i;
           $qsize$0$i$i = $add206$i$i;
          } else block188 : {
           $oldfirst$0$i$i = $add$ptr16$i$i;
           $qsize$0$i$i = $sub18$i$i;
          }
          $head208$i$i = $oldfirst$0$i$i + 4 | 0;
          $172 = HEAPU32[$head208$i$i >> 2] | 0;
          $and209$i$i = $172 & 4294967294 | 0;
          HEAP32[$head208$i$i >> 2] = $and209$i$i;
          $or210$i$i = $qsize$0$i$i | 1 | 0;
          $head211$i$i = $add$ptr17$i$i + 4 | 0;
          HEAP32[$head211$i$i >> 2] = $or210$i$i;
          $add$ptr212$i$i = $add$ptr17$i$i + $qsize$0$i$i | 0;
          HEAP32[$add$ptr212$i$i >> 2] = $qsize$0$i$i;
          $shr214$i$i = $qsize$0$i$i >>> 3 | 0;
          $cmp215$i$i = ($qsize$0$i$i >>> 0 | 0) >>> 0 < 256 >>> 0;
          if ($cmp215$i$i) block189 : {
           $shl221$i$i = $shr214$i$i << 1 | 0;
           $arrayidx223$i$i = 216 + ($shl221$i$i << 2 | 0) | 0;
           $173 = HEAPU32[176 >> 2] | 0;
           $shl226$i$i = 1 << $shr214$i$i | 0;
           $and227$i$i = $173 & $shl226$i$i | 0;
           $tobool228$i$i = ($and227$i$i | 0) == (0 | 0);
           do_once$42 : {
            if ($tobool228$i$i) block190 : {
             $or232$i$i = $173 | $shl226$i$i | 0;
             HEAP32[176 >> 2] = $or232$i$i;
             $$pre$i$56$i = $arrayidx223$i$i + 8 | 0;
             $$pre$phi$i$57$iZ2D = $$pre$i$56$i;
             $F224$0$i$i = $arrayidx223$i$i;
            } else block191 : {
             $174 = $arrayidx223$i$i + 8 | 0;
             $175 = HEAPU32[$174 >> 2] | 0;
             $176 = HEAPU32[192 >> 2] | 0;
             $cmp236$i$i = ($175 >>> 0 | 0) >>> 0 < ($176 >>> 0 | 0) >>> 0;
             if (($cmp236$i$i | 0) == (0 | 0)) block192 : {
              $$pre$phi$i$57$iZ2D = $174;
              $F224$0$i$i = $175;
              break do_once$42;
             }
             _abort();
            }
           }
           HEAP32[$$pre$phi$i$57$iZ2D >> 2] = $add$ptr17$i$i;
           $bk246$i$i = $F224$0$i$i + 12 | 0;
           HEAP32[$bk246$i$i >> 2] = $add$ptr17$i$i;
           $fd247$i$i = $add$ptr17$i$i + 8 | 0;
           HEAP32[$fd247$i$i >> 2] = $F224$0$i$i;
           $bk248$i$i = $add$ptr17$i$i + 12 | 0;
           HEAP32[$bk248$i$i >> 2] = $arrayidx223$i$i;
           break do_once$34;
          }
          $shr253$i$i = $qsize$0$i$i >>> 8 | 0;
          $cmp254$i$i = ($shr253$i$i | 0) == (0 | 0);
          do_once$43 : {
           if ($cmp254$i$i) $I252$0$i$i = 0; else block193 : {
            $cmp258$i$i = ($qsize$0$i$i >>> 0 | 0) >>> 0 > 16777215 >>> 0;
            if ($cmp258$i$i) block194 : {
             $I252$0$i$i = 31;
             break do_once$43;
            }
            $sub262$i$i = $shr253$i$i + 1048320 | 0;
            $shr263$i$i = $sub262$i$i >>> 16 | 0;
            $and264$i$i = $shr263$i$i & 8 | 0;
            $shl265$i$i = $shr253$i$i << $and264$i$i | 0;
            $sub266$i$i = $shl265$i$i + 520192 | 0;
            $shr267$i$i = $sub266$i$i >>> 16 | 0;
            $and268$i$i = $shr267$i$i & 4 | 0;
            $add269$i$i = $and268$i$i | $and264$i$i | 0;
            $shl270$i$i = $shl265$i$i << $and268$i$i | 0;
            $sub271$i$i = $shl270$i$i + 245760 | 0;
            $shr272$i$i = $sub271$i$i >>> 16 | 0;
            $and273$i$i = $shr272$i$i & 2 | 0;
            $add274$i$i = $add269$i$i | $and273$i$i | 0;
            $sub275$i$i = 14 - $add274$i$i | 0;
            $shl276$i$i = $shl270$i$i << $and273$i$i | 0;
            $shr277$i$i = $shl276$i$i >>> 15 | 0;
            $add278$i$i = $sub275$i$i + $shr277$i$i | 0;
            $shl279$i$i = $add278$i$i << 1 | 0;
            $add280$i$i = $add278$i$i + 7 | 0;
            $shr281$i$i = $qsize$0$i$i >>> $add280$i$i | 0;
            $and282$i$i = $shr281$i$i & 1 | 0;
            $add283$i$i = $and282$i$i | $shl279$i$i | 0;
            $I252$0$i$i = $add283$i$i;
           }
          }
          $arrayidx287$i$i = 480 + ($I252$0$i$i << 2 | 0) | 0;
          $index288$i$i = $add$ptr17$i$i + 28 | 0;
          HEAP32[$index288$i$i >> 2] = $I252$0$i$i;
          $child289$i$i = $add$ptr17$i$i + 16 | 0;
          $arrayidx290$i$i = $child289$i$i + 4 | 0;
          HEAP32[$arrayidx290$i$i >> 2] = 0;
          HEAP32[$child289$i$i >> 2] = 0;
          $177 = HEAPU32[180 >> 2] | 0;
          $shl294$i$i = 1 << $I252$0$i$i | 0;
          $and295$i$i = $177 & $shl294$i$i | 0;
          $tobool296$i$i = ($and295$i$i | 0) == (0 | 0);
          if ($tobool296$i$i) block195 : {
           $or300$i$i = $177 | $shl294$i$i | 0;
           HEAP32[180 >> 2] = $or300$i$i;
           HEAP32[$arrayidx287$i$i >> 2] = $add$ptr17$i$i;
           $parent301$i$i = $add$ptr17$i$i + 24 | 0;
           HEAP32[$parent301$i$i >> 2] = $arrayidx287$i$i;
           $bk302$i$i = $add$ptr17$i$i + 12 | 0;
           HEAP32[$bk302$i$i >> 2] = $add$ptr17$i$i;
           $fd303$i$i = $add$ptr17$i$i + 8 | 0;
           HEAP32[$fd303$i$i >> 2] = $add$ptr17$i$i;
           break do_once$34;
          }
          $178 = HEAPU32[$arrayidx287$i$i >> 2] | 0;
          $cmp306$i$i = ($I252$0$i$i | 0) == (31 | 0);
          $shr310$i$i = $I252$0$i$i >>> 1 | 0;
          $sub313$i$i = 25 - $shr310$i$i | 0;
          if ($cmp306$i$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub313$i$i;
          $cond315$i$i = wasm2asm_i32$1;
          $shl316$i$i = $qsize$0$i$i << $cond315$i$i | 0;
          $K305$0$i$i = $shl316$i$i;
          $T$0$i$58$i = $178;
          while_out$44 : do block196 : {
           $head317$i$i = $T$0$i$58$i + 4 | 0;
           $179 = HEAPU32[$head317$i$i >> 2] | 0;
           $and318$i$i = $179 & 4294967288 | 0;
           $cmp319$i$i = ($and318$i$i | 0) == ($qsize$0$i$i | 0);
           if ($cmp319$i$i) block197 : {
            $T$0$i$58$i$lcssa = $T$0$i$58$i;
            label = 281;
            break while_out$44;
           }
           $shr322$i$i = $K305$0$i$i >>> 31 | 0;
           $arrayidx325$i$i = ($T$0$i$58$i + 16 | 0) + ($shr322$i$i << 2 | 0) | 0;
           $shl326$i$i = $K305$0$i$i << 1 | 0;
           $180 = HEAPU32[$arrayidx325$i$i >> 2] | 0;
           $cmp327$i$i = ($180 | 0) == (0 | 0);
           if ($cmp327$i$i) block198 : {
            $T$0$i$58$i$lcssa283 = $T$0$i$58$i;
            $arrayidx325$i$i$lcssa = $arrayidx325$i$i;
            label = 278;
            break while_out$44;
           } else block199 : {
            $K305$0$i$i = $shl326$i$i;
            $T$0$i$58$i = $180;
           }
           continue while_out$44;
          } while (0);
          if ((label | 0) == (278 | 0)) block200 : {
           $181 = HEAPU32[192 >> 2] | 0;
           $cmp332$i$i = ($arrayidx325$i$i$lcssa >>> 0 | 0) >>> 0 < ($181 >>> 0 | 0) >>> 0;
           if ($cmp332$i$i) _abort(); else block201 : {
            HEAP32[$arrayidx325$i$i$lcssa >> 2] = $add$ptr17$i$i;
            $parent337$i$i = $add$ptr17$i$i + 24 | 0;
            HEAP32[$parent337$i$i >> 2] = $T$0$i$58$i$lcssa283;
            $bk338$i$i = $add$ptr17$i$i + 12 | 0;
            HEAP32[$bk338$i$i >> 2] = $add$ptr17$i$i;
            $fd339$i$i = $add$ptr17$i$i + 8 | 0;
            HEAP32[$fd339$i$i >> 2] = $add$ptr17$i$i;
            break do_once$34;
           }
          } else if ((label | 0) == (281 | 0)) block202 : {
           $fd344$i$i = $T$0$i$58$i$lcssa + 8 | 0;
           $182 = HEAPU32[$fd344$i$i >> 2] | 0;
           $183 = HEAPU32[192 >> 2] | 0;
           $cmp350$i$i = ($182 >>> 0 | 0) >>> 0 >= ($183 >>> 0 | 0) >>> 0;
           $not$cmp346$i$i = ($T$0$i$58$i$lcssa >>> 0 | 0) >>> 0 >= ($183 >>> 0 | 0) >>> 0;
           $184 = $cmp350$i$i & $not$cmp346$i$i | 0;
           if ($184) block203 : {
            $bk357$i$i = $182 + 12 | 0;
            HEAP32[$bk357$i$i >> 2] = $add$ptr17$i$i;
            HEAP32[$fd344$i$i >> 2] = $add$ptr17$i$i;
            $fd359$i$i = $add$ptr17$i$i + 8 | 0;
            HEAP32[$fd359$i$i >> 2] = $182;
            $bk360$i$i = $add$ptr17$i$i + 12 | 0;
            HEAP32[$bk360$i$i >> 2] = $T$0$i$58$i$lcssa;
            $parent361$i$i = $add$ptr17$i$i + 24 | 0;
            HEAP32[$parent361$i$i >> 2] = 0;
            break do_once$34;
           } else _abort();
          }
         }
        }
        $add$ptr369$i$i = $add$ptr4$i$37$i + 8 | 0;
        $retval$0 = $add$ptr369$i$i;
        wasm2asm_i32$0 = $retval$0;
        break topmost;
       } else $sp$0$i$i$i = 624;
      }
      while_out$46 : do block204 : {
       $185 = HEAPU32[$sp$0$i$i$i >> 2] | 0;
       $cmp$i$i$i = ($185 >>> 0 | 0) >>> 0 > ($119 >>> 0 | 0) >>> 0;
       if (($cmp$i$i$i | 0) == (0 | 0)) block205 : {
        $size$i$i$i = $sp$0$i$i$i + 4 | 0;
        $186 = HEAPU32[$size$i$i$i >> 2] | 0;
        $add$ptr$i$i$i = $185 + $186 | 0;
        $cmp2$i$i$i = ($add$ptr$i$i$i >>> 0 | 0) >>> 0 > ($119 >>> 0 | 0) >>> 0;
        if ($cmp2$i$i$i) block206 : {
         $add$ptr$i$i$i$lcssa = $add$ptr$i$i$i;
         break while_out$46;
        }
       }
       $next$i$i$i = $sp$0$i$i$i + 8 | 0;
       $187 = HEAPU32[$next$i$i$i >> 2] | 0;
       $sp$0$i$i$i = $187;
       continue while_out$46;
      } while (0);
      $add$ptr2$i$i = $add$ptr$i$i$i$lcssa + 4294967249 | 0;
      $add$ptr3$i$i = $add$ptr2$i$i + 8 | 0;
      $188 = $add$ptr3$i$i;
      $and$i$14$i = $188 & 7 | 0;
      $cmp$i$15$i = ($and$i$14$i | 0) == (0 | 0);
      $189 = 0 - $188 | 0;
      $and6$i$i = $189 & 7 | 0;
      if ($cmp$i$15$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and6$i$i;
      $cond$i$16$i = wasm2asm_i32$1;
      $add$ptr7$i$i = $add$ptr2$i$i + $cond$i$16$i | 0;
      $add$ptr8$i122$i = $119 + 16 | 0;
      $cmp9$i$i = ($add$ptr7$i$i >>> 0 | 0) >>> 0 < ($add$ptr8$i122$i >>> 0 | 0) >>> 0;
      if ($cmp9$i$i) wasm2asm_i32$1 = $119; else wasm2asm_i32$1 = $add$ptr7$i$i;
      $cond13$i$i = wasm2asm_i32$1;
      $add$ptr14$i$i = $cond13$i$i + 8 | 0;
      $add$ptr15$i$i = $cond13$i$i + 24 | 0;
      $sub16$i$i = $tsize$795$i + 4294967256 | 0;
      $add$ptr$i$1$i$i = $tbase$796$i + 8 | 0;
      $190 = $add$ptr$i$1$i$i;
      $and$i$i$i = $190 & 7 | 0;
      $cmp$i$2$i$i = ($and$i$i$i | 0) == (0 | 0);
      $191 = 0 - $190 | 0;
      $and3$i$i$i = $191 & 7 | 0;
      if ($cmp$i$2$i$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $and3$i$i$i;
      $cond$i$i$i = wasm2asm_i32$1;
      $add$ptr4$i$i$i = $tbase$796$i + $cond$i$i$i | 0;
      $sub5$i$i$i = $sub16$i$i - $cond$i$i$i | 0;
      HEAP32[200 >> 2] = $add$ptr4$i$i$i;
      HEAP32[188 >> 2] = $sub5$i$i$i;
      $or$i$i$i = $sub5$i$i$i | 1 | 0;
      $head$i$i$i = $add$ptr4$i$i$i + 4 | 0;
      HEAP32[$head$i$i$i >> 2] = $or$i$i$i;
      $add$ptr6$i$i$i = $add$ptr4$i$i$i + $sub5$i$i$i | 0;
      $head7$i$i$i = $add$ptr6$i$i$i + 4 | 0;
      HEAP32[$head7$i$i$i >> 2] = 40;
      $192 = HEAPU32[664 >> 2] | 0;
      HEAP32[204 >> 2] = $192;
      $head$i$17$i = $cond13$i$i + 4 | 0;
      HEAP32[$head$i$17$i >> 2] = 27;
      HEAP32[$add$ptr14$i$i >> 2] = HEAPU32[624 >> 2] | 0;
      HEAP32[($add$ptr14$i$i + 4 | 0) >> 2] = HEAPU32[(624 + 4 | 0) >> 2] | 0;
      HEAP32[($add$ptr14$i$i + 8 | 0) >> 2] = HEAPU32[(624 + 8 | 0) >> 2] | 0;
      HEAP32[($add$ptr14$i$i + 12 | 0) >> 2] = HEAPU32[(624 + 12 | 0) >> 2] | 0;
      HEAP32[624 >> 2] = $tbase$796$i;
      HEAP32[628 >> 2] = $tsize$795$i;
      HEAP32[636 >> 2] = 0;
      HEAP32[632 >> 2] = $add$ptr14$i$i;
      $p$0$i$i = $add$ptr15$i$i;
      while_out$48 : do block207 : {
       $add$ptr24$i$i = $p$0$i$i + 4 | 0;
       HEAP32[$add$ptr24$i$i >> 2] = 7;
       $193 = $add$ptr24$i$i + 4 | 0;
       $cmp27$i$i = ($193 >>> 0 | 0) >>> 0 < ($add$ptr$i$i$i$lcssa >>> 0 | 0) >>> 0;
       if ($cmp27$i$i) $p$0$i$i = $add$ptr24$i$i; else break while_out$48;
       continue while_out$48;
      } while (0);
      $cmp28$i$i = ($cond13$i$i | 0) == ($119 | 0);
      if (($cmp28$i$i | 0) == (0 | 0)) block208 : {
       $sub$ptr$lhs$cast$i$i = $cond13$i$i;
       $sub$ptr$rhs$cast$i$i = $119;
       $sub$ptr$sub$i$i = $sub$ptr$lhs$cast$i$i - $sub$ptr$rhs$cast$i$i | 0;
       $194 = HEAPU32[$head$i$17$i >> 2] | 0;
       $and32$i$i = $194 & 4294967294 | 0;
       HEAP32[$head$i$17$i >> 2] = $and32$i$i;
       $or33$i$i = $sub$ptr$sub$i$i | 1 | 0;
       $head34$i$i = $119 + 4 | 0;
       HEAP32[$head34$i$i >> 2] = $or33$i$i;
       HEAP32[$cond13$i$i >> 2] = $sub$ptr$sub$i$i;
       $shr$i$i = $sub$ptr$sub$i$i >>> 3 | 0;
       $cmp36$i$i = ($sub$ptr$sub$i$i >>> 0 | 0) >>> 0 < 256 >>> 0;
       if ($cmp36$i$i) block209 : {
        $shl$i$19$i = $shr$i$i << 1 | 0;
        $arrayidx$i$20$i = 216 + ($shl$i$19$i << 2 | 0) | 0;
        $195 = HEAPU32[176 >> 2] | 0;
        $shl39$i$i = 1 << $shr$i$i | 0;
        $and40$i$i = $195 & $shl39$i$i | 0;
        $tobool$i$i = ($and40$i$i | 0) == (0 | 0);
        if ($tobool$i$i) block210 : {
         $or44$i$i = $195 | $shl39$i$i | 0;
         HEAP32[176 >> 2] = $or44$i$i;
         $$pre$i$i = $arrayidx$i$20$i + 8 | 0;
         $$pre$phi$i$iZ2D = $$pre$i$i;
         $F$0$i$i = $arrayidx$i$20$i;
        } else block211 : {
         $196 = $arrayidx$i$20$i + 8 | 0;
         $197 = HEAPU32[$196 >> 2] | 0;
         $198 = HEAPU32[192 >> 2] | 0;
         $cmp46$i$i = ($197 >>> 0 | 0) >>> 0 < ($198 >>> 0 | 0) >>> 0;
         if ($cmp46$i$i) _abort(); else block212 : {
          $$pre$phi$i$iZ2D = $196;
          $F$0$i$i = $197;
         }
        }
        HEAP32[$$pre$phi$i$iZ2D >> 2] = $119;
        $bk$i$i = $F$0$i$i + 12 | 0;
        HEAP32[$bk$i$i >> 2] = $119;
        $fd54$i$i = $119 + 8 | 0;
        HEAP32[$fd54$i$i >> 2] = $F$0$i$i;
        $bk55$i$i = $119 + 12 | 0;
        HEAP32[$bk55$i$i >> 2] = $arrayidx$i$20$i;
        break do_once$27;
       }
       $shr58$i$i = $sub$ptr$sub$i$i >>> 8 | 0;
       $cmp59$i$i = ($shr58$i$i | 0) == (0 | 0);
       if ($cmp59$i$i) $I57$0$i$i = 0; else block213 : {
        $cmp63$i$i = ($sub$ptr$sub$i$i >>> 0 | 0) >>> 0 > 16777215 >>> 0;
        if ($cmp63$i$i) $I57$0$i$i = 31; else block214 : {
         $sub67$i$i = $shr58$i$i + 1048320 | 0;
         $shr68$i$i = $sub67$i$i >>> 16 | 0;
         $and69$i$i = $shr68$i$i & 8 | 0;
         $shl70$i$i = $shr58$i$i << $and69$i$i | 0;
         $sub71$i$i = $shl70$i$i + 520192 | 0;
         $shr72$i$i = $sub71$i$i >>> 16 | 0;
         $and73$i$i = $shr72$i$i & 4 | 0;
         $add74$i$i = $and73$i$i | $and69$i$i | 0;
         $shl75$i$i = $shl70$i$i << $and73$i$i | 0;
         $sub76$i$i = $shl75$i$i + 245760 | 0;
         $shr77$i$i = $sub76$i$i >>> 16 | 0;
         $and78$i$i = $shr77$i$i & 2 | 0;
         $add79$i$i = $add74$i$i | $and78$i$i | 0;
         $sub80$i$i = 14 - $add79$i$i | 0;
         $shl81$i$i = $shl75$i$i << $and78$i$i | 0;
         $shr82$i$i = $shl81$i$i >>> 15 | 0;
         $add83$i$i = $sub80$i$i + $shr82$i$i | 0;
         $shl84$i$i = $add83$i$i << 1 | 0;
         $add85$i$i = $add83$i$i + 7 | 0;
         $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i | 0;
         $and87$i$i = $shr86$i$i & 1 | 0;
         $add88$i$i = $and87$i$i | $shl84$i$i | 0;
         $I57$0$i$i = $add88$i$i;
        }
       }
       $arrayidx91$i$i = 480 + ($I57$0$i$i << 2 | 0) | 0;
       $index$i$i = $119 + 28 | 0;
       HEAP32[$index$i$i >> 2] = $I57$0$i$i;
       $arrayidx92$i$i = $119 + 20 | 0;
       HEAP32[$arrayidx92$i$i >> 2] = 0;
       HEAP32[$add$ptr8$i122$i >> 2] = 0;
       $199 = HEAPU32[180 >> 2] | 0;
       $shl95$i$i = 1 << $I57$0$i$i | 0;
       $and96$i$i = $199 & $shl95$i$i | 0;
       $tobool97$i$i = ($and96$i$i | 0) == (0 | 0);
       if ($tobool97$i$i) block215 : {
        $or101$i$i = $199 | $shl95$i$i | 0;
        HEAP32[180 >> 2] = $or101$i$i;
        HEAP32[$arrayidx91$i$i >> 2] = $119;
        $parent$i$i = $119 + 24 | 0;
        HEAP32[$parent$i$i >> 2] = $arrayidx91$i$i;
        $bk102$i$i = $119 + 12 | 0;
        HEAP32[$bk102$i$i >> 2] = $119;
        $fd103$i$i = $119 + 8 | 0;
        HEAP32[$fd103$i$i >> 2] = $119;
        break do_once$27;
       }
       $200 = HEAPU32[$arrayidx91$i$i >> 2] | 0;
       $cmp106$i$i = ($I57$0$i$i | 0) == (31 | 0);
       $shr110$i$i = $I57$0$i$i >>> 1 | 0;
       $sub113$i$i = 25 - $shr110$i$i | 0;
       if ($cmp106$i$i) wasm2asm_i32$1 = 0; else wasm2asm_i32$1 = $sub113$i$i;
       $cond115$i$i = wasm2asm_i32$1;
       $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i | 0;
       $K105$0$i$i = $shl116$i$i;
       $T$0$i$i = $200;
       while_out$50 : do block216 : {
        $head118$i$i = $T$0$i$i + 4 | 0;
        $201 = HEAPU32[$head118$i$i >> 2] | 0;
        $and119$i$i = $201 & 4294967288 | 0;
        $cmp120$i$i = ($and119$i$i | 0) == ($sub$ptr$sub$i$i | 0);
        if ($cmp120$i$i) block217 : {
         $T$0$i$i$lcssa = $T$0$i$i;
         label = 307;
         break while_out$50;
        }
        $shr123$i$i = $K105$0$i$i >>> 31 | 0;
        $arrayidx126$i$i = ($T$0$i$i + 16 | 0) + ($shr123$i$i << 2 | 0) | 0;
        $shl127$i$i = $K105$0$i$i << 1 | 0;
        $202 = HEAPU32[$arrayidx126$i$i >> 2] | 0;
        $cmp128$i$i = ($202 | 0) == (0 | 0);
        if ($cmp128$i$i) block218 : {
         $T$0$i$i$lcssa284 = $T$0$i$i;
         $arrayidx126$i$i$lcssa = $arrayidx126$i$i;
         label = 304;
         break while_out$50;
        } else block219 : {
         $K105$0$i$i = $shl127$i$i;
         $T$0$i$i = $202;
        }
        continue while_out$50;
       } while (0);
       if ((label | 0) == (304 | 0)) block220 : {
        $203 = HEAPU32[192 >> 2] | 0;
        $cmp133$i$i = ($arrayidx126$i$i$lcssa >>> 0 | 0) >>> 0 < ($203 >>> 0 | 0) >>> 0;
        if ($cmp133$i$i) _abort(); else block221 : {
         HEAP32[$arrayidx126$i$i$lcssa >> 2] = $119;
         $parent138$i$i = $119 + 24 | 0;
         HEAP32[$parent138$i$i >> 2] = $T$0$i$i$lcssa284;
         $bk139$i$i = $119 + 12 | 0;
         HEAP32[$bk139$i$i >> 2] = $119;
         $fd140$i$i = $119 + 8 | 0;
         HEAP32[$fd140$i$i >> 2] = $119;
         break do_once$27;
        }
       } else if ((label | 0) == (307 | 0)) block222 : {
        $fd148$i$i = $T$0$i$i$lcssa + 8 | 0;
        $204 = HEAPU32[$fd148$i$i >> 2] | 0;
        $205 = HEAPU32[192 >> 2] | 0;
        $cmp153$i$i = ($204 >>> 0 | 0) >>> 0 >= ($205 >>> 0 | 0) >>> 0;
        $not$cmp150$i$i = ($T$0$i$i$lcssa >>> 0 | 0) >>> 0 >= ($205 >>> 0 | 0) >>> 0;
        $206 = $cmp153$i$i & $not$cmp150$i$i | 0;
        if ($206) block223 : {
         $bk158$i$i = $204 + 12 | 0;
         HEAP32[$bk158$i$i >> 2] = $119;
         HEAP32[$fd148$i$i >> 2] = $119;
         $fd160$i$i = $119 + 8 | 0;
         HEAP32[$fd160$i$i >> 2] = $204;
         $bk161$i$i = $119 + 12 | 0;
         HEAP32[$bk161$i$i >> 2] = $T$0$i$i$lcssa;
         $parent162$i$i = $119 + 24 | 0;
         HEAP32[$parent162$i$i >> 2] = 0;
         break do_once$27;
        } else _abort();
       }
      }
     }
    }
    $207 = HEAPU32[188 >> 2] | 0;
    $cmp257$i = ($207 >>> 0 | 0) >>> 0 > ($nb$0 >>> 0 | 0) >>> 0;
    if ($cmp257$i) block224 : {
     $sub260$i = $207 - $nb$0 | 0;
     HEAP32[188 >> 2] = $sub260$i;
     $208 = HEAPU32[200 >> 2] | 0;
     $add$ptr262$i = $208 + $nb$0 | 0;
     HEAP32[200 >> 2] = $add$ptr262$i;
     $or264$i = $sub260$i | 1 | 0;
     $head265$i = $add$ptr262$i + 4 | 0;
     HEAP32[$head265$i >> 2] = $or264$i;
     $or267$i = $nb$0 | 3 | 0;
     $head268$i = $208 + 4 | 0;
     HEAP32[$head268$i >> 2] = $or267$i;
     $add$ptr269$i = $208 + 8 | 0;
     $retval$0 = $add$ptr269$i;
     wasm2asm_i32$0 = $retval$0;
     break topmost;
    }
   }
   $call275$i = ___errno_location() | 0;
   HEAP32[$call275$i >> 2] = 12;
   $retval$0 = 0;
   wasm2asm_i32$0 = $retval$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _free($mem) {
  $mem = $mem | 0;
  var $$pre = 0, $$pre$phiZ2D = 0, $$pre312 = 0, $$pre313 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, $F510$0 = 0, $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$1$lcssa = 0, $R$3 = 0, $R332$1 = 0, $R332$1$lcssa = 0, $R332$3 = 0, $RP$1 = 0, $RP$1$lcssa = 0, $RP360$1 = 0, $RP360$1$lcssa = 0, $T$0 = 0, $T$0$lcssa = 0, $T$0$lcssa319 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0, $add258 = 0, $add267 = 0, $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0, $and545 = 0, $and549 = 0, $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0, $arrayidx400 = 0, $arrayidx419 = 0, $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx599$lcssa = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0, $bk580 = 0, $bk611 = 0, $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0, $cmp127 = 0, $cmp13 = 0, $cmp131 = 0, $cmp143 = 0, $cmp150 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp280 = 0, $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0, $cmp401 = 0, $cmp413 = 0, $cmp42 = 0, $cmp420 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0, $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond291 = 0, $cond292 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0, $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0, $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0, $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0, $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr596 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0, $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0, wasm2asm_i32$0 = 0;
  topmost : {
   sp = HEAPU32[8 >> 2] | 0;
   $cmp = ($mem | 0) == (0 | 0);
   if ($cmp) break topmost;
   $add$ptr = $mem + 4294967288 | 0;
   $0 = HEAPU32[192 >> 2] | 0;
   $cmp1 = ($add$ptr >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
   if ($cmp1) _abort();
   $head = $mem + 4294967292 | 0;
   $1 = HEAPU32[$head >> 2] | 0;
   $and = $1 & 3 | 0;
   $cmp2 = ($and | 0) == (1 | 0);
   if ($cmp2) _abort();
   $and5 = $1 & 4294967288 | 0;
   $add$ptr6 = $add$ptr + $and5 | 0;
   $and8 = $1 & 1 | 0;
   $tobool9 = ($and8 | 0) == (0 | 0);
   do_once$0 : {
    if ($tobool9) block0 : {
     $2 = HEAPU32[$add$ptr >> 2] | 0;
     $cmp13 = ($and | 0) == (0 | 0);
     if ($cmp13) break topmost;
     $idx$neg = 0 - $2 | 0;
     $add$ptr16 = $add$ptr + $idx$neg | 0;
     $add17 = $2 + $and5 | 0;
     $cmp18 = ($add$ptr16 >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
     if ($cmp18) _abort();
     $3 = HEAPU32[196 >> 2] | 0;
     $cmp22 = ($add$ptr16 | 0) == ($3 | 0);
     if ($cmp22) block1 : {
      $head209 = $add$ptr6 + 4 | 0;
      $27 = HEAPU32[$head209 >> 2] | 0;
      $and210 = $27 & 3 | 0;
      $cmp211 = ($and210 | 0) == (3 | 0);
      if (($cmp211 | 0) == (0 | 0)) block2 : {
       $p$1 = $add$ptr16;
       $psize$1 = $add17;
       break do_once$0;
      }
      HEAP32[184 >> 2] = $add17;
      $and215 = $27 & 4294967294 | 0;
      HEAP32[$head209 >> 2] = $and215;
      $or = $add17 | 1 | 0;
      $head216 = $add$ptr16 + 4 | 0;
      HEAP32[$head216 >> 2] = $or;
      $add$ptr217 = $add$ptr16 + $add17 | 0;
      HEAP32[$add$ptr217 >> 2] = $add17;
      break topmost;
     }
     $shr = $2 >>> 3 | 0;
     $cmp25 = ($2 >>> 0 | 0) >>> 0 < 256 >>> 0;
     if ($cmp25) block3 : {
      $fd = $add$ptr16 + 8 | 0;
      $4 = HEAPU32[$fd >> 2] | 0;
      $bk = $add$ptr16 + 12 | 0;
      $5 = HEAPU32[$bk >> 2] | 0;
      $shl = $shr << 1 | 0;
      $arrayidx = 216 + ($shl << 2 | 0) | 0;
      $cmp29 = ($4 | 0) == ($arrayidx | 0);
      if (($cmp29 | 0) == (0 | 0)) block4 : {
       $cmp31 = ($4 >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
       if ($cmp31) _abort();
       $bk34 = $4 + 12 | 0;
       $6 = HEAPU32[$bk34 >> 2] | 0;
       $cmp35 = ($6 | 0) == ($add$ptr16 | 0);
       if (($cmp35 | 0) == (0 | 0)) _abort();
      }
      $cmp42 = ($5 | 0) == ($4 | 0);
      if ($cmp42) block5 : {
       $shl45 = 1 << $shr | 0;
       $neg = $shl45 ^ 4294967295 | 0;
       $7 = HEAPU32[176 >> 2] | 0;
       $and46 = $7 & $neg | 0;
       HEAP32[176 >> 2] = $and46;
       $p$1 = $add$ptr16;
       $psize$1 = $add17;
       break do_once$0;
      }
      $cmp50 = ($5 | 0) == ($arrayidx | 0);
      if ($cmp50) block6 : {
       $$pre313 = $5 + 8 | 0;
       $fd67$pre$phiZ2D = $$pre313;
      } else block7 : {
       $cmp53 = ($5 >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
       if ($cmp53) _abort();
       $fd56 = $5 + 8 | 0;
       $8 = HEAPU32[$fd56 >> 2] | 0;
       $cmp57 = ($8 | 0) == ($add$ptr16 | 0);
       if ($cmp57) $fd67$pre$phiZ2D = $fd56; else _abort();
      }
      $bk66 = $4 + 12 | 0;
      HEAP32[$bk66 >> 2] = $5;
      HEAP32[$fd67$pre$phiZ2D >> 2] = $4;
      $p$1 = $add$ptr16;
      $psize$1 = $add17;
      break do_once$0;
     }
     $parent = $add$ptr16 + 24 | 0;
     $9 = HEAPU32[$parent >> 2] | 0;
     $bk73 = $add$ptr16 + 12 | 0;
     $10 = HEAPU32[$bk73 >> 2] | 0;
     $cmp74 = ($10 | 0) == ($add$ptr16 | 0);
     do_once$1 : {
      if ($cmp74) block8 : {
       $child = $add$ptr16 + 16 | 0;
       $arrayidx99 = $child + 4 | 0;
       $14 = HEAPU32[$arrayidx99 >> 2] | 0;
       $cmp100 = ($14 | 0) == (0 | 0);
       if ($cmp100) block9 : {
        $15 = HEAPU32[$child >> 2] | 0;
        $cmp104 = ($15 | 0) == (0 | 0);
        if ($cmp104) block10 : {
         $R$3 = 0;
         break do_once$1;
        } else block11 : {
         $R$1 = $15;
         $RP$1 = $child;
        }
       } else block12 : {
        $R$1 = $14;
        $RP$1 = $arrayidx99;
       }
       while_out$2 : do block13 : {
        $arrayidx108 = $R$1 + 20 | 0;
        $16 = HEAPU32[$arrayidx108 >> 2] | 0;
        $cmp109 = ($16 | 0) == (0 | 0);
        if (($cmp109 | 0) == (0 | 0)) block14 : {
         $R$1 = $16;
         $RP$1 = $arrayidx108;
         continue while_out$2;
        }
        $arrayidx113 = $R$1 + 16 | 0;
        $17 = HEAPU32[$arrayidx113 >> 2] | 0;
        $cmp114 = ($17 | 0) == (0 | 0);
        if ($cmp114) block15 : {
         $R$1$lcssa = $R$1;
         $RP$1$lcssa = $RP$1;
         break while_out$2;
        } else block16 : {
         $R$1 = $17;
         $RP$1 = $arrayidx113;
        }
        continue while_out$2;
       } while (0);
       $cmp118 = ($RP$1$lcssa >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
       if ($cmp118) _abort(); else block17 : {
        HEAP32[$RP$1$lcssa >> 2] = 0;
        $R$3 = $R$1$lcssa;
        break do_once$1;
       }
      } else block18 : {
       $fd78 = $add$ptr16 + 8 | 0;
       $11 = HEAPU32[$fd78 >> 2] | 0;
       $cmp80 = ($11 >>> 0 | 0) >>> 0 < ($0 >>> 0 | 0) >>> 0;
       if ($cmp80) _abort();
       $bk82 = $11 + 12 | 0;
       $12 = HEAPU32[$bk82 >> 2] | 0;
       $cmp83 = ($12 | 0) == ($add$ptr16 | 0);
       if (($cmp83 | 0) == (0 | 0)) _abort();
       $fd86 = $10 + 8 | 0;
       $13 = HEAPU32[$fd86 >> 2] | 0;
       $cmp87 = ($13 | 0) == ($add$ptr16 | 0);
       if ($cmp87) block19 : {
        HEAP32[$bk82 >> 2] = $10;
        HEAP32[$fd86 >> 2] = $11;
        $R$3 = $10;
        break do_once$1;
       } else _abort();
      }
     }
     $cmp127 = ($9 | 0) == (0 | 0);
     if ($cmp127) block20 : {
      $p$1 = $add$ptr16;
      $psize$1 = $add17;
     } else block21 : {
      $index = $add$ptr16 + 28 | 0;
      $18 = HEAPU32[$index >> 2] | 0;
      $arrayidx130 = 480 + ($18 << 2 | 0) | 0;
      $19 = HEAPU32[$arrayidx130 >> 2] | 0;
      $cmp131 = ($add$ptr16 | 0) == ($19 | 0);
      if ($cmp131) block22 : {
       HEAP32[$arrayidx130 >> 2] = $R$3;
       $cond291 = ($R$3 | 0) == (0 | 0);
       if ($cond291) block23 : {
        $shl138 = 1 << $18 | 0;
        $neg139 = $shl138 ^ 4294967295 | 0;
        $20 = HEAPU32[180 >> 2] | 0;
        $and140 = $20 & $neg139 | 0;
        HEAP32[180 >> 2] = $and140;
        $p$1 = $add$ptr16;
        $psize$1 = $add17;
        break do_once$0;
       }
      } else block24 : {
       $21 = HEAPU32[192 >> 2] | 0;
       $cmp143 = ($9 >>> 0 | 0) >>> 0 < ($21 >>> 0 | 0) >>> 0;
       if ($cmp143) _abort();
       $arrayidx149 = $9 + 16 | 0;
       $22 = HEAPU32[$arrayidx149 >> 2] | 0;
       $cmp150 = ($22 | 0) == ($add$ptr16 | 0);
       if ($cmp150) HEAP32[$arrayidx149 >> 2] = $R$3; else block25 : {
        $arrayidx157 = $9 + 20 | 0;
        HEAP32[$arrayidx157 >> 2] = $R$3;
       }
       $cmp162 = ($R$3 | 0) == (0 | 0);
       if ($cmp162) block26 : {
        $p$1 = $add$ptr16;
        $psize$1 = $add17;
        break do_once$0;
       }
      }
      $23 = HEAPU32[192 >> 2] | 0;
      $cmp165 = ($R$3 >>> 0 | 0) >>> 0 < ($23 >>> 0 | 0) >>> 0;
      if ($cmp165) _abort();
      $parent170 = $R$3 + 24 | 0;
      HEAP32[$parent170 >> 2] = $9;
      $child171 = $add$ptr16 + 16 | 0;
      $24 = HEAPU32[$child171 >> 2] | 0;
      $cmp173 = ($24 | 0) == (0 | 0);
      do_once$4 : {
       if (($cmp173 | 0) == (0 | 0)) block27 : {
        $cmp176 = ($24 >>> 0 | 0) >>> 0 < ($23 >>> 0 | 0) >>> 0;
        if ($cmp176) _abort(); else block28 : {
         $arrayidx182 = $R$3 + 16 | 0;
         HEAP32[$arrayidx182 >> 2] = $24;
         $parent183 = $24 + 24 | 0;
         HEAP32[$parent183 >> 2] = $R$3;
         break do_once$4;
        }
       }
      }
      $arrayidx188 = $child171 + 4 | 0;
      $25 = HEAPU32[$arrayidx188 >> 2] | 0;
      $cmp189 = ($25 | 0) == (0 | 0);
      if ($cmp189) block29 : {
       $p$1 = $add$ptr16;
       $psize$1 = $add17;
      } else block30 : {
       $26 = HEAPU32[192 >> 2] | 0;
       $cmp192 = ($25 >>> 0 | 0) >>> 0 < ($26 >>> 0 | 0) >>> 0;
       if ($cmp192) _abort(); else block31 : {
        $arrayidx198 = $R$3 + 20 | 0;
        HEAP32[$arrayidx198 >> 2] = $25;
        $parent199 = $25 + 24 | 0;
        HEAP32[$parent199 >> 2] = $R$3;
        $p$1 = $add$ptr16;
        $psize$1 = $add17;
        break do_once$0;
       }
      }
     }
    } else block32 : {
     $p$1 = $add$ptr;
     $psize$1 = $and5;
    }
   }
   $cmp228 = ($p$1 >>> 0 | 0) >>> 0 < ($add$ptr6 >>> 0 | 0) >>> 0;
   if (($cmp228 | 0) == (0 | 0)) _abort();
   $head231 = $add$ptr6 + 4 | 0;
   $28 = HEAPU32[$head231 >> 2] | 0;
   $and232 = $28 & 1 | 0;
   $tobool233 = ($and232 | 0) == (0 | 0);
   if ($tobool233) _abort();
   $and240 = $28 & 2 | 0;
   $tobool241 = ($and240 | 0) == (0 | 0);
   if ($tobool241) block33 : {
    $29 = HEAPU32[200 >> 2] | 0;
    $cmp243 = ($add$ptr6 | 0) == ($29 | 0);
    if ($cmp243) block34 : {
     $30 = HEAPU32[188 >> 2] | 0;
     $add246 = $30 + $psize$1 | 0;
     HEAP32[188 >> 2] = $add246;
     HEAP32[200 >> 2] = $p$1;
     $or247 = $add246 | 1 | 0;
     $head248 = $p$1 + 4 | 0;
     HEAP32[$head248 >> 2] = $or247;
     $31 = HEAPU32[196 >> 2] | 0;
     $cmp249 = ($p$1 | 0) == ($31 | 0);
     if (($cmp249 | 0) == (0 | 0)) break topmost;
     HEAP32[196 >> 2] = 0;
     HEAP32[184 >> 2] = 0;
     break topmost;
    }
    $32 = HEAPU32[196 >> 2] | 0;
    $cmp255 = ($add$ptr6 | 0) == ($32 | 0);
    if ($cmp255) block35 : {
     $33 = HEAPU32[184 >> 2] | 0;
     $add258 = $33 + $psize$1 | 0;
     HEAP32[184 >> 2] = $add258;
     HEAP32[196 >> 2] = $p$1;
     $or259 = $add258 | 1 | 0;
     $head260 = $p$1 + 4 | 0;
     HEAP32[$head260 >> 2] = $or259;
     $add$ptr261 = $p$1 + $add258 | 0;
     HEAP32[$add$ptr261 >> 2] = $add258;
     break topmost;
    }
    $and266 = $28 & 4294967288 | 0;
    $add267 = $and266 + $psize$1 | 0;
    $shr268 = $28 >>> 3 | 0;
    $cmp269 = ($28 >>> 0 | 0) >>> 0 < 256 >>> 0;
    do_once$5 : {
     if ($cmp269) block36 : {
      $fd273 = $add$ptr6 + 8 | 0;
      $34 = HEAPU32[$fd273 >> 2] | 0;
      $bk275 = $add$ptr6 + 12 | 0;
      $35 = HEAPU32[$bk275 >> 2] | 0;
      $shl278 = $shr268 << 1 | 0;
      $arrayidx279 = 216 + ($shl278 << 2 | 0) | 0;
      $cmp280 = ($34 | 0) == ($arrayidx279 | 0);
      if (($cmp280 | 0) == (0 | 0)) block37 : {
       $36 = HEAPU32[192 >> 2] | 0;
       $cmp283 = ($34 >>> 0 | 0) >>> 0 < ($36 >>> 0 | 0) >>> 0;
       if ($cmp283) _abort();
       $bk286 = $34 + 12 | 0;
       $37 = HEAPU32[$bk286 >> 2] | 0;
       $cmp287 = ($37 | 0) == ($add$ptr6 | 0);
       if (($cmp287 | 0) == (0 | 0)) _abort();
      }
      $cmp296 = ($35 | 0) == ($34 | 0);
      if ($cmp296) block38 : {
       $shl299 = 1 << $shr268 | 0;
       $neg300 = $shl299 ^ 4294967295 | 0;
       $38 = HEAPU32[176 >> 2] | 0;
       $and301 = $38 & $neg300 | 0;
       HEAP32[176 >> 2] = $and301;
       break do_once$5;
      }
      $cmp305 = ($35 | 0) == ($arrayidx279 | 0);
      if ($cmp305) block39 : {
       $$pre312 = $35 + 8 | 0;
       $fd322$pre$phiZ2D = $$pre312;
      } else block40 : {
       $39 = HEAPU32[192 >> 2] | 0;
       $cmp308 = ($35 >>> 0 | 0) >>> 0 < ($39 >>> 0 | 0) >>> 0;
       if ($cmp308) _abort();
       $fd311 = $35 + 8 | 0;
       $40 = HEAPU32[$fd311 >> 2] | 0;
       $cmp312 = ($40 | 0) == ($add$ptr6 | 0);
       if ($cmp312) $fd322$pre$phiZ2D = $fd311; else _abort();
      }
      $bk321 = $34 + 12 | 0;
      HEAP32[$bk321 >> 2] = $35;
      HEAP32[$fd322$pre$phiZ2D >> 2] = $34;
     } else block41 : {
      $parent331 = $add$ptr6 + 24 | 0;
      $41 = HEAPU32[$parent331 >> 2] | 0;
      $bk333 = $add$ptr6 + 12 | 0;
      $42 = HEAPU32[$bk333 >> 2] | 0;
      $cmp334 = ($42 | 0) == ($add$ptr6 | 0);
      do_once$6 : {
       if ($cmp334) block42 : {
        $child361 = $add$ptr6 + 16 | 0;
        $arrayidx362 = $child361 + 4 | 0;
        $47 = HEAPU32[$arrayidx362 >> 2] | 0;
        $cmp363 = ($47 | 0) == (0 | 0);
        if ($cmp363) block43 : {
         $48 = HEAPU32[$child361 >> 2] | 0;
         $cmp368 = ($48 | 0) == (0 | 0);
         if ($cmp368) block44 : {
          $R332$3 = 0;
          break do_once$6;
         } else block45 : {
          $R332$1 = $48;
          $RP360$1 = $child361;
         }
        } else block46 : {
         $R332$1 = $47;
         $RP360$1 = $arrayidx362;
        }
        while_out$7 : do block47 : {
         $arrayidx374 = $R332$1 + 20 | 0;
         $49 = HEAPU32[$arrayidx374 >> 2] | 0;
         $cmp375 = ($49 | 0) == (0 | 0);
         if (($cmp375 | 0) == (0 | 0)) block48 : {
          $R332$1 = $49;
          $RP360$1 = $arrayidx374;
          continue while_out$7;
         }
         $arrayidx379 = $R332$1 + 16 | 0;
         $50 = HEAPU32[$arrayidx379 >> 2] | 0;
         $cmp380 = ($50 | 0) == (0 | 0);
         if ($cmp380) block49 : {
          $R332$1$lcssa = $R332$1;
          $RP360$1$lcssa = $RP360$1;
          break while_out$7;
         } else block50 : {
          $R332$1 = $50;
          $RP360$1 = $arrayidx379;
         }
         continue while_out$7;
        } while (0);
        $51 = HEAPU32[192 >> 2] | 0;
        $cmp386 = ($RP360$1$lcssa >>> 0 | 0) >>> 0 < ($51 >>> 0 | 0) >>> 0;
        if ($cmp386) _abort(); else block51 : {
         HEAP32[$RP360$1$lcssa >> 2] = 0;
         $R332$3 = $R332$1$lcssa;
         break do_once$6;
        }
       } else block52 : {
        $fd338 = $add$ptr6 + 8 | 0;
        $43 = HEAPU32[$fd338 >> 2] | 0;
        $44 = HEAPU32[192 >> 2] | 0;
        $cmp340 = ($43 >>> 0 | 0) >>> 0 < ($44 >>> 0 | 0) >>> 0;
        if ($cmp340) _abort();
        $bk343 = $43 + 12 | 0;
        $45 = HEAPU32[$bk343 >> 2] | 0;
        $cmp344 = ($45 | 0) == ($add$ptr6 | 0);
        if (($cmp344 | 0) == (0 | 0)) _abort();
        $fd347 = $42 + 8 | 0;
        $46 = HEAPU32[$fd347 >> 2] | 0;
        $cmp348 = ($46 | 0) == ($add$ptr6 | 0);
        if ($cmp348) block53 : {
         HEAP32[$bk343 >> 2] = $42;
         HEAP32[$fd347 >> 2] = $43;
         $R332$3 = $42;
         break do_once$6;
        } else _abort();
       }
      }
      $cmp395 = ($41 | 0) == (0 | 0);
      if (($cmp395 | 0) == (0 | 0)) block54 : {
       $index399 = $add$ptr6 + 28 | 0;
       $52 = HEAPU32[$index399 >> 2] | 0;
       $arrayidx400 = 480 + ($52 << 2 | 0) | 0;
       $53 = HEAPU32[$arrayidx400 >> 2] | 0;
       $cmp401 = ($add$ptr6 | 0) == ($53 | 0);
       if ($cmp401) block55 : {
        HEAP32[$arrayidx400 >> 2] = $R332$3;
        $cond292 = ($R332$3 | 0) == (0 | 0);
        if ($cond292) block56 : {
         $shl408 = 1 << $52 | 0;
         $neg409 = $shl408 ^ 4294967295 | 0;
         $54 = HEAPU32[180 >> 2] | 0;
         $and410 = $54 & $neg409 | 0;
         HEAP32[180 >> 2] = $and410;
         break do_once$5;
        }
       } else block57 : {
        $55 = HEAPU32[192 >> 2] | 0;
        $cmp413 = ($41 >>> 0 | 0) >>> 0 < ($55 >>> 0 | 0) >>> 0;
        if ($cmp413) _abort();
        $arrayidx419 = $41 + 16 | 0;
        $56 = HEAPU32[$arrayidx419 >> 2] | 0;
        $cmp420 = ($56 | 0) == ($add$ptr6 | 0);
        if ($cmp420) HEAP32[$arrayidx419 >> 2] = $R332$3; else block58 : {
         $arrayidx427 = $41 + 20 | 0;
         HEAP32[$arrayidx427 >> 2] = $R332$3;
        }
        $cmp432 = ($R332$3 | 0) == (0 | 0);
        if ($cmp432) break do_once$5;
       }
       $57 = HEAPU32[192 >> 2] | 0;
       $cmp435 = ($R332$3 >>> 0 | 0) >>> 0 < ($57 >>> 0 | 0) >>> 0;
       if ($cmp435) _abort();
       $parent442 = $R332$3 + 24 | 0;
       HEAP32[$parent442 >> 2] = $41;
       $child443 = $add$ptr6 + 16 | 0;
       $58 = HEAPU32[$child443 >> 2] | 0;
       $cmp445 = ($58 | 0) == (0 | 0);
       do_once$9 : {
        if (($cmp445 | 0) == (0 | 0)) block59 : {
         $cmp448 = ($58 >>> 0 | 0) >>> 0 < ($57 >>> 0 | 0) >>> 0;
         if ($cmp448) _abort(); else block60 : {
          $arrayidx454 = $R332$3 + 16 | 0;
          HEAP32[$arrayidx454 >> 2] = $58;
          $parent455 = $58 + 24 | 0;
          HEAP32[$parent455 >> 2] = $R332$3;
          break do_once$9;
         }
        }
       }
       $arrayidx460 = $child443 + 4 | 0;
       $59 = HEAPU32[$arrayidx460 >> 2] | 0;
       $cmp461 = ($59 | 0) == (0 | 0);
       if (($cmp461 | 0) == (0 | 0)) block61 : {
        $60 = HEAPU32[192 >> 2] | 0;
        $cmp464 = ($59 >>> 0 | 0) >>> 0 < ($60 >>> 0 | 0) >>> 0;
        if ($cmp464) _abort(); else block62 : {
         $arrayidx470 = $R332$3 + 20 | 0;
         HEAP32[$arrayidx470 >> 2] = $59;
         $parent471 = $59 + 24 | 0;
         HEAP32[$parent471 >> 2] = $R332$3;
         break do_once$5;
        }
       }
      }
     }
    }
    $or480 = $add267 | 1 | 0;
    $head481 = $p$1 + 4 | 0;
    HEAP32[$head481 >> 2] = $or480;
    $add$ptr482 = $p$1 + $add267 | 0;
    HEAP32[$add$ptr482 >> 2] = $add267;
    $61 = HEAPU32[196 >> 2] | 0;
    $cmp484 = ($p$1 | 0) == ($61 | 0);
    if ($cmp484) block63 : {
     HEAP32[184 >> 2] = $add267;
     break topmost;
    } else $psize$2 = $add267;
   } else block64 : {
    $and495 = $28 & 4294967294 | 0;
    HEAP32[$head231 >> 2] = $and495;
    $or496 = $psize$1 | 1 | 0;
    $head497 = $p$1 + 4 | 0;
    HEAP32[$head497 >> 2] = $or496;
    $add$ptr498 = $p$1 + $psize$1 | 0;
    HEAP32[$add$ptr498 >> 2] = $psize$1;
    $psize$2 = $psize$1;
   }
   $shr501 = $psize$2 >>> 3 | 0;
   $cmp502 = ($psize$2 >>> 0 | 0) >>> 0 < 256 >>> 0;
   if ($cmp502) block65 : {
    $shl508 = $shr501 << 1 | 0;
    $arrayidx509 = 216 + ($shl508 << 2 | 0) | 0;
    $62 = HEAPU32[176 >> 2] | 0;
    $shl511 = 1 << $shr501 | 0;
    $and512 = $62 & $shl511 | 0;
    $tobool513 = ($and512 | 0) == (0 | 0);
    if ($tobool513) block66 : {
     $or516 = $62 | $shl511 | 0;
     HEAP32[176 >> 2] = $or516;
     $$pre = $arrayidx509 + 8 | 0;
     $$pre$phiZ2D = $$pre;
     $F510$0 = $arrayidx509;
    } else block67 : {
     $63 = $arrayidx509 + 8 | 0;
     $64 = HEAPU32[$63 >> 2] | 0;
     $65 = HEAPU32[192 >> 2] | 0;
     $cmp519 = ($64 >>> 0 | 0) >>> 0 < ($65 >>> 0 | 0) >>> 0;
     if ($cmp519) _abort(); else block68 : {
      $$pre$phiZ2D = $63;
      $F510$0 = $64;
     }
    }
    HEAP32[$$pre$phiZ2D >> 2] = $p$1;
    $bk529 = $F510$0 + 12 | 0;
    HEAP32[$bk529 >> 2] = $p$1;
    $fd530 = $p$1 + 8 | 0;
    HEAP32[$fd530 >> 2] = $F510$0;
    $bk531 = $p$1 + 12 | 0;
    HEAP32[$bk531 >> 2] = $arrayidx509;
    break topmost;
   }
   $shr535 = $psize$2 >>> 8 | 0;
   $cmp536 = ($shr535 | 0) == (0 | 0);
   if ($cmp536) $I534$0 = 0; else block69 : {
    $cmp540 = ($psize$2 >>> 0 | 0) >>> 0 > 16777215 >>> 0;
    if ($cmp540) $I534$0 = 31; else block70 : {
     $sub = $shr535 + 1048320 | 0;
     $shr544 = $sub >>> 16 | 0;
     $and545 = $shr544 & 8 | 0;
     $shl546 = $shr535 << $and545 | 0;
     $sub547 = $shl546 + 520192 | 0;
     $shr548 = $sub547 >>> 16 | 0;
     $and549 = $shr548 & 4 | 0;
     $add550 = $and549 | $and545 | 0;
     $shl551 = $shl546 << $and549 | 0;
     $sub552 = $shl551 + 245760 | 0;
     $shr553 = $sub552 >>> 16 | 0;
     $and554 = $shr553 & 2 | 0;
     $add555 = $add550 | $and554 | 0;
     $sub556 = 14 - $add555 | 0;
     $shl557 = $shl551 << $and554 | 0;
     $shr558 = $shl557 >>> 15 | 0;
     $add559 = $sub556 + $shr558 | 0;
     $shl560 = $add559 << 1 | 0;
     $add561 = $add559 + 7 | 0;
     $shr562 = $psize$2 >>> $add561 | 0;
     $and563 = $shr562 & 1 | 0;
     $add564 = $and563 | $shl560 | 0;
     $I534$0 = $add564;
    }
   }
   $arrayidx567 = 480 + ($I534$0 << 2 | 0) | 0;
   $index568 = $p$1 + 28 | 0;
   HEAP32[$index568 >> 2] = $I534$0;
   $child569 = $p$1 + 16 | 0;
   $arrayidx570 = $p$1 + 20 | 0;
   HEAP32[$arrayidx570 >> 2] = 0;
   HEAP32[$child569 >> 2] = 0;
   $66 = HEAPU32[180 >> 2] | 0;
   $shl573 = 1 << $I534$0 | 0;
   $and574 = $66 & $shl573 | 0;
   $tobool575 = ($and574 | 0) == (0 | 0);
   do_once$10 : {
    if ($tobool575) block71 : {
     $or578 = $66 | $shl573 | 0;
     HEAP32[180 >> 2] = $or578;
     HEAP32[$arrayidx567 >> 2] = $p$1;
     $parent579 = $p$1 + 24 | 0;
     HEAP32[$parent579 >> 2] = $arrayidx567;
     $bk580 = $p$1 + 12 | 0;
     HEAP32[$bk580 >> 2] = $p$1;
     $fd581 = $p$1 + 8 | 0;
     HEAP32[$fd581 >> 2] = $p$1;
    } else block72 : {
     $67 = HEAPU32[$arrayidx567 >> 2] | 0;
     $cmp584 = ($I534$0 | 0) == (31 | 0);
     $shr586 = $I534$0 >>> 1 | 0;
     $sub589 = 25 - $shr586 | 0;
     if ($cmp584) wasm2asm_i32$0 = 0; else wasm2asm_i32$0 = $sub589;
     $cond = wasm2asm_i32$0;
     $shl590 = $psize$2 << $cond | 0;
     $K583$0 = $shl590;
     $T$0 = $67;
     while_out$11 : do block73 : {
      $head591 = $T$0 + 4 | 0;
      $68 = HEAPU32[$head591 >> 2] | 0;
      $and592 = $68 & 4294967288 | 0;
      $cmp593 = ($and592 | 0) == ($psize$2 | 0);
      if ($cmp593) block74 : {
       $T$0$lcssa = $T$0;
       label = 130;
       break while_out$11;
      }
      $shr596 = $K583$0 >>> 31 | 0;
      $arrayidx599 = ($T$0 + 16 | 0) + ($shr596 << 2 | 0) | 0;
      $shl600 = $K583$0 << 1 | 0;
      $69 = HEAPU32[$arrayidx599 >> 2] | 0;
      $cmp601 = ($69 | 0) == (0 | 0);
      if ($cmp601) block75 : {
       $T$0$lcssa319 = $T$0;
       $arrayidx599$lcssa = $arrayidx599;
       label = 127;
       break while_out$11;
      } else block76 : {
       $K583$0 = $shl600;
       $T$0 = $69;
      }
      continue while_out$11;
     } while (0);
     if ((label | 0) == (127 | 0)) block77 : {
      $70 = HEAPU32[192 >> 2] | 0;
      $cmp605 = ($arrayidx599$lcssa >>> 0 | 0) >>> 0 < ($70 >>> 0 | 0) >>> 0;
      if ($cmp605) _abort(); else block78 : {
       HEAP32[$arrayidx599$lcssa >> 2] = $p$1;
       $parent610 = $p$1 + 24 | 0;
       HEAP32[$parent610 >> 2] = $T$0$lcssa319;
       $bk611 = $p$1 + 12 | 0;
       HEAP32[$bk611 >> 2] = $p$1;
       $fd612 = $p$1 + 8 | 0;
       HEAP32[$fd612 >> 2] = $p$1;
       break do_once$10;
      }
     } else if ((label | 0) == (130 | 0)) block79 : {
      $fd620 = $T$0$lcssa + 8 | 0;
      $71 = HEAPU32[$fd620 >> 2] | 0;
      $72 = HEAPU32[192 >> 2] | 0;
      $cmp624 = ($71 >>> 0 | 0) >>> 0 >= ($72 >>> 0 | 0) >>> 0;
      $not$cmp621 = ($T$0$lcssa >>> 0 | 0) >>> 0 >= ($72 >>> 0 | 0) >>> 0;
      $73 = $cmp624 & $not$cmp621 | 0;
      if ($73) block80 : {
       $bk631 = $71 + 12 | 0;
       HEAP32[$bk631 >> 2] = $p$1;
       HEAP32[$fd620 >> 2] = $p$1;
       $fd633 = $p$1 + 8 | 0;
       HEAP32[$fd633 >> 2] = $71;
       $bk634 = $p$1 + 12 | 0;
       HEAP32[$bk634 >> 2] = $T$0$lcssa;
       $parent635 = $p$1 + 24 | 0;
       HEAP32[$parent635 >> 2] = 0;
       break do_once$10;
      } else _abort();
     }
    }
   }
   $74 = HEAPU32[208 >> 2] | 0;
   $dec = $74 + 4294967295 | 0;
   HEAP32[208 >> 2] = $dec;
   $cmp640 = ($dec | 0) == (0 | 0);
   if ($cmp640) $sp$0$in$i = 632; else break topmost;
   while_out$13 : do block81 : {
    $sp$0$i = HEAPU32[$sp$0$in$i >> 2] | 0;
    $cmp$i = ($sp$0$i | 0) == (0 | 0);
    $next4$i = $sp$0$i + 8 | 0;
    if ($cmp$i) break while_out$13; else $sp$0$in$i = $next4$i;
    continue while_out$13;
   } while (0);
   HEAP32[208 >> 2] = 4294967295;
   break topmost;
  }
 }
 
 function runPostSets() {
  
 }
 
 function _i64Subtract(a, b, c, d) {
  a = a | 0;
  b = b | 0;
  c = c | 0;
  d = d | 0;
  var l = 0, h = 0, wasm2asm_i32$0 = 0;
  topmost : {
   l = (a - c | 0) >>> 0 | 0;
   h = (b - d | 0) >>> 0 | 0;
   h = ((b - d | 0) - ((c >>> 0 | 0) >>> 0 > (a >>> 0 | 0) >>> 0) | 0) >>> 0 | 0;
   block0 : {
    HEAP32[168 >> 2] = h;
    wasm2asm_i32$0 = l;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _i64Add(a, b, c, d) {
  a = a | 0;
  b = b | 0;
  c = c | 0;
  d = d | 0;
  var l = 0, h = 0, wasm2asm_i32$0 = 0;
  topmost : {
   l = (a + c | 0) >>> 0 | 0;
   h = ((b + d | 0) + ((l >>> 0 | 0) >>> 0 < (a >>> 0 | 0) >>> 0) | 0) >>> 0 | 0;
   block0 : {
    HEAP32[168 >> 2] = h;
    wasm2asm_i32$0 = l;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _memset(ptr, value, num) {
  ptr = ptr | 0;
  value = value | 0;
  num = num | 0;
  var stop = 0, value4 = 0, stop4 = 0, unaligned = 0, wasm2asm_i32$0 = 0;
  topmost : {
   stop = ptr + num | 0;
   if ((num | 0) >= (20 | 0)) block0 : {
    value = value & 255 | 0;
    unaligned = ptr & 3 | 0;
    value4 = value | (value << 8 | 0) | 0 | (value << 16 | 0) | 0 | (value << 24 | 0) | 0;
    stop4 = stop & (3 ^ 4294967295 | 0) | 0;
    if (unaligned) block1 : {
     unaligned = (ptr + 4 | 0) - unaligned | 0;
     while_out$0 : do block2 : {
      if ((ptr | 0) < (unaligned | 0)) {} else break while_out$0;
      block3 : {
       HEAP8[ptr >> 0] = value;
       ptr = ptr + 1 | 0;
      }
      continue while_out$0;
     } while (0);
    }
    while_out$2 : do block4 : {
     if ((ptr | 0) < (stop4 | 0)) {} else break while_out$2;
     block5 : {
      HEAP32[ptr >> 2] = value4;
      ptr = ptr + 4 | 0;
     }
     continue while_out$2;
    } while (0);
   }
   while_out$4 : do block6 : {
    if ((ptr | 0) < (stop | 0)) {} else break while_out$4;
    block7 : {
     HEAP8[ptr >> 0] = value;
     ptr = ptr + 1 | 0;
    }
    continue while_out$4;
   } while (0);
   wasm2asm_i32$0 = ptr - num | 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _bitshift64Lshr(low, high, bits) {
  low = low | 0;
  high = high | 0;
  bits = bits | 0;
  var ander = 0, wasm2asm_i32$0 = 0;
  topmost : {
   if ((bits | 0) < (32 | 0)) block0 : {
    ander = (1 << bits | 0) - 1 | 0;
    HEAP32[168 >> 2] = high >>> bits | 0;
    wasm2asm_i32$0 = low >>> bits | 0 | ((high & ander | 0) << (32 - bits | 0) | 0) | 0;
    break topmost;
   }
   HEAP32[168 >> 2] = 0;
   wasm2asm_i32$0 = high >>> (bits - 32 | 0) | 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _bitshift64Shl(low, high, bits) {
  low = low | 0;
  high = high | 0;
  bits = bits | 0;
  var ander = 0, wasm2asm_i32$0 = 0;
  topmost : {
   if ((bits | 0) < (32 | 0)) block0 : {
    ander = (1 << bits | 0) - 1 | 0;
    HEAP32[168 >> 2] = high << bits | 0 | ((low & (ander << (32 - bits | 0) | 0) | 0) >>> (32 - bits | 0) | 0) | 0;
    wasm2asm_i32$0 = low << bits | 0;
    break topmost;
   }
   HEAP32[168 >> 2] = low << (bits - 32 | 0) | 0;
   wasm2asm_i32$0 = 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _memcpy(dest, src, num) {
  dest = dest | 0;
  src = src | 0;
  num = num | 0;
  var ret = 0, wasm2asm_i32$0 = 0;
  topmost : {
   if ((num | 0) >= (4096 | 0)) {
    wasm2asm_i32$0 = _emscripten_memcpy_big(dest | 0, src | 0, num | 0) | 0;
    break topmost;
   }
   ret = dest;
   if ((dest & 3 | 0 | 0) == (src & 3 | 0 | 0)) block0 : {
    while_out$0 : do block1 : {
     if (dest & 3 | 0) {} else break while_out$0;
     block2 : {
      if ((num | 0) == (0 | 0)) {
       wasm2asm_i32$0 = ret;
       break topmost;
      }
      HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
      dest = dest + 1 | 0;
      src = src + 1 | 0;
      num = num - 1 | 0;
     }
     continue while_out$0;
    } while (0);
    while_out$2 : do block3 : {
     if ((num | 0) >= (4 | 0)) {} else break while_out$2;
     block4 : {
      HEAP32[dest >> 2] = HEAPU32[src >> 2] | 0;
      dest = dest + 4 | 0;
      src = src + 4 | 0;
      num = num - 4 | 0;
     }
     continue while_out$2;
    } while (0);
   }
   while_out$4 : do block5 : {
    if ((num | 0) > (0 | 0)) {} else break while_out$4;
    block6 : {
     HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
     dest = dest + 1 | 0;
     src = src + 1 | 0;
     num = num - 1 | 0;
    }
    continue while_out$4;
   } while (0);
   wasm2asm_i32$0 = ret;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _bitshift64Ashr(low, high, bits) {
  low = low | 0;
  high = high | 0;
  bits = bits | 0;
  var ander = 0, wasm2asm_i32$2 = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   if ((bits | 0) < (32 | 0)) block0 : {
    ander = (1 << bits | 0) - 1 | 0;
    HEAP32[168 >> 2] = high >> bits | 0;
    wasm2asm_i32$0 = low >>> bits | 0 | ((high & ander | 0) << (32 - bits | 0) | 0) | 0;
    break topmost;
   }
   wasm2asm_i32$1 = 168;
   if ((high | 0) < (0 | 0)) wasm2asm_i32$2 = 4294967295; else wasm2asm_i32$2 = 0;
   HEAP32[wasm2asm_i32$1 >> 2] = wasm2asm_i32$2
   wasm2asm_i32$0 = high >> (bits - 32 | 0) | 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function _llvm_cttz_i32(x) {
  x = x | 0;
  var ret = 0, wasm2asm_i32$0 = 0;
  topmost : {
   ret = HEAP8[((HEAPU32[40 >> 2] | 0) + (x & 255 | 0) | 0) >> 0] | 0;
   if ((ret | 0) < (8 | 0)) {
    wasm2asm_i32$0 = ret;
    break topmost;
   }
   ret = HEAP8[((HEAPU32[40 >> 2] | 0) + ((x >> 8 | 0) & 255 | 0) | 0) >> 0] | 0;
   if ((ret | 0) < (8 | 0)) {
    wasm2asm_i32$0 = ret + 8 | 0;
    break topmost;
   }
   ret = HEAP8[((HEAPU32[40 >> 2] | 0) + ((x >> 16 | 0) & 255 | 0) | 0) >> 0] | 0;
   if ((ret | 0) < (8 | 0)) {
    wasm2asm_i32$0 = ret + 16 | 0;
    break topmost;
   }
   wasm2asm_i32$0 = (HEAP8[((HEAPU32[40 >> 2] | 0) + (x >>> 24 | 0) | 0) >> 0] | 0) + 24 | 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___muldsi3($a, $b) {
  $a = $a | 0;
  $b = $b | 0;
  var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   $1 = $a & 65535 | 0;
   $2 = $b & 65535 | 0;
   $3 = Math_imul($2, $1);
   $6 = $a >>> 16 | 0;
   $8 = ($3 >>> 16 | 0) + Math_imul($2, $6) | 0;
   $11 = $b >>> 16 | 0;
   $12 = Math_imul($11, $1);
   block0 : {
    HEAP32[168 >> 2] = (($8 >>> 16 | 0) + Math_imul($11, $6) | 0) + ((($8 & 65535 | 0) + $12 | 0) >>> 16 | 0) | 0;
    wasm2asm_i32$0 = 0 | (($8 + $12 | 0) << 16 | 0 | ($3 & 65535 | 0) | 0) | 0;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___divdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $7$0 = 0, $7$1 = 0, $8$0 = 0, $10$0 = 0, wasm2asm_i32$5 = 0, wasm2asm_i32$4 = 0, wasm2asm_i32$3 = 0, wasm2asm_i32$2 = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   wasm2asm_i32$2 = $a$1 >> 31 | 0;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $1$0 = wasm2asm_i32$1;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 31;
   wasm2asm_i32$2 = wasm2asm_i32$4 >> wasm2asm_i32$5 | 0;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $1$1 = wasm2asm_i32$1;
   wasm2asm_i32$2 = $b$1 >> 31 | 0;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $2$0 = wasm2asm_i32$1;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 31;
   wasm2asm_i32$2 = wasm2asm_i32$4 >> wasm2asm_i32$5 | 0;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $2$1 = wasm2asm_i32$1;
   $4$0 = _i64Subtract($1$0 ^ $a$0 | 0 | 0, $1$1 ^ $a$1 | 0 | 0, $1$0 | 0, $1$1 | 0) | 0;
   $4$1 = HEAPU32[168 >> 2] | 0;
   $6$0 = _i64Subtract($2$0 ^ $b$0 | 0 | 0, $2$1 ^ $b$1 | 0 | 0, $2$0 | 0, $2$1 | 0) | 0;
   $7$0 = $2$0 ^ $1$0 | 0;
   $7$1 = $2$1 ^ $1$1 | 0;
   $8$0 = ___udivmoddi4($4$0 | 0, $4$1 | 0, $6$0 | 0, HEAPU32[168 >> 2] | 0 | 0, 0 | 0) | 0;
   $10$0 = _i64Subtract($8$0 ^ $7$0 | 0 | 0, (HEAPU32[168 >> 2] | 0) ^ $7$1 | 0 | 0, $7$0 | 0, $7$1 | 0) | 0;
   wasm2asm_i32$0 = $10$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___remdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $10$0 = 0, $10$1 = 0, __stackBase__ = 0, wasm2asm_i32$5 = 0, wasm2asm_i32$4 = 0, wasm2asm_i32$3 = 0, wasm2asm_i32$2 = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   __stackBase__ = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 16 | 0;
   $rem = __stackBase__;
   wasm2asm_i32$2 = $a$1 >> 31 | 0;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $1$0 = wasm2asm_i32$1;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 31;
   wasm2asm_i32$2 = wasm2asm_i32$4 >> wasm2asm_i32$5 | 0;
   if (($a$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $1$1 = wasm2asm_i32$1;
   wasm2asm_i32$2 = $b$1 >> 31 | 0;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $2$0 = wasm2asm_i32$1;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 31;
   wasm2asm_i32$2 = wasm2asm_i32$4 >> wasm2asm_i32$5 | 0;
   if (($b$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
   wasm2asm_i32$5 = 1;
   wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
   wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
   $2$1 = wasm2asm_i32$1;
   $4$0 = _i64Subtract($1$0 ^ $a$0 | 0 | 0, $1$1 ^ $a$1 | 0 | 0, $1$0 | 0, $1$1 | 0) | 0;
   $4$1 = HEAPU32[168 >> 2] | 0;
   $6$0 = _i64Subtract($2$0 ^ $b$0 | 0 | 0, $2$1 ^ $b$1 | 0 | 0, $2$0 | 0, $2$1 | 0) | 0;
   ___udivmoddi4($4$0 | 0, $4$1 | 0, $6$0 | 0, HEAPU32[168 >> 2] | 0 | 0, $rem | 0) | 0;
   $10$0 = _i64Subtract((HEAPU32[$rem >> 2] | 0) ^ $1$0 | 0 | 0, (HEAPU32[($rem + 4 | 0) >> 2] | 0) ^ $1$1 | 0 | 0, $1$0 | 0, $1$1 | 0) | 0;
   $10$1 = HEAPU32[168 >> 2] | 0;
   HEAP32[8 >> 2] = __stackBase__;
   block0 : {
    HEAP32[168 >> 2] = $10$1;
    wasm2asm_i32$0 = $10$0;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___muldi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   $x_sroa_0_0_extract_trunc = $a$0;
   $y_sroa_0_0_extract_trunc = $b$0;
   $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc | 0, $y_sroa_0_0_extract_trunc | 0) | 0;
   $1$1 = HEAPU32[168 >> 2] | 0;
   $2 = Math_imul($a$1, $y_sroa_0_0_extract_trunc);
   block0 : {
    HEAP32[168 >> 2] = (Math_imul($b$1, $x_sroa_0_0_extract_trunc) + $2 | 0) + $1$1 | 0 | ($1$1 & 0 | 0) | 0;
    wasm2asm_i32$0 = 0 | ($1$0 & 4294967295 | 0) | 0;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   $1$0 = ___udivmoddi4($a$0 | 0, $a$1 | 0, $b$0 | 0, $b$1 | 0, 0 | 0) | 0;
   wasm2asm_i32$0 = $1$0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, __stackBase__ = 0, wasm2asm_i32$0 = 0;
  topmost : {
   __stackBase__ = HEAPU32[8 >> 2] | 0;
   HEAP32[8 >> 2] = (HEAPU32[8 >> 2] | 0) + 16 | 0;
   $rem = __stackBase__;
   ___udivmoddi4($a$0 | 0, $a$1 | 0, $b$0 | 0, $b$1 | 0, $rem | 0) | 0;
   HEAP32[8 >> 2] = __stackBase__;
   block0 : {
    HEAP32[168 >> 2] = HEAPU32[($rem + 4 | 0) >> 2] | 0;
    wasm2asm_i32$0 = HEAPU32[$rem >> 2] | 0;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  $rem = $rem | 0;
  var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0, wasm2asm_i32$11 = 0, wasm2asm_i32$10 = 0, wasm2asm_i32$9 = 0, wasm2asm_i32$8 = 0, wasm2asm_i32$7 = 0, wasm2asm_i32$6 = 0, wasm2asm_i32$2 = 0, wasm2asm_i32$3 = 0, wasm2asm_i32$4 = 0, wasm2asm_i32$5 = 0, wasm2asm_i32$1 = 0, wasm2asm_i32$0 = 0;
  topmost : {
   $n_sroa_0_0_extract_trunc = $a$0;
   $n_sroa_1_4_extract_shift$0 = $a$1;
   $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
   $d_sroa_0_0_extract_trunc = $b$0;
   $d_sroa_1_4_extract_shift$0 = $b$1;
   $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
   if (($n_sroa_1_4_extract_trunc | 0) == (0 | 0)) block0 : {
    $4 = ($rem | 0) != (0 | 0);
    if (($d_sroa_1_4_extract_trunc | 0) == (0 | 0)) block1 : {
     if ($4) block2 : {
      HEAP32[$rem >> 2] = (($n_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) % (($d_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) | 0;
      HEAP32[($rem + 4 | 0) >> 2] = 0;
     }
     $_0$1 = 0;
     $_0$0 = ((($n_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) / (($d_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) | 0) >>> 0 | 0;
     block3 : {
      HEAP32[168 >> 2] = $_0$1;
      wasm2asm_i32$0 = $_0$0;
     }
     break topmost;
    } else block4 : {
     if (($4 | 0) == (0 | 0)) block5 : {
      $_0$1 = 0;
      $_0$0 = 0;
      block6 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     HEAP32[$rem >> 2] = $a$0 & 4294967295 | 0;
     HEAP32[($rem + 4 | 0) >> 2] = $a$1 & 0 | 0;
     $_0$1 = 0;
     $_0$0 = 0;
     block7 : {
      HEAP32[168 >> 2] = $_0$1;
      wasm2asm_i32$0 = $_0$0;
     }
     break topmost;
    }
   }
   $17 = ($d_sroa_1_4_extract_trunc | 0) == (0 | 0);
   do_once$0 : {
    if (($d_sroa_0_0_extract_trunc | 0) == (0 | 0)) block8 : {
     if ($17) block9 : {
      if (($rem | 0) != (0 | 0)) block10 : {
       HEAP32[$rem >> 2] = (($n_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) % (($d_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) | 0;
       HEAP32[($rem + 4 | 0) >> 2] = 0;
      }
      $_0$1 = 0;
      $_0$0 = ((($n_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) / (($d_sroa_0_0_extract_trunc >>> 0 | 0) >>> 0) | 0) >>> 0 | 0;
      block11 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     if (($n_sroa_0_0_extract_trunc | 0) == (0 | 0)) block12 : {
      if (($rem | 0) != (0 | 0)) block13 : {
       HEAP32[$rem >> 2] = 0;
       HEAP32[($rem + 4 | 0) >> 2] = (($n_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) % (($d_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) | 0;
      }
      $_0$1 = 0;
      $_0$0 = ((($n_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) / (($d_sroa_1_4_extract_trunc >>> 0 | 0) >>> 0) | 0) >>> 0 | 0;
      block14 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
     if (($37 & $d_sroa_1_4_extract_trunc | 0 | 0) == (0 | 0)) block15 : {
      if (($rem | 0) != (0 | 0)) block16 : {
       HEAP32[$rem >> 2] = 0 | ($a$0 & 4294967295 | 0) | 0;
       HEAP32[($rem + 4 | 0) >> 2] = $37 & $n_sroa_1_4_extract_trunc | 0 | ($a$1 & 0 | 0) | 0;
      }
      $_0$1 = 0;
      $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0 | 0) | 0;
      block17 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     $49 = Math_clz32($d_sroa_1_4_extract_trunc);
     $51 = $49 - Math_clz32($n_sroa_1_4_extract_trunc) | 0;
     if (($51 >>> 0 | 0) >>> 0 <= 30 >>> 0) block18 : {
      $57 = $51 + 1 | 0;
      $58 = 31 - $51 | 0;
      $sr_1_ph = $57;
      $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | 0 | ($n_sroa_0_0_extract_trunc >>> ($57 >>> 0 | 0) | 0) | 0;
      $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0 | 0) | 0;
      $q_sroa_0_1_ph = 0;
      $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58 | 0;
      break do_once$0;
     }
     if (($rem | 0) == (0 | 0)) block19 : {
      $_0$1 = 0;
      $_0$0 = 0;
      block20 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     HEAP32[$rem >> 2] = 0 | ($a$0 & 4294967295 | 0) | 0;
     HEAP32[($rem + 4 | 0) >> 2] = $n_sroa_1_4_extract_shift$0 | ($a$1 & 0 | 0) | 0;
     $_0$1 = 0;
     $_0$0 = 0;
     block21 : {
      HEAP32[168 >> 2] = $_0$1;
      wasm2asm_i32$0 = $_0$0;
     }
     break topmost;
    } else block22 : {
     if (($17 | 0) == (0 | 0)) block23 : {
      $117 = Math_clz32($d_sroa_1_4_extract_trunc);
      $119 = $117 - Math_clz32($n_sroa_1_4_extract_trunc) | 0;
      if (($119 >>> 0 | 0) >>> 0 <= 31 >>> 0) block24 : {
       $125 = $119 + 1 | 0;
       $126 = 31 - $119 | 0;
       $130 = ($119 - 31 | 0) >> 31 | 0;
       $sr_1_ph = $125;
       $r_sroa_0_1_ph = ($n_sroa_0_0_extract_trunc >>> ($125 >>> 0 | 0) | 0) & $130 | 0 | ($n_sroa_1_4_extract_trunc << $126 | 0) | 0;
       $r_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc >>> ($125 >>> 0 | 0) | 0) & $130 | 0;
       $q_sroa_0_1_ph = 0;
       $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126 | 0;
       break do_once$0;
      }
      if (($rem | 0) == (0 | 0)) block25 : {
       $_0$1 = 0;
       $_0$0 = 0;
       block26 : {
        HEAP32[168 >> 2] = $_0$1;
        wasm2asm_i32$0 = $_0$0;
       }
       break topmost;
      }
      HEAP32[$rem >> 2] = 0 | ($a$0 & 4294967295 | 0) | 0;
      HEAP32[($rem + 4 | 0) >> 2] = $n_sroa_1_4_extract_shift$0 | ($a$1 & 0 | 0) | 0;
      $_0$1 = 0;
      $_0$0 = 0;
      block27 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
     $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
     if (($66 & $d_sroa_0_0_extract_trunc | 0 | 0) != (0 | 0)) block28 : {
      $86 = Math_clz32($d_sroa_0_0_extract_trunc) + 33 | 0;
      $88 = $86 - Math_clz32($n_sroa_1_4_extract_trunc) | 0;
      $89 = 64 - $88 | 0;
      $91 = 32 - $88 | 0;
      $92 = $91 >> 31 | 0;
      $95 = $88 - 32 | 0;
      $105 = $95 >> 31 | 0;
      $sr_1_ph = $88;
      $r_sroa_0_1_ph = (($91 - 1 | 0) >> 31 | 0) & ($n_sroa_1_4_extract_trunc >>> ($95 >>> 0 | 0) | 0) | 0 | (($n_sroa_1_4_extract_trunc << $91 | 0 | ($n_sroa_0_0_extract_trunc >>> ($88 >>> 0 | 0) | 0) | 0) & $105 | 0) | 0;
      $r_sroa_1_1_ph = $105 & ($n_sroa_1_4_extract_trunc >>> ($88 >>> 0 | 0) | 0) | 0;
      $q_sroa_0_1_ph = ($n_sroa_0_0_extract_trunc << $89 | 0) & $92 | 0;
      $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | 0 | ($n_sroa_0_0_extract_trunc >>> ($95 >>> 0 | 0) | 0) | 0) & $92 | 0 | (($n_sroa_0_0_extract_trunc << $91 | 0) & (($88 - 33 | 0) >> 31 | 0) | 0) | 0;
      break do_once$0;
     }
     if (($rem | 0) != (0 | 0)) block29 : {
      HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc | 0;
      HEAP32[($rem + 4 | 0) >> 2] = 0;
     }
     if (($d_sroa_0_0_extract_trunc | 0) == (1 | 0)) block30 : {
      $_0$1 = $n_sroa_1_4_extract_shift$0 | ($a$1 & 0 | 0) | 0;
      $_0$0 = 0 | ($a$0 & 4294967295 | 0) | 0;
      block31 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     } else block32 : {
      $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
      $_0$1 = 0 | ($n_sroa_1_4_extract_trunc >>> ($78 >>> 0 | 0) | 0) | 0;
      $_0$0 = $n_sroa_1_4_extract_trunc << (32 - $78 | 0) | 0 | ($n_sroa_0_0_extract_trunc >>> ($78 >>> 0 | 0) | 0) | 0;
      block33 : {
       HEAP32[168 >> 2] = $_0$1;
       wasm2asm_i32$0 = $_0$0;
      }
      break topmost;
     }
    }
   }
   if (($sr_1_ph | 0) == (0 | 0)) block34 : {
    $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
    $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
    $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
    $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = 0;
   } else block35 : {
    $d_sroa_0_0_insert_insert99$0 = 0 | ($b$0 & 4294967295 | 0) | 0;
    $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | ($b$1 & 0 | 0) | 0;
    $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, 4294967295 | 0, 4294967295 | 0) | 0;
    $137$1 = HEAPU32[168 >> 2] | 0;
    $q_sroa_1_1198 = $q_sroa_1_1_ph;
    $q_sroa_0_1199 = $q_sroa_0_1_ph;
    $r_sroa_1_1200 = $r_sroa_1_1_ph;
    $r_sroa_0_1201 = $r_sroa_0_1_ph;
    $sr_1202 = $sr_1_ph;
    $carry_0203 = 0;
    while_out$1 : do block36 : {
     $147 = $q_sroa_0_1199 >>> 31 | 0 | ($q_sroa_1_1198 << 1 | 0) | 0;
     $149 = $carry_0203 | ($q_sroa_0_1199 << 1 | 0) | 0;
     $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | 0 | ($q_sroa_1_1198 >>> 31 | 0) | 0) | 0;
     $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | 0 | ($r_sroa_1_1200 << 1 | 0) | 0;
     _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
     $150$1 = HEAPU32[168 >> 2] | 0;
     wasm2asm_i32$2 = $150$1 >> 31 | 0;
     if (($150$1 | 0) < (0 | 0)) wasm2asm_i32$4 = 4294967295; else wasm2asm_i32$4 = 0;
     wasm2asm_i32$5 = 1;
     wasm2asm_i32$3 = wasm2asm_i32$4 << wasm2asm_i32$5 | 0;
     wasm2asm_i32$1 = wasm2asm_i32$2 | wasm2asm_i32$3 | 0;
     $151$0 = wasm2asm_i32$1;
     $152 = $151$0 & 1 | 0;
     wasm2asm_i32$2 = $r_sroa_0_0_insert_insert42$0;
     wasm2asm_i32$3 = $r_sroa_0_0_insert_insert42$1;
     wasm2asm_i32$4 = $151$0 & $d_sroa_0_0_insert_insert99$0 | 0;
     if (($150$1 | 0) < (0 | 0)) wasm2asm_i32$10 = 4294967295; else wasm2asm_i32$10 = 0;
     wasm2asm_i32$11 = 31;
     wasm2asm_i32$8 = wasm2asm_i32$10 >> wasm2asm_i32$11 | 0;
     if (($150$1 | 0) < (0 | 0)) wasm2asm_i32$10 = 4294967295; else wasm2asm_i32$10 = 0;
     wasm2asm_i32$11 = 1;
     wasm2asm_i32$9 = wasm2asm_i32$10 << wasm2asm_i32$11 | 0;
     wasm2asm_i32$6 = wasm2asm_i32$8 | wasm2asm_i32$9 | 0;
     wasm2asm_i32$7 = $d_sroa_0_0_insert_insert99$1;
     wasm2asm_i32$5 = wasm2asm_i32$6 & wasm2asm_i32$7 | 0;
     wasm2asm_i32$1 = _i64Subtract(wasm2asm_i32$2 | 0, wasm2asm_i32$3 | 0, wasm2asm_i32$4 | 0, wasm2asm_i32$5 | 0) | 0;
     $154$0 = wasm2asm_i32$1;
     $r_sroa_0_0_extract_trunc = $154$0;
     $r_sroa_1_4_extract_trunc = HEAPU32[168 >> 2] | 0;
     $155 = $sr_1202 - 1 | 0;
     if (($155 | 0) == (0 | 0)) break while_out$1; else block37 : {
      $q_sroa_1_1198 = $147;
      $q_sroa_0_1199 = $149;
      $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
      $sr_1202 = $155;
      $carry_0203 = $152;
     }
     continue while_out$1;
    } while (0);
    $q_sroa_1_1_lcssa = $147;
    $q_sroa_0_1_lcssa = $149;
    $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
    $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = $152;
   }
   $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
   $q_sroa_0_0_insert_ext75$1 = 0;
   $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1 | 0;
   if (($rem | 0) != (0 | 0)) block38 : {
    HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa | 0;
    HEAP32[($rem + 4 | 0) >> 2] = $r_sroa_1_1_lcssa;
   }
   $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0 | 0) >>> 31 | 0 | ($q_sroa_0_0_insert_insert77$1 << 1 | 0) | 0 | (($q_sroa_0_0_insert_ext75$1 << 1 | 0 | ($q_sroa_0_0_insert_ext75$0 >>> 31 | 0) | 0) & 0 | 0) | 0 | $carry_0_lcssa$1 | 0;
   $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 | (0 >>> 31 | 0) | 0) & 4294967294 | 0 | $carry_0_lcssa$0 | 0;
   block39 : {
    HEAP32[168 >> 2] = $_0$1;
    wasm2asm_i32$0 = $_0$0;
   }
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function dynCall_ii(index, a1) {
  index = index | 0;
  a1 = a1 | 0;
  return FUNCTION_TABLE_ii[((index & 1 | 0) + 0 | 0) & 31](a1 | 0) | 0 | 0;
 }
 
 function dynCall_iiii(index, a1, a2, a3) {
  index = index | 0;
  a1 = a1 | 0;
  a2 = a2 | 0;
  a3 = a3 | 0;
  return FUNCTION_TABLE_iiii[((index & 7 | 0) + 2 | 0) & 31](a1 | 0, a2 | 0, a3 | 0) | 0 | 0;
 }
 
 function dynCall_vi(index, a1) {
  index = index | 0;
  a1 = a1 | 0;
  FUNCTION_TABLE_vi[((index & 7 | 0) + 10 | 0) & 31](a1 | 0)
 }
 
 function b0(p0) {
  p0 = p0 | 0;
  var wasm2asm_i32$0 = 0;
  topmost : {
   nullFunc_ii(0 | 0);
   wasm2asm_i32$0 = 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function b1(p0, p1, p2) {
  p0 = p0 | 0;
  p1 = p1 | 0;
  p2 = p2 | 0;
  var wasm2asm_i32$0 = 0;
  topmost : {
   nullFunc_iiii(1 | 0);
   wasm2asm_i32$0 = 0;
  }
  return wasm2asm_i32$0 | 0;
 }
 
 function b2(p0) {
  p0 = p0 | 0;
  nullFunc_vi(2 | 0)
 }
 
 var FUNCTION_TABLE_ii = [b0, ___stdio_close, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0, b0];
 var FUNCTION_TABLE_iiii = [b1, b1, b1, b1, ___stdout_write, ___stdio_seek, ___stdio_write, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1, b1];
 var FUNCTION_TABLE_vi = [b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, _cleanup, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2];
 return {
  _i64Subtract: _i64Subtract, 
  _free: _free, 
  _main: _main, 
  _i64Add: _i64Add, 
  _memset: _memset, 
  _malloc: _malloc, 
  _memcpy: _memcpy, 
  _bitshift64Lshr: _bitshift64Lshr, 
  _fflush: _fflush, 
  ___errno_location: ___errno_location, 
  _bitshift64Shl: _bitshift64Shl, 
  runPostSets: runPostSets, 
  stackAlloc: stackAlloc, 
  stackSave: stackSave, 
  stackRestore: stackRestore, 
  establishStackSpace: establishStackSpace, 
  setThrew: setThrew, 
  setTempRet0: setTempRet0, 
  getTempRet0: getTempRet0, 
  dynCall_ii: dynCall_ii, 
  dynCall_iiii: dynCall_iiii, 
  dynCall_vi: dynCall_vi
 };
}

