(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);
function hasDuplicateStrings(e){for(var t={},s=0;s<e.length;s++){var i=e[s];if(i in t)return!0;t[i]=!0}return!1}function invertObject(e){var t={};return Object.keys(e).forEach(function(s){e[s].forEach(function(e){t[e]||(t[e]=[]),t[e].push(s)})}),t}var TOO_MUCH_SYNERGY=100,SQUARES_PER_ROW=5,DEFAULT_PROFILE={defaultMinimumSynergy:-3,defaultMaximumSynergy:7,defaultMaximumIndividualSynergy:4.5,defaultMaximumSpill:2,defaultInitialOffset:1,defaultMaximumOffset:2,baselineTime:28.25,timePerDifficulty:.75},NORMAL_PROFILE={defaultMinimumSynergy:DEFAULT_PROFILE.defaultMinimumSynergy,defaultMaximumSynergy:DEFAULT_PROFILE.defaultMaximumSynergy,defaultMaximumIndividualSynergy:DEFAULT_PROFILE.defaultMaximumIndividualSynergy,defaultMaximumSpill:DEFAULT_PROFILE.defaultMaximumSpill,defaultInitialOffset:DEFAULT_PROFILE.defaultInitialOffset,defaultMaximumOffset:DEFAULT_PROFILE.defaultMaximumOffset,baselineTime:DEFAULT_PROFILE.baselineTime,timePerDifficulty:DEFAULT_PROFILE.timePerDifficulty},SHORT_PROFILE={defaultMinimumSynergy:DEFAULT_PROFILE.defaultMinimumSynergy,defaultMaximumSynergy:3,defaultMaximumIndividualSynergy:DEFAULT_PROFILE.defaultMaximumIndividualSynergy,defaultMaximumSpill:DEFAULT_PROFILE.defaultMaximumSpill,defaultInitialOffset:DEFAULT_PROFILE.defaultInitialOffset,defaultMaximumOffset:DEFAULT_PROFILE.defaultMaximumOffset,baselineTime:12,timePerDifficulty:.5},BLACKOUT_PROFILE={defaultMinimumSynergy:-10,defaultMaximumSynergy:10,defaultMaximumIndividualSynergy:DEFAULT_PROFILE.defaultMaximumIndividualSynergy,defaultMaximumSpill:DEFAULT_PROFILE.defaultMaximumSpill,defaultInitialOffset:2,defaultMaximumOffset:6,baselineTime:DEFAULT_PROFILE.baselineTime,timePerDifficulty:DEFAULT_PROFILE.timePerDifficulty},SHORTBLACKOUT_PROFILE={defaultMinimumSynergy:-4,defaultMaximumSynergy:4,defaultMaximumIndividualSynergy:DEFAULT_PROFILE.defaultMaximumIndividualSynergy,defaultMaximumSpill:DEFAULT_PROFILE.defaultMaximumSpill,defaultInitialOffset:2,defaultMaximumOffset:6,baselineTime:12,timePerDifficulty:.5};Array.prototype.sortNumerically=function(){return this.sort(function(e,t){return e-t})},Array.prototype.shuffled=function(){for(var e=this.slice(),t=0;t<e.length;t++){var s=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[s],e[s]=i}return e};var INDICES_PER_ROW={row1:[1,2,3,4,5],row2:[6,7,8,9,10],row3:[11,12,13,14,15],row4:[16,17,18,19,20],row5:[21,22,23,24,25],col1:[1,6,11,16,21],col2:[2,7,12,17,22],col3:[3,8,13,18,23],col4:[4,9,14,19,24],col5:[5,10,15,20,25],tlbr:[1,7,13,19,25],bltr:[5,9,13,17,21]},ROWS_PER_INDEX=invertObject(INDICES_PER_ROW),BingoGenerator=function(e,t){t||(t={}),this.language=t.lang||"name",this.mode=t.mode||"normal",this.seed=t.seed||Math.ceil(999999*Math.random()).toString(),e.info&&"true"===e.info.combined&&(e[this.mode]?e=e[this.mode]:e.normal?e=e.normal:console.log("bingoList doesn't contain a valid sub goal list for mode: \""+this.mode+'"')),this.goalsByDifficulty=e,this.rowtypeTimeSave=e.rowtypes,this.synergyFilters=e.synfilters||{},this.goalsList=[];for(var s=1;25>=s;s++)this.goalsList=this.goalsList.concat(e[s]);this.goalsList.sort(function(e,t){var s=e.time-t.time;return 0!==s?s:e.id>t.id?1:e.id<t.id?-1:0}),this.goalsByName={};for(var s=0;s<this.goalsList.length;s++){var i=this.goalsList[s];this.goalsByName[i.name]=i}this.profile=SHORT_PROFILE,this.baselineTime=t.baselineTime||this.profile.baselineTime,this.timePerDifficulty=t.timePerDifficulty||this.profile.timePerDifficulty,this.minimumSynergy=t.minimumSynergy||this.profile.defaultMinimumSynergy,this.maximumSynergy=t.maximumSynergy||this.profile.defaultMaximumSynergy,this.maximumIndividualSynergy=t.maximumIndividualSynergy||this.profile.defaultMaximumIndividualSynergy,this.maximumSpill=t.maximumSpill||this.profile.defaultMaximumSpill,this.initialOffset=t.initialOffset||this.profile.defaultInitialOffset,this.maximumOffset=t.maximumOffset||this.profile.defaultMaximumOffset,Math.seedrandom(this.seed)};BingoGenerator.prototype.makeCard=function(){this.bingoBoard=this.generateMagicSquare();for(var e=this.generatePopulationOrder(),t=1;25>=t;t++){var s=e[t],i=this.chooseGoalForPosition(s);if(!i.goal)return!1;this.bingoBoard[s].types=i.goal.types,this.bingoBoard[s].subtypes=i.goal.subtypes,this.bingoBoard[s].rowtypes=i.goal.rowtypes,this.bingoBoard[s].name=i.goal[this.language]||i.goal.name,this.bingoBoard[s].id=i.goal.id,this.bingoBoard[s].time=i.goal.time,this.bingoBoard[s].goal=i.goal,this.bingoBoard[s].synergy=i.synergy}return this.bingoBoard},BingoGenerator.prototype.generateMagicSquare=function(){for(var e=[],t=1;25>=t;t++){var s=this.difficulty(t);e[t]={difficulty:s,desiredTime:s*this.timePerDifficulty}}return e},BingoGenerator.prototype.chooseGoalForPosition=function(e){for(var t=this.bingoBoard[e].difficulty,s=t*this.timePerDifficulty,i=this.initialOffset;i<=this.maximumOffset;i++){var l=s-i,a=s+i,n=this.getGoalsInTimeRange(l,a);n=n.shuffled();for(var r=0;r<n.length;r++){var o=n[r];if(!(this.hasGoalOnBoard(o)||"blackout"===this.mode&&this.hasConflictsOnBoard(o))){var y=this.checkLine(e,o);if(this.maximumSynergy>=y.maxSynergy&&y.minSynergy>=this.minimumSynergy)return{goal:o,synergy:y.maxSynergy}}}}return!1},BingoGenerator.prototype.generatePopulationOrder=function(){var e=[];e[1]=13;var t=[1,7,19,25,5,9,17,21].shuffled();e=e.concat(t);var s=[2,3,4,6,8,10,11,12,14,15,16,18,20,22,23,24].shuffled();e=e.concat(s);for(var i=23;25>=i;i++){var l=this.getDifficultyIndex(i);if(0!==l){for(var a=1;25>a;a++)if(e[a]==l){e.splice(a,1);break}e.splice(1,0,l)}}return e},BingoGenerator.prototype.difficulty=function(e){var t=this.seed%1e3,s=t%8,i=Math.floor(s/2),l=s%2,a=t%5,n=t%3,r=Math.floor(t/120),o=[0];o.splice(l,0,1),o.splice(n,0,2),o.splice(i,0,3),o.splice(a,0,4),t=Math.floor(this.seed/1e3),t%=1e3,s=t%8,i=Math.floor(s/2),l=s%2,a=t%5,n=t%3,r=8*r+Math.floor(t/120);var u=[0];u.splice(l,0,1),u.splice(n,0,2),u.splice(i,0,3),u.splice(a,0,4),e--,r%=5,x=(e+r)%5,y=Math.floor(e/5);var f=o[(x+3*y)%5],p=u[(3*x+y)%5];return value=5*f+p,"long"==this.mode&&(value=Math.floor((value+25)/2)),value++,value},BingoGenerator.prototype.getShuffledGoals=function(e){return this.goalsByDifficulty[e].shuffled()},BingoGenerator.prototype.getDifficultyIndex=function(e){for(var t=1;25>=t;t++)if(this.bingoBoard[t].difficulty==e)return t;return 0},BingoGenerator.prototype.getGoalsInTimeRange=function(e,t){return this.goalsList.filter(function(s){return e<=s.time&&s.time<=t})},BingoGenerator.prototype.hasGoalOnBoard=function(e){for(var t=1;25>=t;t++)if(this.bingoBoard[t].id===e.id)return!0;return!1},BingoGenerator.prototype.hasConflictsOnBoard=function(e){for(var t=1;25>=t;t++){var s=this.bingoBoard[t];if(s.goal){var i=[e,s.goal],l=this.evaluateSquares(i);if(l>=TOO_MUCH_SYNERGY)return!0}}return!1},BingoGenerator.prototype.getOtherSquares=function(e,t){var s=INDICES_PER_ROW[e].filter(function(e){return e!=t}),i=this;return s.map(function(e){return i.bingoBoard[e]})},BingoGenerator.prototype.checkLine=function(e,t){for(var s=ROWS_PER_INDEX[e],i=0,l=TOO_MUCH_SYNERGY,a=0;a<s.length;a++){var n=s[a],r=JSON.parse(JSON.stringify(t));r.desiredTime=this.bingoBoard[e].desiredTime;var o=this.getOtherSquares(n,e);o.push(r);var y=this.evaluateSquares(o);i=Math.max(i,y),l=Math.min(l,y)}return{minSynergy:l,maxSynergy:i}},BingoGenerator.prototype.evaluateRow=function(e){return this.evaluateSquares(this.getOtherSquares(e))},BingoGenerator.prototype.getEffectiveTypeSynergiesForRow=function(e){var t=this.calculateSynergiesForSquares(this.getOtherSquares(e)),s=this.calculateEffectiveTypeSynergies(this.calculateCombinedTypeSynergies(t)),i=this.filterRowtypeSynergies(t);return[s,i]},BingoGenerator.prototype.evaluateSquares=function(e){var t=e.map(function(e){return e.id}).filter(function(e){return e});if(hasDuplicateStrings(t))return TOO_MUCH_SYNERGY;var s=this.calculateSynergiesForSquares(e);return this.calculateEffectiveSynergyForSquares(s)},BingoGenerator.prototype.calculateSynergiesForSquares=function(e){for(var t={},s={},i={},l=[],a=0;a<e.length;a++){var n=e[a];this.mergeTypeSynergies(t,n.types),this.mergeTypeSynergies(s,n.subtypes),this.mergeTypeSynergies(i,n.rowtypes),void 0!==n.time&&void 0!==n.desiredTime&&l.push(n.desiredTime-n.time)}return{typeSynergies:t,subtypeSynergies:s,rowtypeSynergies:i,goals:e,timeDifferences:l}},BingoGenerator.prototype.mergeTypeSynergies=function(e,t){for(var s in t)e[s]||(e[s]=[]),e[s].push(t[s])},BingoGenerator.prototype.calculateCombinedTypeSynergies=function(e){var t=e.typeSynergies,s=e.subtypeSynergies,i={};for(var l in t)l in s?i[l]=t[l].concat(s[l]):i[l]=t[l];return i},BingoGenerator.prototype.filterRowtypeSynergies=function(e){var t={};for(var s in e.rowtypeSynergies){var i=e.rowtypeSynergies[s];if(!(i.length<SQUARES_PER_ROW)){for(var l=0,a=0;a<i.length;a++)l+=i[a];this.rowtypeTimeSave[s]>l&&(t[s]=this.rowtypeTimeSave[s]-l)}}return t},BingoGenerator.prototype.calculateEffectiveTypeSynergies=function(e){var t={};for(var s in e){var i=e[s],l=this.filterSynergyValuesForType(s,i);l.length>0&&(t[s]=l)}return t},BingoGenerator.prototype.filterSynergyValuesForType=function(e,t){t.sortNumerically();var s=this.synergyFilters[e]||"";if(/^min/.test(s)){var i=Number(s.split(" ")[1]);return t.slice(0,i)}if(/^max/.test(s)){var i=Number(s.split(" ")[1]);return t.reverse(),t.slice(0,i)}return t.slice(0,-1)},BingoGenerator.prototype.calculateEffectiveSynergyForSquares=function(e){var t=this.calculateCombinedTypeSynergies(e),s=this.filterRowtypeSynergies(e),i=this.calculateEffectiveTypeSynergies(t),l=0;for(var a in i)for(var n=i[a],r=0;r<n.length;r++){if(n[r]>this.maximumIndividualSynergy)return TOO_MUCH_SYNERGY;l+=n[r]}for(var o in s)l+=s[o];for(var y=e.timeDifferences,r=0;r<y.length;r++){var u=y[r];l+=u}return l},bingoGenerator=function(e,t){for(var s=new BingoGenerator(e,t),i=!1,l=0;!i&&10>l;)i=s.makeCard(),l++;return i.meta={iterations:l},i};var bingoList={0:[{difficulty:0,id:"lens-of-truth",jp:"まことのメガネ",name:"Lens of Truth",skill:0,time:.25,types:{selfsynergy:0}}],1:[{difficulty:1,id:"2-shields",jp:"盾2種",name:"2 Shields",skill:0,time:.5,types:{selfsynergy:0}},{difficulty:1,id:"99-rupees",jp:"99ルピー",name:"99 Rupees",skill:0,subtypes:{incrupees:100},time:.5,types:{selfsynergy:0}},{difficulty:1,id:"fairy-ocarina",jp:"妖精のオカリナ",name:"Fairy Ocarina",skill:0,subtypes:{bottle:1,songs:.25},time:.5,types:{field:.75,selfsynergy:0}}],10:[{difficulty:10,id:"2-unused-keys-in-gerudo-training-grounds",jp:"ゲルドの修練場の未使用のカギ2つ",name:"2 unused keys in Gerudo Training Grounds",skill:0,subtypes:{hearts:.75,kd:2.5,plant2:.5},time:5.25,types:{endon:-.5,field:.75,fortress:3,gtg:2,incgtgkey:100,selfsynergy:0}},{difficulty:10,id:"3-unused-keys-in-gerudo-training-grounds",jp:"ゲルドの修練場の未使用のカギ3つ",name:"3 unused keys in Gerudo Training Grounds",skill:0,subtypes:{bosskey:3,hearts:.75,kd:2.5,plant2:.5},time:5.25,types:{endon:-.5,field:.75,fortress:3,gtg:2,incgtgkey:100,selfsynergy:0}},{difficulty:10,id:"adult-s-wallet",jp:"大人のサイフ",name:"Adult's Wallet",skill:0,subtypes:{bottle:1,incrupees:100,plant:4},time:5,types:{selfsynergy:-2,wallet:6}},{difficulty:10,id:"both-child-gerudo-valley-area-skulltulas",jp:"ゲルドの谷エリアの黄金のスタルチュラ4匹",name:"Both Child Gerudo Valley area Skulltulas",skill:0,subtypes:{bosskey:1.5,hearts:.75,plant:1,plant2:1.5,wallet:1.25},time:5,types:{field:.75,fortress:2,gtg:1,jabu:.5,selfsynergy:0}},{difficulty:10,id:"defeat-queen-gohma",jp:"ゴーマ撃破",name:"Defeat Queen Gohma",skill:0,subtypes:{compass:3.5,ganon:4,hearts:3,hearts2:2,map:3,plant:.25,wallet:.5},time:5.25,types:{deku:5,endon:-.5,incgohma:100,selfsynergy:0}}],11:[{difficulty:11,id:"200-rupees",jp:"200ルピー",name:"200 Rupees",skill:0,subtypes:{bottle:1,plant:4},time:5.5,types:{incrupees:100,selfsynergy:-2,wallet:6}},{difficulty:11,id:"30-deku-sticks",jp:"デクの棒30本",name:"30 Deku Sticks",skill:0,time:5.5,types:{dc:3,selfsynergy:0,sticks:100}},{difficulty:11,id:"defeat-a-white-wolfos",jp:"ホワイトウルフォス撃破",name:"Defeat a White Wolfos",skill:0,subtypes:{hearts:.75,plant2:.5},time:5.5,types:{field:.75,fortress:3,gtg:1.5,ice:1.5,irons:1.5,selfsynergy:0}},{difficulty:11,id:"defeat-all-lizalfos-in-dodongo-s-cavern",jp:"ドドンゴの洞窟のリザルフォス全て撃破",name:"Defeat all Lizalfos in Dodongo's Cavern",skill:0,subtypes:{compass:3,hearts:2,map:2.75,plant:.5,plant2:1.5,wallet:.5},time:5.5,types:{dc:4,dmc:1,endon:-.5,selfsynergy:0}},{difficulty:11,id:"milk",jp:"ロンロン牛乳",name:"Milk",skill:0,subtypes:{bottle:2,wallet:.5,zl:1},time:5.75,types:{endbottle:-2.5,field:.75,lonlon:4,selfsynergy:0}},{difficulty:11,id:"plant-5-magic-beans",jp:"魔法の豆を5ヶ所に埋める",name:"Plant 5 Magic Beans",skill:0,time:5.5,types:{beans:10,incbeans:100,plant:3.5,selfsynergy:-.5}}],12:[{difficulty:12,id:"37th-heart-piece-child-fortress-",jp:"37番目のハートのかけら(子供のゲルドの砦)",name:"37th heart piece (Child Fortress)",skill:0,subtypes:{bosskey:2,hearts:1.75,kd:2.5,plant2:.5},time:6.25,types:{fortress:2.5,selfsynergy:0}},{difficulty:12,id:"4-unused-keys-in-gerudo-training-grounds",jp:"ゲルドの修練場の未使用のカギ4つ",name:"4 unused keys in Gerudo Training Grounds",skill:0,subtypes:{bosskey:3,hearts:.75,kd:2.5,plant2:.5},time:6.25,types:{endon:-.5,field:.75,fortress:3,gtg:3,incgtgkey:100,selfsynergy:0}},{difficulty:12,id:"5-hearts",jp:"ハート5つ",name:"5 Hearts",skill:0,subtypes:{plant:1,plant2:1,wallet:1},time:6,types:{hearts:5,hearts2:1,selfsynergy:-2}},{difficulty:12,id:"all-4-child-zora-s-domain-area-skulltulas",jp:"ゾーラの里エリアの黄金のスタルチュラ8匹",name:"All 4 Child Zora's Domain area Skulltulas",skill:0,subtypes:{compass:2,hearts:.75,jabu:.5,map:2,ruto:1,wallet:2.5},time:6,types:{fountain:2,selfsynergy:0}},{difficulty:12,id:"6-magic-beans",jp:"魔法のマメ6つ以上",name:"6 Magic Beans",skill:0,subtypes:{wallet:.25},time:6.25,types:{beans:10,incbeans:100,selfsynergy:0}},{difficulty:12,id:"blue-fire",jp:"青い炎",name:"Blue Fire",skill:0,subtypes:{bosskey:2.5,compass:3.5,hearts:3,hearts2:2,map:3,plant:.25,wallet:.75,zl:2},time:6,types:{bottle:2,fountain:2,ganon:5,ice:1.5,selfsynergy:0}}],13:[{difficulty:13,id:"3-maps",jp:"マップ3つ",name:"3 Maps",skill:0,subtypes:{compass:6,ganon:2.5,hearts:2,hearts2:1.5,plant:1,plant2:1,wallet:.75},time:6.75,types:{incmap:100,map:6,selfsynergy:0}},{difficulty:13,id:"bomb-bag-30-",jp:"ボム袋(30)",name:"Bomb Bag (30)",skill:0,subtypes:{compass:3,map:2.75,plant:.5,plant2:1.5,wallet:1},time:6.5,types:{dc:4,dmc:1,selfsynergy:0}},{difficulty:13,id:"defeat-big-octo",jp:"大オクタ撃破",name:"Defeat Big Octo",skill:0,subtypes:{compass:5,map:5,ruto:1,wallet:.75},time:6.5,types:{fountain:2,gtg:1,jabu:3,selfsynergy:0}}],14:[{difficulty:14,id:"5-unused-keys-in-gerudo-training-grounds",jp:"ゲルドの修練場の未使用のカギ5つ",name:"5 unused keys in Gerudo Training Grounds",skill:0,subtypes:{bosskey:3,hearts:.75,kd:2.5,plant2:.5},time:7,types:{endon:-.5,field:.75,fortress:3,gtg:4,incgtgkey:100,selfsynergy:0}},{difficulty:14,id:"all-3-child-lake-hylia-skulltulas",jp:"ハイリア湖畔エリアの黄金のスタルチュラ3匹以上",name:"All 3 Child Lake Hylia Skulltulas",skill:0,subtypes:{plant:.5,plant2:1.5,ruto:2,wallet:1.75},time:7,types:{bottle:2,field:.75,fountain:.5,selfsynergy:0}},{difficulty:14,id:"boomerang",jp:"ブーメラン",name:"Boomerang",skill:0,subtypes:{compass:6,hearts:1,hearts2:2,map:6,ruto:1,wallet:1.5},time:7,types:{fountain:2,incbarinade:100,jabu:5,selfsynergy:0}},{difficulty:14,id:"ganon-s-castle-boss-key",jp:"ガノン城のボス部屋のカギ",name:"Ganon's Castle Boss Key",skill:0,subtypes:{bosskey:4.25,hearts:3,hearts2:2,plant:.25,wallet:.5},time:7,types:{bottle:2,endon:-.5,ganon:5,incgohma:100,selfsynergy:0}}],15:[{difficulty:15,id:"fill-all-4-bottle-slots",jp:"4つの空きビンスロットを全て埋める",name:"Fill all 4 Bottle Slots",skill:0,subtypes:{plant2:1.25},time:7.75,types:{bottle:2,ruto:4.5,selfsynergy:0}},{difficulty:15,id:"requiem-of-spirit",jp:"魂のレクイエム",name:"Requiem of Spirit",skill:0,subtypes:{bosskey:2,hearts:.75,map:2,plant:.5,plant2:1.5,songs:3,wallet:.5},time:7.5,types:{endon:-.5,field:.75,fortress:2.5,selfsynergy:0,spirit:2.5}}],16:[{difficulty:16,id:"15-different-skulltulas",jp:"スタルチュラのしるし15個(増殖禁止)",name:"15 Different Skulltulas",skill:0,subtypes:{plant:4.5,plant2:2},time:8,types:{bottle:2,selfsynergy:-2,wallet:8}},{difficulty:16,id:"3-compasses",jp:"コンパス3つ",name:"3 Compasses",skill:0,subtypes:{ganon:2.5,hearts:3,hearts2:1.5,map:8,plant:1,plant2:1,wallet:.75},time:8,types:{compass:8,inccomp:100,selfsynergy:0}},{difficulty:16,id:"6-unused-keys-in-gerudo-training-grounds",jp:"ゲルドの修練場の未使用のカギ6つ",name:"6 unused keys in Gerudo Training Grounds",skill:0,subtypes:{bosskey:3,hearts:.75,kd:2.5,plant2:.5},time:8,types:{endon:-.5,field:.75,fortress:3,gtg:5,incgtgkey:100,selfsynergy:0}},{difficulty:16,id:"all-4-lon-lon-ranch-area-skulltulas",jp:"ロンロン牧場エリアの黄金のスタルチュラ4匹",name:"All 4 Lon-Lon Ranch area Skulltulas",skill:0,subtypes:{hearts:.25,jabu:2,wallet:2.5},time:8,types:{field:.75,lonlon:1.5,selfsynergy:0}},{difficulty:16,id:"all-4-skulltulas-in-deku-tree",jp:"デクの樹様の中の黄金のスタルチュラ4匹",name:"All 4 Skulltulas in Deku Tree",skill:0,subtypes:{compass:3.75,ganon:3,hearts:3,jabu:1,map:3,plant:.25,wallet:2.5},time:8.25,types:{deku:3,endon:-.5,selfsynergy:0}},{difficulty:16,id:"all-4-skulltulas-in-jabu-jabu",jp:"ジャブジャブ様のお腹の黄金のスタルチュラ4匹",name:"All 4 Skulltulas in Jabu-Jabu",skill:0,subtypes:{compass:5,hearts:2,map:5,ruto:1,wallet:2.5},time:8,types:{endon:-.5,fountain:2,gtg:1,jabu:3,selfsynergy:0}},{difficulty:16,id:"all-5-skulltulas-in-dodongo-s-cavern",jp:"ドドンゴの洞窟の黄金のスタルチュラ5匹",name:"All 5 Skulltulas in Dodongo's Cavern",skill:0,subtypes:{compass:3,hearts:2,hearts2:2,kd:1.5,map:2.75,plant:.5,plant2:1.5,wallet:3.25},time:8.25,types:{dc:3,dmc:1,endon:-.5,selfsynergy:0}},{difficulty:16,id:"7-magic-beans",jp:"魔法のマメ7つ以上",name:"7 Magic Beans",skill:0,subtypes:{wallet:.25},time:8,types:{beans:10,incbeans:100,selfsynergy:0}},{difficulty:16,id:"defeat-king-dodongo",jp:"キングドドンゴ撃破",name:"Defeat King Dodongo",skill:0,subtypes:{compass:3,hearts:3,hearts2:2,map:2.75,plant:.5,plant2:1.5,wallet:1},time:8.25,types:{dc:4,dmc:1,endon:-.5,fortress:2,inckd:100,kd:3,selfsynergy:0}},{difficulty:16,id:"epona-s-song",jp:"エポナの歌",name:"Epona's Song",skill:0,subtypes:{wallet:.5,zl:1},time:8,types:{bottle:2,field:.75,lonlon:4,selfsynergy:0}}],17:[{difficulty:17,id:"all-5-child-death-mountain-area-skulltulas",jp:"デスマウンテンエリアの黄金のスタルチュラ8匹",name:"All 5 Child Death Mountain area Skulltulas",skill:0,subtypes:{childtrade:1,compass:1,hearts:1.5,map:1,plant:.5,plant2:1.5,wallet:3.25},time:8.5,types:{bottle:2,dmc:3,selfsynergy:0}},{difficulty:17,id:"beat-the-deku-tree",jp:"デクの樹様の中クリア",name:"Beat the Deku Tree",skill:0,subtypes:{compass:3.5,ganon:5,hearts:3,hearts2:2,map:3,plant:.25,wallet:.5,zl:2.25},time:8.5,types:{bottle:2,deku:5,endon:-1,incgohma:100,selfsynergy:0}},{difficulty:17,id:"kokiri-s-emerald",jp:"コキリのヒスイ",name:"Kokiri's Emerald",skill:0,subtypes:{compass:3.5,ganon:5,hearts:3,hearts2:2,map:3,plant:.25,wallet:.5,zl:2.25},time:8.5,types:{bottle:2,deku:5,incgohma:100,selfsynergy:0}},{difficulty:17,id:"map-compass-in-jabu-jabu",jp:"ジャブジャブ様のお腹のマップとコンパス",name:"Map & Compass in Jabu-Jabu",skill:0,subtypes:{compass:8.5,hearts:.5,map:7.5,ruto:1,wallet:1},time:8.5,types:{fountain:2,jabu:5,selfsynergy:0}}],18:[{difficulty:18,id:"all-7-child-kakariko-area-skulltulas",jp:"カカリコ村エリアの黄金のスタルチュラ8匹",name:"All 7 Child Kakariko area Skulltulas",skill:0,subtypes:{jabu:1,plant:.5,wallet:4.5},time:9,types:{bottle:2,selfsynergy:0}},{difficulty:18,id:"both-child-wasteland-colossus-area-skulltulas",jp:"幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹",name:"Both Child Wasteland/ Colossus area Skulltulas",skill:0,subtypes:{bosskey:2,bosskey2:4,hearts:.75,map:2,plant:.5,plant2:1.5,songs:3,wallet:1.25},time:9,types:{bottle:2,field:.75,fortress:2.5,selfsynergy:0,spirit:2.5}}],19:[{difficulty:19,id:"1-skulltula-from-each-child-dungeon",jp:"全ての子供ダンジョンからスタルチュラ最低1匹ずつ",name:"1 Skulltula from each Child Dungeon",skill:0,subtypes:{compass:4,ganon:2.5,map:4,plant:.5,plant2:1.5,ruto:1,wallet:3},time:9.5,types:{dc:2,deku:3,dmc:1,fountain:2,jabu:3,selfsynergy:-3.5}},{difficulty:19,id:"defeat-barinade",jp:"バリネード撃破",name:"Defeat Barinade",skill:0,subtypes:{compass:6,hearts:3,hearts2:2,map:6,ruto:1,wallet:1},time:9.5,types:{endon:-.5,fountain:2,incbarinade:100,jabu:8,selfsynergy:0}},{difficulty:19,id:"goron-s-ruby",jp:"ゴロンのルビー",name:"Goron's Ruby",skill:0,subtypes:{compass:3,hearts:3,hearts2:2,map:2.75,plant:.5,plant2:1.5,wallet:1},time:9.5,types:{dc:4,dmc:1,endon:-.5,inckd:100,kd:3,selfsynergy:0}}],2:[{difficulty:2,id:"20-deku-sticks",jp:"デクの棒20本",name:"20 Deku Sticks",skill:0,time:1,types:{selfsynergy:0,sticks:100}},{difficulty:2,id:"30-deku-nuts",jp:"デクの実30個以上",name:"30 Deku Nuts",skill:0,subtypes:{plant:.5,songs:.5,wallet:.25},time:1,types:{selfsynergy:0}},{difficulty:2,id:"bullet-bag-50-",jp:"デクのタネ袋(50)",name:"Bullet Bag (50)",skill:0,subtypes:{plant:.25},time:1.25,types:{bulletbag:100,selfsynergy:0}},{difficulty:2,id:"lost-dog-hp",jp:"リチャードのハートのかけら",name:"Lost Dog HP",skill:0,subtypes:{hearts:1},time:1.25,types:{field:.75,selfsynergy:0}},{difficulty:2,id:"map-compass-in-bottom-of-the-well",jp:"井戸の底のマップとコンパス",name:"Map & Compass in Bottom of the Well",skill:0,subtypes:{compass:.5,map:.5},time:1,types:{selfsynergy:0}}],20:[{difficulty:20,id:"beat-dodongo-s-cavern",jp:"ドドンゴの洞窟クリア",name:"Beat Dodongo's Cavern",skill:0,subtypes:{compass:3,fortress:3,hearts:3,hearts2:2,map:2.75,plant:.5,plant2:1.5,wallet:1},time:10,types:{dc:4,dmc:1,endon:-1,inckd:100,kd:3,selfsynergy:0}},{difficulty:20,id:"beat-jabu-jabu-s-belly",jp:"ジャブジャブ様のお腹クリア",name:"Beat Jabu-Jabu's Belly",skill:0,subtypes:{compass:6,hearts:3,hearts2:2,map:6,ruto:1,wallet:1},time:10,types:{endon:-1,fountain:2,incbarinade:100,jabu:8,selfsynergy:0}},{difficulty:20,id:"keaton-mask",jp:"キータンのお面",name:"Keaton Mask",skill:0,subtypes:{hearts:2,hearts2:2},time:10.25,types:{childtrade:2.75,dmc:.5,field:.75,selfsynergy:0,zl:6.75}},{difficulty:20,id:"plant-6-magic-beans",jp:"魔法の豆を6ヶ所に埋める",name:"Plant 6 Magic Beans",skill:0,time:10,types:{beans:10,incbeans:100,plant:4.5,selfsynergy:-.5}}],21:[{difficulty:21,id:"8-magic-beans",jp:"魔法のマメ8つ以上",name:"8 Magic Beans",skill:0,subtypes:{wallet:.5},time:10.75,types:{beans:10,incbeans:100,selfsynergy:0}},{difficulty:21,id:"saria-s-song",jp:"サリアの歌",name:"Saria's Song",skill:0,subtypes:{hearts:2,hearts2:2,plant:.5,wallet:.25},time:10.5,types:{field:.75,incsaria:100,saria:3,selfsynergy:0,zl:6.75}}],22:[{difficulty:22,id:"4-maps",jp:"マップ4つ",name:"4 Maps",skill:0,subtypes:{bosskey2:2,compass:14,ganon:2.5,hearts:3,hearts2:3,plant:1,plant2:1,wallet:1},time:11.25,types:{fountain:2,incmap:100,jabu:5,map:14,selfsynergy:-3}},{difficulty:22,id:"6-hearts",jp:"ハート6つ",name:"6 Hearts",skill:0,subtypes:{plant:1,plant2:1,wallet:1},time:11,types:{hearts:8,hearts2:4,selfsynergy:-2}},{difficulty:22,id:"win-bombchu-bowling-prize",jp:"ボムチュウボウリングの景品",name:"Win Bombchu Bowling Prize",skill:0,subtypes:{compass:3,fortress:3,hearts:3,hearts2:2,map:2.75,plant:.5,plant2:1.5,wallet:1},time:11,types:{dc:4,inckd:100,kd:3,selfsynergy:0}},{difficulty:22,id:"zora-s-sapphire",jp:"ゾーラのサファイア",name:"Zora's Sapphire",skill:0,subtypes:{compass:6,hearts:3,hearts2:2,map:6,ruto:1,wallet:1},time:11,types:{fountain:2,incbarinade:100,jabu:8,selfsynergy:0}}],23:[{difficulty:23,id:"defeat-a-skull-kid",jp:"スタルキッド撃破",name:"Defeat a Skull Kid",skill:0,subtypes:{plant:.25},time:11.5,types:{field:.75,incsaria:100,saria:3,selfsynergy:0,zl:6.75}},{difficulty:23,id:"gerudo-s-card",jp:"ゲルドの会員証",name:"Gerudo's Card",skill:0,subtypes:{bosskey:2.5,hearts:.75,plant2:.5},time:11.5,types:{field:.75,fortress:2.5,selfsynergy:0}},{difficulty:23,id:"get-bombchu-chest-in-spirit-temple",jp:"魂の神殿のボムチュウ取得",name:"Get Bombchu chest in Spirit Temple",skill:0,subtypes:{bosskey:2,compass:1,hearts:.75,map:2,plant:.5,plant2:1.5,wallet:.5},time:11.5,types:{field:.75,fortress:2.5,selfsynergy:0,spirit:6}}],24:[{difficulty:24,id:"plant-7-magic-beans",jp:"魔法の豆を7ヶ所に埋める",name:"Plant 7 Magic Beans",skill:0,time:12.25,types:{beans:10,field:.75,incbeans:100,plant:4.5,plant2:2,selfsynergy:-2}}],25:[{difficulty:25,id:"4-compasses",jp:"コンパス4つ",name:"4 Compasses",skill:0,subtypes:{bosskey2:2,ganon:2.5,hearts:3,hearts2:4,map:16,plant:1,plant2:1,wallet:1},time:12.5,types:{compass:16,fountain:2,inccomp:100,jabu:5,selfsynergy:-4}},{difficulty:25,id:"magic-bar",jp:"魔力メーター",name:"Magic Bar",skill:0,subtypes:{hearts:2,hearts2:2},time:12.5,types:{bottle:2,dmc:2.5,incmagic:100,magic:2,zl:6.75}},{difficulty:25,id:"skull-mask",jp:"ドクロのお面",name:"Skull Mask",skill:0,subtypes:{hearts:2,hearts2:2,plant:.5,wallet:.25},time:12.5,types:{childtrade:5,field:.75,saria:3,selfsynergy:0,zl:6.75}}],26:[{difficulty:26,id:"9-magic-beans",jp:"魔法のマメ9つ以上",name:"9 Magic Beans",skill:0,subtypes:{wallet:.5},time:13.25,types:{beans:10,incbeans:100,selfsynergy:0}}],27:[],28:[{difficulty:28,id:"double-magic",jp:"魔力2倍",name:"Double Magic",skill:0,subtypes:{bosskey:1,compass:1,hearts:2,hearts2:2,map:1,plant:.5,songs:1,wallet:.5},time:14.25,types:{bottle:2,dmc:1,field:.75,incmagic:100,magic:2,selfsynergy:0,zl:6.75}},{difficulty:28,id:"silver-gauntlets",jp:"銀のグローブ",name:"Silver Gauntlets",skill:0,subtypes:{bosskey:3,bosskey2:4.5,hearts:.75,map:6,plant:.5,plant2:1.5,songs:1,wallet:.25},time:14,types:{endon:-1,field:.75,fortress:2.5,selfsynergy:0,spirit:6,strength:100}}],29:[],3:[],30:[{difficulty:30,id:"goron-bracelet",jp:"ゴロンの腕輪",name:"Goron Bracelet",skill:0,subtypes:{plant:.5,plant2:.5,wallet:.25},time:15,types:{bottle:2,field:.75,saria:5,selfsynergy:0,strength:100,zl:6.75}}],31:[{difficulty:31,id:"3-songs",jp:"歌3つ以上",name:"3 Songs",skill:0,subtypes:{hearts:2,hearts2:2,plant:.5,wallet:.25},time:15.5,types:{bottle:2,incsong:100,selfsynergy:0,songs:2,zl:6.75}}],32:[],33:[],34:[],35:[{difficulty:35,id:"both-heart-pieces-in-lost-woods",jp:"迷いの森のハートのかけら２つ",name:"Both heart pieces in Lost Woods",skill:0,subtypes:{hearts:2,plant:.5,wallet:.25},time:17.75,types:{bottle:2,childtrade:2.75,field:.75,saria:3,selfsynergy:0,zl:6.75}}],36:[],37:[{difficulty:37,id:"4-songs",jp:"歌4つ以上",name:"4 Songs",skill:0,subtypes:{hearts:2,hearts2:2,plant:1,wallet:.5},time:18.5,types:{bottle:2,incsong:100,selfsynergy:0,zl:6.75}}],38:[{difficulty:38,id:"din-s-fire",jp:"ディンの炎",name:"Din's Fire",skill:0,subtypes:{hearts:.75,plant:.5,wallet:.5},time:19,types:{bottle:2,dins:2,dmc:2.5,field:.75,magic:2,selfsynergy:0,zl:6.75}},{difficulty:38,id:"farore-s-wind",jp:"フロルの風",name:"Farore's Wind",skill:0,subtypes:{hearts:2,hearts2:2,ruto:1,wallet:.5},time:19,types:{bottle:2,dmc:1,field:.75,fountain:2,magic:2,selfsynergy:0,zl:6.75}}],39:[],4:[{difficulty:4,id:"plant-3-magic-beans",jp:"魔法の豆を3ヶ所に埋める",name:"Plant 3 Magic Beans",skill:0,time:2.25,types:{beans:10,incbeans:100,plant:2,selfsynergy:-.5}}],40:[],41:[],42:[],43:[{difficulty:43,id:"nayru-s-love",jp:"ネールの愛",name:"Nayru's Love",skill:0,subtypes:{bosskey:2,compass:1,hearts:1.5,map:1,plant2:1,wallet:.25},time:21.5,types:{bottle:2,dmc:2.5,endon:-.5,field:.75,fortress:2.5,magic:2,selfsynergy:0,spirit:2,zl:6.75}}],44:[],45:[],46:[{difficulty:46,id:"two-fairy-spells",jp:"魔法のアイテム２つ",name:"Two Fairy Spells",skill:0,subtypes:{bosskey:3,compass:1,hearts:2,hearts2:2,map:1,plant:.5,plant2:1.25,ruto:1,wallet:1},time:23,types:{bottle:2,childtrade:2.75,dmc:1,endon:-.5,fortress:2.5,fountain:2,magic:2,selfsynergy:0,spirit:2,zl:4.25}}],47:[],48:[],49:[],5:[{difficulty:5,id:"bottled-fairy",jp:"ビン(妖精)",name:"Bottled Fairy",skill:0,time:2.5,types:{bottle:2,selfsynergy:0}},{difficulty:5,id:"green-potion",jp:"緑のクスリ",name:"Green Potion",skill:0,time:2.5,types:{bottle:2,endbottle:-2.5,selfsynergy:0}},{difficulty:5,id:"red-potion",jp:"赤いクスリ",name:"Red Potion",skill:0,time:2.5,types:{bottle:2,endbottle:-2.5,selfsynergy:0}}],50:[{difficulty:50,id:"both-hyrule-field-area-skulltulas",jp:"ハイラル平原エリアの黄金ノスタルチュラ2匹",name:"Both Hyrule Field area Skulltulas",skill:0,subtypes:{compass:1,dins:2,dmc:1,magic:2,map:1,plant2:.5,wallet:1.25},time:25,types:{bottle:2,field:.75,fortress:1,selfsynergy:0,zl:6.75}},{difficulty:50,id:"ocarina-of-time",jp:"時のオカリナ",name:"Ocarina of Time",skill:0,subtypes:{compass:15,hearts:12,map:15,plant:.75,plant2:1.5,wallet:3},time:29,types:{dmc:1,field:.75,selfsynergy:0}},{difficulty:50,id:"spooky-mask",jp:"こわそなお面",name:"Spooky Mask",skill:0,subtypes:{bosskey:2.5,hearts:2,hearts2:2,plant:.5,wallet:.25},time:25,types:{beans:15,childtrade:6.5,fortress:3,saria:3,selfsynergy:0}}],6:[{difficulty:6,id:"all-3-skulltulas-in-bottom-of-the-well",jp:"井戸の底の黄金のスタルチュラ3匹",name:"All 3 Skulltulas in Bottom of the Well",skill:0,subtypes:{wallet:1.75},time:3.25,types:{selfsynergy:0}},{difficulty:6,id:"bottled-poe",jp:"ビン(ポウ)",name:"Bottled Poe",skill:0,subtypes:{plant:.5},time:3,types:{bottle:2,endbottle:-2.5,selfsynergy:0}},{difficulty:6,id:"lon-lon-ranch-hp",jp:"ロンロン牧場のハートのかけら",name:"Lon Lon Ranch HP",skill:0,subtypes:{hearts:1,wallet:.5},time:3,types:{field:.75,lonlon:1.75,selfsynergy:0}},{difficulty:6,id:"plant-4-magic-beans",jp:"魔法の豆を4ヶ所に埋める",name:"Plant 4 Magic Beans",skill:0,time:3,types:{beans:10,incbeans:100,plant:2.75,selfsynergy:-.5}}],7:[{difficulty:7,id:"5-magic-beans",jp:"魔法のマメ5つ以上",name:"5 Magic Beans",skill:0,subtypes:{wallet:.25},time:3.75,types:{beans:10,incbeans:100,selfsynergy:0}},{difficulty:7,id:"both-child-lost-woods-area-skulltulas",jp:"迷いの森エリアの黄金のスタルチュラ4匹",name:"Both Child Lost Woods area Skulltulas",skill:0,subtypes:{plant:1.25,songs:1,wallet:1},time:3.5,types:{bottle:2,saria:.25,selfsynergy:0}},{difficulty:7,id:"both-heart-pieces-in-death-mountain-crater",jp:"デスマウンテン火口のハートのかけら２つ",name:"Both heart pieces in Death Mountain Crater",skill:0,subtypes:{bosskey:1,compass:1,hearts:2,map:1,plant:.5,plant2:1.5,songs:1.5,wallet:1},time:3.5,types:{dmc:3,selfsynergy:0}},{difficulty:7,id:"plant-bean-in-death-mountain-crater",jp:"デスマウンテン火口の土にマメを植える",name:"Plant bean in Death Mountain Crater",skill:0,subtypes:{compass:1,hearts:1,map:1,plant:.75,plant2:1.5,wallet:.5},time:3.5,types:{beans:-1,dmc:3,selfsynergy:0}}],8:[{difficulty:8,id:"both-child-kokiri-forest-area-skulltulas",jp:"コキリの森エリアの黄金のスタルチュラ３匹",name:"Both Child Kokiri Forest area Skulltulas",skill:0,subtypes:{plant:.5,wallet:1},time:4,types:{bottle:2,selfsynergy:0}},{difficulty:8,id:"both-gerudo-valley-hps",jp:"ゲルドの谷のハートのかけら2つ",name:"Both Gerudo Valley HPs",skill:0,subtypes:{bosskey:1,hearts:2,plant:.5,plant2:1.5,wallet:.25},time:4.25,types:{field:.75,fortress:1.5,selfsynergy:0}},{difficulty:8,id:"fairy-slingshot",jp:"妖精のパチンコ",name:"Fairy Slingshot",skill:0,subtypes:{bulletbag:100,compass:2,ganon:2.5,hearts:2.5,map:3,plant:.25,wallet:.25},time:4,types:{deku:2.5,selfsynergy:0}},{difficulty:8,id:"golden-scale",jp:"金のウロコ",name:"Golden Scale",skill:0,subtypes:{plant:.25,plant2:1.5},time:4,types:{fountain:1,scale:100,selfsynergy:0}},{difficulty:8,id:"map-compass-in-deku-tree",jp:"デクの樹様の中のマップとコンパス",name:"Map & Compass in Deku Tree",skill:0,subtypes:{compass:4,ganon:2.5,hearts:3,map:3.25,plant:.25,wallet:.5},time:4.25,types:{deku:3,selfsynergy:0}},{difficulty:8,id:"map-compass-in-dodongo-s-cavern",jp:"ドドンゴの洞窟のマップとコンパス",name:"Map & Compass in Dodongo's Cavern",skill:0,subtypes:{compass:3.5,hearts:1,map:3,plant:.5,plant2:1.5,wallet:.25},time:4,types:{dc:3,dmc:1,selfsynergy:0}},{difficulty:8,id:"silver-scale",jp:"銀のウロコ",name:"Silver Scale",skill:0,subtypes:{bottle:1,plant2:.75},time:4,types:{field:.25,fountain:1,ruto:4,scale:100,selfsynergy:0}}],9:[{difficulty:9,id:"bullet-bag-40-",jp:"デクのタネ袋(40)",name:"Bullet Bag (40)",skill:0,subtypes:{compass:3,ganon:2.5,hearts:2.5,map:3,plant:.25,wallet:.25},time:4.5,types:{bulletbag:100,deku:3,selfsynergy:0}},{difficulty:9,id:"ice-arrows",jp:"氷の矢",name:"Ice Arrows",skill:0,subtypes:{bosskey:3.5,hearts:.75,kd:2.5,plant2:.5},time:4.75,types:{field:.75,fortress:3,gtg:2.5,selfsynergy:0}},{difficulty:9,id:"ruto-s-letter",jp:"ルトの手紙",name:"Ruto's Letter",skill:0,subtypes:{plant2:1.25},time:4.5,types:{ruto:4.5,selfsynergy:0}}],info:{version:"v9 beta"},rowtypes:{},synfilters:{endon:"max -1"}};