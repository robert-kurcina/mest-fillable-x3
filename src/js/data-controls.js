

//data-controls.js
//------------------------------------------------------------------------------------------------------------------------------------------

var SUFFIX_LIST = ["_a", "_b", "_c"];
var BP_SUBFIELDS = ["fBP", "BP_1", "BP_2", "BP_3", "BP_4", "BP_item_1", "BP_item_2"];
var BURDEN_FIELDS = ["cb_cca", "cb_ref", "cb_mov"];
var PHYSICALITY_FIELDS = ["STR", "SIZ"];
var BP_TOTAL_FIELD = "BPTotal";
var GLOBAL_DELIMITER = "_";
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

