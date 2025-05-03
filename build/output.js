

//a-globals
//------------------------------------------------------------------------------------------------------------------------------------------

_global = {};

ADJUST_AVERAGE = -57;
AVERAGE_ATTR = 2;
MASTER_MENU = {};
GLOBAL_DELIMITER = "_";


//a-polyfills.js
//------------------------------------------------------------------------------------------------------------------------------------------

/**
 * A polyfile for Object.keys(object);
 */
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }

      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    };
  })();
}

/**
 * A polyfil for stringify(object);
 * This implementation does not work with Symbols, BigInts
 * @param {} data 
 * @returns string
 * @see https://gist.github.com/rajatjain-21/02e2c5a30cf9d0190cb5503a25417fd1
 */


STRINGIFY_MAX_DEPTH_DEFAULT = 10;
_global.stringifiedMaxDepth = STRINGIFY_MAX_DEPTH_DEFAULT;

function invokeStringify(data, maxDepth, maxLength){
  if (maxDepth > 0){ _global.stringifiedMaxDepth = maxDepth; }
  return stringify(data, 0);
}

function stringify(data, depth) {
  if (depth > _global.stringifiedMaxDepth){ return data; }

  if (data === undefined){  return undefined; }
  if (data === null){ return 'null'; }
  if (data.toString() === "NaN"){ return 'null'; }
  if (data === Infinity){ return 'null'; }
  if (data.constructor === String){ return '"' + data.replace(/"/g, '\\"') + '"'; }
  if (data.constructor === Number){ return String(data); }
  if (data.constructor === Boolean){ return data ? 'true' : 'false'; }

  if (data.constructor === Array){
    return '[' + data.reduce((acc, v) => {
      if (v === undefined || v === NaN || v === Infinity)
        return [...acc, 'null']
      else
        return [...acc, stringify(v, ++depth)]
    }, []).join(',') + ']';
  }

  if (data.constructor === Object){
    return '{' + Object.keys(data).reduce((acc, k) => {
      if (data[k] === undefined)
        return acc
      else
        return [...acc, stringify(k, ++depth) + ':' + stringify(data[k], ++depth)]
    }, []).join(',') + '}';
  }

    return '{}';
}
//data-archetypes.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.ARCHETYPES = {
   "Average": {
      "attr": [0,0,0,0,0,0,0,0,0],
      "dBP": 0,
      "iCR" : 0,
      "traits": []
   },
   "Elite": {
      "attr": [1,1,1,1,1,1,1,1,0],
      "dBP": 0,
      "iCR" : 0,
      "traits": []
   },
   "Militia": {
      "attr": [0,0,0,0,0,0,0,0,0],
      "dBP": 0,
      "iCR" : 0,
      "traits": []
   },
   "Untrained": {
      "attr": [0,0,0,0,0,0,0,0,0],
      "dBP": 0,
      "iCR" : 0,
      "traits": []
   },
   "Veteran": {
      "attr": [0,0,0,0,0,0,0,0,0],
      "dBP": 0,
      "iCR" : 0,
      "traits": []
   }
}

//data-armors.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.ARMORS = {
   "_none": {
      "label": ".",
      "Type": "None",
      "AR": 0,
      "Deflect": 0,
      "traits": "",
      "BP": 0
   },
   "Helmet": {
      "label": "Helmet",
      "Type": "Helm",
      "AR": 0,
      "Deflect": 0,
      "traits": "Protective.",
      "BP": 3
   },
   "Helmet, Full": {
      "label": "Full Helm",
      "Type": "Helm",
      "AR": 1,
      "Deflect": 0,
      "traits": "[Blinders]. Protective.",
      "BP": 5
   },
   "Shield, Small": {
      "label": "Small Shield",
      "Type": "Shield",
      "AR": 0,
      "Deflect": 1,
      "traits": "[1H]. Coverage. Deflect.",
      "BP": 8
   },
   "Shield, Medium": {
      "label": "Shield",
      "Type": "Shield",
      "AR": 1,
      "Deflect": 1,
      "traits": "[1H][Laden]. Coverage. Deflect.",
      "BP": 10
   },
   "Armored Gear": {
      "label": "Armored Gear",
      "Type": "Gear",
      "AR": 0,
      "Deflect": 1,
      "traits": "Deflect. Conceal.",
      "BP": 5
   },
   "Armor, Light": {
      "label": "Light Armor",
      "Type": "Suit",
      "AR": 2,
      "Deflect": 1,
      "traits": "[Laden]. Deflect. ",
      "BP": 8
   },
   "Armor, Medium": {
      "label": "Medium Armor",
      "Type": "Suit",
      "AR": 4,
      "Deflect": 1,
      "traits": "[Laden 2]. Deflect. ",
      "BP": 13
   },
   "Armor, Heavy": {
      "label": "Heavy Armor",
      "Type": "Suit",
      "AR": 6,
      "Deflect": 1,
      "traits": "[Laden 3][Lumbering]. Deflect.",
      "BP": 15
   }
}

//data-attributes.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.ATTRIBUTES = {
   "CCA": {
      "description": "Close Combat Ability",
      "BP": 5,
      "CR": 0,
      "condition": "=",
      "index": 0
   },
   "RCA": {
      "description": "Range Combat Ability",
      "BP": 3,
      "CR": 0,
      "condition": "=",
      "index": 1
   },
   "REF": {
      "description": "Reflexes",
      "BP": 3,
      "CR": 0.1,
      "condition": "=",
      "index": 2
   },
   "INT": {
      "description": "Intellect",
      "BP": 6,
      "CR": 0.1,
      "condition": ">",
      "index": 3
   },
   "POW": {
      "description": "Willpower",
      "BP": 4,
      "CR": 0.1,
      "condition": "<",
      "index": 4
   },
   "STR": {
      "description": "Strength",
      "BP": 5,
      "CR": 0,
      "condition": "=",
      "index": 5
   },
   "FOR": {
      "description": "Fortitude",
      "BP": 6,
      "CR": 0.1,
      "condition": ">",
      "index": 6
   },
   "MOV": {
      "description": "Movement Ability",
      "BP": 4,
      "CR": 0.1,
      "condition": ">",
      "index": 7
   },
   "SIZ": {
      "description": "Physical Mass",
      "BP": 5,
      "CR": 0,
      "condition": "=",
      "index": 8
   }
}

//data-controls.js
//------------------------------------------------------------------------------------------------------------------------------------------


var SUFFIX_LIST = ["_a"];
var BP_SUBFIELDS = ["fBP", "BP_1", "BP_2", "BP_3", "BP_4", "BP_item_1", "BP_item_2"];
var BURDEN_FIELDS = ["cb_cca", "cb_ref", "cb_mov"];
var PHYSICALITY_FIELDS = ["STR", "SIZ"];
var BP_TOTAL_FIELD = "BPTotal";
var PROFILE_KEY = "profile";
var MENU_NAME_ERROR = "ERROR";
var MENU_DEFAULT_NONE = "_none";
var MENU_REFERENCES_BY_FOO = {
   "archetype": "ARCHETYPES",
   "variant": "VARIANTS",
   "weapon": "WEAPONS",
   "armor": "ARMORS",
   "species": "SPECIES"
}

var MENU_DEFAULT_BY_NAME = {
   "ARCHETYPES": "Average",
   "VARIANTS": MENU_DEFAULT_NONE,
   "WEAPONS": MENU_DEFAULT_NONE,
   "ARMORS": MENU_DEFAULT_NONE,
   "SPECIES": "Human"
}

var BUILD_TARGETS_BY_NAME = {
   "ARCHETYPES": ["text_archetype"],
   "VARIANTS": ["text_variant_1", "text_variant_2"],
   "WEAPONS": ["text_weapon_1", "text_weapon_2", "text_weapon_3", "text_weapon_4"],
   "ARMORS": ["text_armor_1", "text_armor_2", "text_armor_3", "text_armor_4"],
   "SPECIES": ["text_species"]
}

var TRAITS_FIELDS = [
    "Traits",
    "weapon_traits_1", 
    "weapon_traits_2", 
    "weapon_traits_3",
    "weapon_traits_4", 
    "item_traits_1",
    "item_traits_2"
];

var LABEL_LIST = [
   "info_configuration"
];

var BUTTON_LIST = [
   "btn_build",
   "btn_calculate",
   "btn_reset"
];

var CONTROL_LIST = [
   "btn_archetype",
   "btn_variant_1",
   "btn_variant_2",
   "btn_weapon_1",
   "btn_weapon_2",
   "btn_weapon_3",
   "btn_weapon_4",
   "btn_armor_1",
   "btn_armor_2",
   "btn_armor_3",
   "btn_armor_4",
   "btn_species"
];

var TEXT_LIST = [
  "text_archetype",
  "text_variant_1",
  "text_variant_2",
  "text_weapon_1",
  "text_weapon_2",
  "text_weapon_3",
  "text_weapon_4",
  "text_armor_1",
  "text_armor_2",
  "text_armor_3",
  "text_armor_4",
  "text_species"
];

var TOGGLE_STATUS = {
   "visible": 	0,
   "hidden": 1,
   "noPrint": 2,
   "noView": 3
}



//data-equipment.js
//------------------------------------------------------------------------------------------------------------------------------------------



//data-species.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.SPECIES = {
   "Ethonik": {
      "attr": [3,1,2,1,3,2,3,2,3],
      "dBP": 39,
      "iCR" : 0.0,
      "traits": ["[Solitary]. Brawn."]
   },
   "Human": {
      "attr": [2,2,2,2,2,2,2,2,3],
      "dBP": 30,
      "iCR" : 0,
      "traits": []
   },
   "Logican": {
      "attr": [1,1,2,3,3,2,2,2,3],
      "dBP": 37,
      "iCR" : 0.2,
      "traits": ["Leadership"]
   },
}

//data-variants.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.VARIANTS = {
   "_none": {
      "bpOffset": 0,
      "bpMultiplier": 0,
      "CR": 0,
      "setFactor": "",
      "traits": [],
      "termPriority": -1
   },
   "Brawler": {
      "bpOffset": 0,
      "bpMultiplier": 5,
      "CR": 0,
      "setFactor": "",
      "traits": ["Brawl"],
      "termPriority": 1550
   },
   "Brawny": {
      "bpOffset": 0,
      "bpMultiplier": 3,
      "CR": 0,
      "setFactor": "",
      "traits": ["Brawn"],
      "termPriority": 1600
   },
   "Cultist": {
      "bpOffset": -3,
      "bpMultiplier": 14,
      "CR": 0.2,
      "setFactor": "",
      "traits": ["Insane"],
      "termPriority": 600
   },
   "Evasive": {
      "bpOffset": 3,
      "bpMultiplier": 8,
      "CR": 0,
      "setFactor": "",
      "traits": ["Evasion"],
      "termPriority": 1700
   },
   "Fighter": {
      "bpOffset": 0,
      "bpMultiplier": 5,
      "CR": 0,
      "setFactor": "",
      "traits": ["Fight"],
      "termPriority": 700
   },
   "Grizzled": {
      "bpOffset": 0,
      "bpMultiplier": 10,
      "CR": 0,
      "setFactor": "",
      "traits": ["Grit"],
      "termPriority": 1900
   },
   "Knife-fighter": {
      "bpOffset": 3,
      "bpMultiplier": 6,
      "CR": 0,
      "setFactor": "",
      "traits": ["Knife-fighter"],
      "termPriority": 800
   },
   "Leaper": {
      "bpOffset": 4,
      "bpMultiplier": 4,
      "CR": 0,
      "setFactor": "",
      "traits": ["Leap"],
      "termPriority": 1000
   },
   "Loner": {
      "bpOffset": 0,
      "bpMultiplier": 0,
      "CR": -0.1,
      "setFactor": "",
      "traits": ["[Solitary]"],
      "termPriority": 1500
   },
   "Shooter": {
      "bpOffset": 0,
      "bpMultiplier": 5,
      "CR": 0,
      "setFactor": "",
      "traits": ["Shoot"],
      "termPriority": 1200
   },
   "Sneak": {
      "bpOffset": 3,
      "bpMultiplier": 3,
      "CR": 0,
      "setFactor": "",
      "traits": ["Sneaky"],
      "termPriority": 1100
   },
   "Sprinter": {
      "bpOffset": 0,
      "bpMultiplier": 8,
      "CR": 0,
      "setFactor": "",
      "traits": ["Sprint"],
      "termPriority": 900
   },
   "Surefooted": {
      "bpOffset": 5,
      "bpMultiplier": 5,
      "CR": 0.1,
      "setFactor": "",
      "traits": ["Surefooted"],
      "termPriority": 2000
   },
   "Tactician": {
      "bpOffset": 0,
      "bpMultiplier": 7,
      "CR": 0.2,
      "setFactor": "X",
      "traits": ["Tactics"],
      "termPriority": 1400
   },
   "Warrior": {
      "bpOffset": 0,
      "bpMultiplier": 10,
      "CR": 0,
      "setFactor": "",
      "traits": ["Fight", "Shoot"],
      "termPriority": 1300
   },
   "Wise": {
      "bpOffset": 0,
      "bpMultiplier": 5,
      "CR": 0.1,
      "setFactor": "X",
      "traits": ["Leadership"],
      "termPriority": 1800
   }
}


//data-weapons.js
//------------------------------------------------------------------------------------------------------------------------------------------


MASTER_MENU.WEAPONS = {
   "_none": {
      "label": "Unarmed",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[Stub].",
      "BP": 6
   },
   "Axe": {
      "label": "Axe",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR + 1w",
      "traits": "[1H][Hafted]. Cleave. Throwable.",
      "BP": 15
   },
   "Axe x2": {
      "label": "Axe x2",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR + 1w",
      "traits": "[2H][Hafted]. Cleave. Throwable.",
      "BP": 30
   },
   "Axe, Long": {
      "label": "Long Axe",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 2,
      "Dmg": "STR + 1w",
      "traits": "[2H][Hafted]. Cleave 2. Throwable. Reach.",
      "BP": 27
   },
   "Club": {
      "label": "Club",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 0,
      "Dmg": "STR",
      "traits": "[1H]. Stun.",
      "BP": 4
   },
   "Club x2": {
      "label": "Club x2",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 0,
      "Dmg": "STR",
      "traits": "[2H]. Stun.",
      "BP": 4
   },
   "Club, Mace": {
      "label": "Mace",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR + 1b",
      "traits": "[1H][Hafted]. Stun.",
      "BP": 9
   },
   "Club, Spiked Mace": {
      "label": "Spiked Mace",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 2,
      "Dmg": "STR + 1b",
      "traits": "[1H][Hafted]. Stun.",
      "BP": 11
   },
   "Daggers": {
      "label": "Daggers",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[1H][Stub]. Discrete. Throwable.",
      "BP": 6
   },
   "Daggers x2": {
      "label": "Daggers x2",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[2H][Stub]. Discrete. Throwable.",
      "BP": 12
   },
   "Hammer, War": {
      "label": "War Hammer",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 2,
      "Dmg": "STR + 1b",
      "traits": "[1H][Hafted]. Stun 2. Impale.",
      "BP": 25
   },
   "Knife, Medium": {
      "label": "Knife",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "-1m",
      "Impact": 1,
      "Dmg": "STR +1m",
      "traits": "[1H][Stub]. Discrete. Throwable.",
      "BP": 6
   },
   "Knife, Medium x2": {
      "label": "Knife x2",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "-1m",
      "Impact": 1,
      "Dmg": "STR +1m",
      "traits": "[2H][Stub]. Discrete. Throwable.",
      "BP": 12
   },
   "Spear, Medium": {
      "label": "Spear",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 2,
      "Dmg": "STR",
      "traits": "[2H]. Reach. Perimeter. Charge. Throwable.",
      "BP": 30
   },
   "Staff": {
      "label": "Daggers",
      "Class": "Melee",
      "OR": "",
      "Acc": "",
      "Impact": 0,
      "Dmg": "STR",
      "traits": "[2H][Hafted]. Reach. Perimeter. Stun.",
      "BP": 12
   },
   "Pole-arm, Halberd": {
      "label": "Halberd",
      "Class": "Melee",
      "OR": "",
      "Acc": "-1m",
      "Impact": 1,
      "Dmg": "STR +1w",
      "traits": "[2H][Hafted]. Reach. Perimeter. Charge. Cleave.",
      "BP": 26
   },
   "Pole-arm, Glaive": {
      "label": "Glaive",
      "Class": "Melee",
      "OR": "",
      "Acc": "-1m",
      "Impact": 1,
      "Dmg": "STR +3m",
      "traits": "[2H][Awkward]. Reach. Perimeter. Charge.",
      "BP": 17
   },
   "Sword, Saber": {
      "label": "Saber",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "+1m",
      "Impact": 2,
      "Dmg": "STR +1b",
      "traits": "[1H]. Parry.",
      "BP": 13
   },
   "Sword, Saber x2": {
      "label": "Saber x2",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "+1m",
      "Impact": 2,
      "Dmg": "STR +1b",
      "traits": "[2H]. Parry.",
      "BP": 26
   },
   "Sword, (Broad)": {
      "label": "Sword",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR +2m",
      "traits": "[1H]. Parry. Cleave.",
      "BP": 17
   },
   "Sword, (Broad) x2": {
      "label": "Sword x2",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR +2m",
      "traits": "[2H]. Parry. Cleave.",
      "BP": 34
   },
   "Bow, Medium": {
      "label": "Medium Bow",
      "Class": "Range",
      "OR": "STR + 4",
      "Acc": "",
      "Impact": 2,
      "Dmg": "STR +1m",
      "traits": "[2H][Reload].",
      "BP": 7
   },
   "Bow, Long": {
      "label": "Longbow",
      "Class": "Range",
      "OR": "STR + 8",
      "Acc": "",
      "Impact": 3,
      "Dmg": "STR +1w",
      "traits": "[2H][Reload 2]. Impale.",
      "BP": 13
   },
   "Crossbow, Pistol": {
      "label": "Pistol Crossbow",
      "Class": "Range",
      "OR": "4",
      "Acc": "+1m",
      "Impact": 12,
      "Dmg": "1 + 1b",
      "traits": "[1H][Reload, Clumsy]. Melee.",
      "BP": 2
   },
   "Crossbow, Medium": {
      "label": "Crossbow",
      "Class": "Range",
      "OR": "10",
      "Acc": "",
      "Impact": 3,
      "Dmg": "3 + 1b",
      "traits": "[2H][Reload 2, Clumsy][Laden]. Impale.",
      "BP": 10
   },
   "Throwing Axes": {
      "label": "Throwing Axes",
      "Class": "Range",
      "OR": "STR + 2",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[1H][Awkward][Stub][Hafted]. Conceal. Cleave.",
      "BP": 14
   },
   "Throwing Axes x2": {
      "label": "Throwing Axes x2",
      "Class": "Range",
      "OR": "STR + 2",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[2H][Awkward][Stub][Hafted]. Conceal. Cleave.",
      "BP": 28
   },
   "Throwing Knives": {
      "label": "Throwing Knives",
      "Class": "Range",
      "OR": "STR + 3",
      "Acc": "+1m",
      "Impact": 1,
      "Dmg": "STR - 1w",
      "traits": "[1H][Awkward][Stub]. Discrete.",
      "BP": 8
   },
   "Throwing Knives x2": {
      "label": "Throwing Knives x2",
      "Class": "Range",
      "OR": "STR + 3",
      "Acc": "+1m",
      "Impact": 1,
      "Dmg": "STR - 1w",
      "traits": "[2H][Awkward][Stub]. Discrete.",
      "BP": 16
   },
   "Unarmed": {
      "label": "Unarmed",
      "Class": "Melee",
      "OR": "STR",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[Stub].",
      "BP": 6
   },
   "Improvised Melee": {
      "label": "Improvised Melee weapon",
      "Class": "Melee",
      "OR": "STR - 1",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[1H][Stub].",
      "BP": 0
   },
   "Improvised Melee x2": {
      "label": "Improvised Melee weapon x2",
      "Class": "Melee",
      "OR": "STR - 1",
      "Acc": "",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[2H][Stub].",
      "BP": 0
   },
   "Improvised Melee, Large": {
      "label": "Large Improvised Melee weapon",
      "Class": "Melee",
      "OR": "STR - 2",
      "Acc": "-1b",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[2H][Stub][Laden]. Reach.",
      "BP": 0
   },
   "Improvised Thrown": {
      "label": "Improvised Thrown weapon",
      "Class": "Range",
      "OR": "STR",
      "Acc": "-1w",
      "Impact": 1,
      "Dmg": "STR",
      "traits": "[1H][Discard!].",
      "BP": 0
   },
   "Improvised Thrown, Large": {
      "label": "Large Improvised Thrown weapon",
      "Class": "Range",
      "OR": "STR - 1",
      "Acc": "-1w",
      "Impact": 1,
      "Dmg": "STR - 1b",
      "traits": "[2H][Discard!][Stub][Laden].",
      "BP": 0
   },
   "Blast, Minor": {
      "label": "Minor Blast",
      "Class": "Range",
      "OR": "6",
      "Acc": "",
      "Impact": 3,
      "Dmg": "3",
      "traits": "",
      "BP": 30
   },
   "Blast, Major": {
      "label": "Major Blast",
      "Class": "Range",
      "OR": "12",
      "Acc": "",
      "Impact": 3,
      "Dmg": "5",
      "traits": ".",
      "BP": 53
   }
}

//functions-prepare.js
//------------------------------------------------------------------------------------------------------------------------------------------

function runReset(){
   console.println("INVOKED runReset");
   hideEverything();
   initializeGlobal();
}

function runCalculate(){
   console.println("INVOKED runCalculate");
   performCalculations(SUFFIX_LIST);
}

function runBuild(){
   console.println("INVOKED runBuild");
   performBuild(BUILD_TARGETS_BY_NAME, SUFFIX_LIST);
}

function prepareForm(){
   console.println("INVOKED prepareForm");
   var btnBuild = this.getField("btn_build") || {};
   var btnCalculate = this.getField("btn_calculate") || {};
   var btnReset = this.getField("btn_reset") || {};

   btnBuild.setAction("MouseUp", "runBuild();");
   btnCalculate.setAction("MouseUp", "runCalculate();");
   btnReset.setAction("MouseUp", "runReset();");
}

function runInitialize(){
   console.println("INVOKED runInitialize");
   showEverything();
   initializeGlobal();
   prepareForm();
}

//functions-build.js
//------------------------------------------------------------------------------------------------------------------------------------------

function assignConfiguration(menuSetName, suffix){
    if (!menuSetName){ return; }
    console.println("INVOKED assignConfiguration " + menuSetName + ":" + suffix);
 
    var profileHash = getProfileHash(suffix);
    profileHash[menuSetName] = [];
 
    var dataSet = MASTER_MENU[menuSetName]; console.println("-- dataSet " + stringify(dataSet));
    var defaulSetName = MENU_DEFAULT_BY_NAME[menuSetName]; console.println("-- defaulSetName " + defaulSetName);
    var textFieldKeys = BUILD_TARGETS_BY_NAME[menuSetName] || []; console.println("-- textFieldKeys " + textFieldKeys);
    var numKeys = textFieldKeys.length; console.println("-- numKeys " + numKeys);
 
    for (var i = 0; i < numKeys; i++){
       var key = textFieldKeys[i] + suffix;
       var textField = this.getField(key) || {};
       var val = textField.value;
       var config = dataSet[val] || dataSet[defaulSetName] || {};
       config[menuSetName] = config;
       profileHash[menuSetName].push(config);
    }
 }
 
 function assignConfigurations(buildTargetHash, suffix){
    if (!buildTargetHash){ return; }
    console.println("INVOKED assignConfigurations " + suffix);
 
    var menuSetNames = Object.keys(buildTargetHash);
    console.println("menuSetName " + stringify(menuSetNames));

    for (var j = 0; j < menuSetNames.length; j++){
       var menuSetName = menuSetNames[j];
 
       assignConfiguration(menuSetName, suffix);
    }
 }
 
 function performBuild(buildTargetHash, suffixes){
    console.println("INVOKED performBuild \n" + stringify(buildTargetHash));

    for (var i = 0; i < suffixes.length; i++){
       var suffix = suffixes[i];
 
       assignConfigurations(buildTargetHash, suffix);
    }   
 }

//functions-calculate.js
//------------------------------------------------------------------------------------------------------------------------------------------

function getHighest(fieldSet, suffix){
    var highest = -1000;
 
    for (var i = 0; i < fieldSet.length; i++){
       var key = fieldSet[i] + suffix;
       var field = this.getField(key) || {};
       var val = field.value || 0;
       
       if (val > highest){ 
         highest = val;
       }
    }
 
    return highest || 0;
 }

function calcBPTotal(bpFields, suffix){
    var sum = 0;
 
    for (var i = 0; i < bpFields.length; i++){
       var item = bpFields[i];
       var key = item + suffix;
       var field = this.getField(key) || {};    
       var val = field.value || 0;
       sum = sum + val;
    }
 
    return sum || 0;
 }
 
 function driveBPSum(suffix){
    var key = BP_TOTAL_FIELD + suffix;
    var field = this.getField(key) || {};
    var bpTotal = calcBPTotal(BP_SUBFIELDS, suffix);
 
    field.value = bpTotal;
 }

 function extractValue(str, searchStr){
    if (! (str && searchStr)){ return 0; }
    if (str.length <= 3){ return 0; }

    var reClean = new RegExp("\\b" + searchStr + "\\b", "i");
    var resultClean = reClean.exec(str);

    var reDigit = new RegExp("\\b" + searchStr + " \\d\\b", "i");    
    var resultDigit = reDigit.exec(str);

    var found = 0;
    if (resultDigit){
       var text = ":" + resultDigit;
       found = text.split(" ")[1];
    }
    else if (resultClean){
       found = 1;
    }

    return 1*found || 0;
}

 
function extractTraitLevel(traitFields, searchStr, suffix){
    var sum = 0;

    for (var i = 0; i < traitFields.length; i++) {
        var key = traitFields[i] + suffix;
        var field = this.getField(key) || {};
        var str = field.value;
        var amt = extractValue(str, searchStr);

        sum = sum + amt;
    }

    return sum || 0;
}
 
function resetChecks(fieldSet, suffix){
    for (var j = 0; j < fieldSet.length; j++){
       var cbField = fieldSet[j];
 
       for (var k = 0; k <= 3; k++){
          var key = cbField + "_" + k + suffix;
          var field = this.getField(key) || {};
 
          if (field.checkThisBox){
            field.checkThisBox(0, false);
          }
       }
    }
 }
 
 function setChecks(fieldSet, threshold, suffix){
    for (var j = 0; j < fieldSet.length; j++){
       var cbField = fieldSet[j];
 
       for (var k = 0; k <= threshold; k++){
          var key = cbField + "_" + k + suffix;
          var field = this.getField(key) || {};
 
          if (field.checkThisBox){
             field.checkThisBox(0, true);
          }
       }
    }
 }

 function driveBurden(suffix){
    var physicality = getHighest(PHYSICALITY_FIELDS, suffix);
    var laden = extractTraitLevel(TRAITS_FIELDS, "Laden", suffix);
    var burden = 1 + laden - physicality;
    
    resetChecks(BURDEN_FIELDS, suffix);
    
    if (burden > 0){ 
       setChecks(BURDEN_FIELDS, burden - 1, suffix);
    }
 }
 
function performCalculations(suffixes){  
   console.println("INVOKED performCalculations"); 
    for (var i = 0; i < suffixes.length; i++){
       var suffix = suffixes[i];
 
       driveBPSum(suffix);
       driveBurden(suffix);
    }          
 }

//functions-menu.js
//------------------------------------------------------------------------------------------------------------------------------------------

function getMenuName(fooText){
    if (!fooText){ return {}; }
 
    var rootFoo = fooText.split(GLOBAL_DELIMITER)[0];
    var menuName = MENU_REFERENCES_BY_FOO[rootFoo] || MENU_NAME_ERROR;
 
    return menuName;
 }
 
 function getMenuEntriesHash(menuName){
    if (!menuName){ return {}; }
 
    var entriesHash = MASTER_MENU[menuName] || {};
 
    return entriesHash;
 }
 
 function getMenuItems(menuName, entriesList){
    if (!menuName){ return []; }
 
    var firstItem = "Choose [ " + menuName + " ]";
    var result = entriesList;
    result.unshift(firstItem);
  
    return result;
 }
 
 function getMenuDefaultValue(menuName){
    if (!menuName){ return MENU_DEFAULT_NONE; }
 
    var result = MENU_DEFAULT_BY_NAME[menuName];
 
    return result;
 }
 
 /**
  * INVOKED by each Configuration button
  * via displayMenuSetText(event.target.name);
  */
 function displayMenuSetText(buttonName){
    if (!buttonName){ return []; }
 
    var suffix = getSuffix(buttonName);
    var fooText = getFoo(buttonName);
    var menuName = getMenuName(fooText);
    var entriesHash = getMenuEntriesHash(menuName);
    var entriesList = Object.keys(entriesHash);
    var field = getTextField(fooText, suffix);
    var menuItems = getMenuItems(menuName, entriesList);
    var defaultValue = getMenuDefaultValue(menuName);
    var choice = app.popUpMenu(menuItems) || defaultValue;
 
    field.value = choice;
 }

//functions-process.js
//------------------------------------------------------------------------------------------------------------------------------------------

/**
 * INVOKED by each Profile Configuration button
 * -- requires that buttons are in the pattern btn_foo_suffix
 * -- requires that fields for storing results are in the pattern text_foo_suffix
 * -- requires that foo is a single word possibly followed by a _digit
 * -- requires that suffix is unique
 * -- requires that configurationHash contains foo and resolves
 * -- example btn_variant_1_a which matches text_variant_1_a
 */

function getSuffix(buttonName){
   if (!buttonName){ return; }

   var list = buttonName.split(GLOBAL_DELIMITER);
   var numItems = list.length;
 
   return GLOBAL_DELIMITER + list[numItems - 1];
}

function getFoo(buttonName){
   if (!buttonName){ return; }

   var list = buttonName.split(GLOBAL_DELIMITER);
   list.shift();
   list.pop();

   return list.join(GLOBAL_DELIMITER);
}

function getTextField(fooText, suffix){
   if (!fooText){ return {}; }

   var key = "text_" + fooText + suffix;
   var field = this.getField(key) || {};

   return field;
}

 /**
  * TOGGLE the control, field, or button to one of the enumerated TOGGLE_STATUS values
  * -- givenList is one of either BUTTON_LIST or CONTROL_LIST
  * -- optional suffix is the set identifier such as _a or _b or _c
  */
 function toggleVisibility(givenList, toggleState, suffix){
   if (!givenList || !givenList.length){ return; }
   console.println("INVOKED toggleVisibility " + ":" + toggleState + " for " + (suffix || "all found"));
   
   var state = toggleState || 0;
   for (var i = 0; i < givenList.length; i++){
      var key = givenList[i] + (suffix || "");
      var field = this.getField(key) || {};

      field.display = state;
   }
}

function toggleSets(toggleState, suffixes){
   console.println("INVOKED toggleSets " + ":" + toggleState + " for " + stringify(suffixes));
   console.println(" toggleVisibility -- BUTTON_LIST"); toggleVisibility(BUTTON_LIST, toggleState); 
   console.println(" toggleVisibility -- LABEL_LIST"); toggleVisibility(LABEL_LIST, toggleState); 

   for (var i = 0; i < suffixes.length; i++){
      var suffix = suffixes[i];
      console.println(" toggleVisibility -- CONTROL_LIST"); toggleVisibility(CONTROL_LIST, toggleState, suffix); 
      console.println(" toggleVisibility -- TEXT_LIST"); toggleVisibility(TEXT_LIST, toggleState, suffix); 
   }
}

function hideEverything(){
   console.println("INVOKED hideEverything");
   toggleSets(TOGGLE_STATUS.hidden, SUFFIX_LIST);
   toggleVisibility(["btn_initialize"], TOGGLE_STATUS.noPrint);
}

function showEverything(){
   console.println("INVOKED showEverything");
   toggleSets(TOGGLE_STATUS.noPrint, SUFFIX_LIST);
   toggleVisibility(["btn_initialize"], TOGGLE_STATUS.hidden);
}

function initializeGlobal(){
   console.println("INVOKED initializeGlobal");
   _global = {};
}

function getProfileKey(suffix){
   var profileKey = PROFILE_KEY + suffix;
   return profileKey;
}

function getProfileHash(suffix){
   console.println("INVOKED getProfileHash " + suffix);

   var profileKey = getProfileKey(suffix);
   var profileHash = _global[profileKey];

   if (!profileHash){
      profileHash = initializeProfile(suffix);
   }

   return profileHash;
}

function initializeProfile(suffix){
   var profileKey = getProfileKey(suffix);
   console.println("INVOKED initializeProfile " + ":" + profileKey + " for " + suffix);

   _global[profileKey] = {
      "attrList": [2,2,2,2,2,2,2,2,3],
      "dBPList": [],
      "iCRrList": []
   };

   var pHash = _global[profileKey];
   return pHash;
}





