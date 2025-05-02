

//data-weapons.js
//------------------------------------------------------------------------------------------------------------------------------------------

var MASTER_MENU = MASTER_MENU || {};

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