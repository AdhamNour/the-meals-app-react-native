"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleFavorite = exports.TOGGLE_FAVORITE = void 0;
var TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
exports.TOGGLE_FAVORITE = TOGGLE_FAVORITE;

var toggleFavorite = function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  };
};

exports.toggleFavorite = toggleFavorite;