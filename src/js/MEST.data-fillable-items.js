//MEST.data-fillable-items.js

var ADJUST_AVERAGE = -57;
var AVERAGE_ATTR = 2;
var MASTER_MENU = {};

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