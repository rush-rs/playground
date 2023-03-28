use std::collections::BTreeMap;

use lirstings::theme::ThemeValue;

pub fn theme() -> BTreeMap<String, ThemeValue> {
    BTreeMap::from([
        ("black".to_owned(), ThemeValue::Color("#181a1f".to_owned())),
        ("bg0".to_owned(), ThemeValue::Color("#282c34".to_owned())),
        ("bg1".to_owned(), ThemeValue::Color("#31353f".to_owned())),
        ("bg2".to_owned(), ThemeValue::Color("#393f4a".to_owned())),
        ("bg3".to_owned(), ThemeValue::Color("#3b3f4c".to_owned())),
        ("bg_d".to_owned(), ThemeValue::Color("#21252b".to_owned())),
        (
            "bg_blue".to_owned(),
            ThemeValue::Color("#73b8f1".to_owned()),
        ),
        (
            "bg_yellow".to_owned(),
            ThemeValue::Color("#ebd09c".to_owned()),
        ),
        ("fg".to_owned(), ThemeValue::Color("#abb2bf".to_owned())),
        ("purple".to_owned(), ThemeValue::Color("#c678dd".to_owned())),
        ("green".to_owned(), ThemeValue::Color("#98c379".to_owned())),
        ("orange".to_owned(), ThemeValue::Color("#d19a66".to_owned())),
        ("blue".to_owned(), ThemeValue::Color("#61afef".to_owned())),
        ("yellow".to_owned(), ThemeValue::Color("#e5c07b".to_owned())),
        ("cyan".to_owned(), ThemeValue::Color("#56b6c2".to_owned())),
        ("red".to_owned(), ThemeValue::Color("#e86671".to_owned())),
        ("grey".to_owned(), ThemeValue::Color("#5c6370".to_owned())),
        (
            "light_grey".to_owned(),
            ThemeValue::Color("#848b98".to_owned()),
        ),
        (
            "dark_cyan".to_owned(),
            ThemeValue::Color("#2b6f77".to_owned()),
        ),
        (
            "dark_red".to_owned(),
            ThemeValue::Color("#993939".to_owned()),
        ),
        (
            "dark_yellow".to_owned(),
            ThemeValue::Color("#93691d".to_owned()),
        ),
        (
            "dark_purple".to_owned(),
            ThemeValue::Color("#8a3fa0".to_owned()),
        ),
        (
            "diff_add".to_owned(),
            ThemeValue::Color("#31392b".to_owned()),
        ),
        (
            "diff_delete".to_owned(),
            ThemeValue::Color("#382b2c".to_owned()),
        ),
        (
            "diff_change".to_owned(),
            ThemeValue::Color("#1c3448".to_owned()),
        ),
        (
            "diff_text".to_owned(),
            ThemeValue::Color("#2c5372".to_owned()),
        ),
        ("annotation".to_owned(), ThemeValue::Color("$fg".to_owned())),
        (
            "attribute".to_owned(),
            ThemeValue::Color("$cyan".to_owned()),
        ),
        (
            "boolean".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "character".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "comment".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: true,
                bold: false,
                link: Some("grey".to_owned()),
            },
        ),
        (
            "conditional".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        (
            "constant".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "constant.builtin".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "constant.macro".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "constructor".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: false,
                bold: true,
                link: Some("yellow".to_owned()),
            },
        ),
        ("error".to_owned(), ThemeValue::Color("$fg".to_owned())),
        (
            "exception".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        ("field".to_owned(), ThemeValue::Color("$cyan".to_owned())),
        ("float".to_owned(), ThemeValue::Color("$orange".to_owned())),
        ("function".to_owned(), ThemeValue::Color("$blue".to_owned())),
        (
            "function.builtin".to_owned(),
            ThemeValue::Color("$cyan".to_owned()),
        ),
        (
            "function.macro".to_owned(),
            ThemeValue::Color("$cyan".to_owned()),
        ),
        (
            "include".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        (
            "keyword".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        (
            "keyword.function".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        (
            "keyword.operator".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        ("label".to_owned(), ThemeValue::Color("$red".to_owned())),
        ("method".to_owned(), ThemeValue::Color("$blue".to_owned())),
        (
            "namespace".to_owned(),
            ThemeValue::Color("$yellow".to_owned()),
        ),
        ("none".to_owned(), ThemeValue::Color("$fg".to_owned())),
        ("number".to_owned(), ThemeValue::Color("$orange".to_owned())),
        ("operator".to_owned(), ThemeValue::Color("$fg".to_owned())),
        ("parameter".to_owned(), ThemeValue::Color("$red".to_owned())),
        (
            "parameter.reference".to_owned(),
            ThemeValue::Color("$fg".to_owned()),
        ),
        ("property".to_owned(), ThemeValue::Color("$cyan".to_owned())),
        (
            "punctuation.delimiter".to_owned(),
            ThemeValue::Color("$light_grey".to_owned()),
        ),
        (
            "punctuation.bracket".to_owned(),
            ThemeValue::Color("$light_grey".to_owned()),
        ),
        (
            "punctuation.special".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
        ("repeat".to_owned(), ThemeValue::Color("$purple".to_owned())),
        ("string".to_owned(), ThemeValue::Color("$green".to_owned())),
        (
            "string.regex".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "string.escape".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
        ("symbol".to_owned(), ThemeValue::Color("$cyan".to_owned())),
        ("tag".to_owned(), ThemeValue::Color("$purple".to_owned())),
        (
            "tag.delimiter".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        ("text".to_owned(), ThemeValue::Color("$fg".to_owned())),
        (
            "text.strong".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: false,
                bold: true,
                link: Some("fg".to_owned()),
            },
        ),
        (
            "text.emphasis".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: true,
                bold: false,
                link: Some("fg".to_owned()),
            },
        ),
        (
            "text.underline".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: true,
                strikethrough: false,
                italic: false,
                bold: false,
                link: Some("fg".to_owned()),
            },
        ),
        (
            "text.strike".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: true,
                italic: false,
                bold: false,
                link: Some("fg".to_owned()),
            },
        ),
        (
            "text.title".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: false,
                bold: true,
                link: Some("orange".to_owned()),
            },
        ),
        (
            "text.literal".to_owned(),
            ThemeValue::Color("$green".to_owned()),
        ),
        (
            "text.uri".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: true,
                strikethrough: false,
                italic: false,
                bold: false,
                link: Some("cyan".to_owned()),
            },
        ),
        (
            "text.todo".to_owned(),
            ThemeValue::Object {
                color: None,
                underline: false,
                strikethrough: false,
                italic: true,
                bold: false,
                link: Some("red".to_owned()),
            },
        ),
        ("text.math".to_owned(), ThemeValue::Color("$fg".to_owned())),
        (
            "text.reference".to_owned(),
            ThemeValue::Color("$blue".to_owned()),
        ),
        (
            "text.enviroment".to_owned(),
            ThemeValue::Color("$fg".to_owned()),
        ),
        (
            "text.enviroment.name".to_owned(),
            ThemeValue::Color("$fg".to_owned()),
        ),
        ("note".to_owned(), ThemeValue::Color("$fg".to_owned())),
        ("warning".to_owned(), ThemeValue::Color("$fg".to_owned())),
        ("danger".to_owned(), ThemeValue::Color("$fg".to_owned())),
        ("type".to_owned(), ThemeValue::Color("$yellow".to_owned())),
        (
            "type.builtin".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "type.qualifier".to_owned(),
            ThemeValue::Color("$purple".to_owned()),
        ),
        ("variable".to_owned(), ThemeValue::Color("$fg".to_owned())),
        (
            "variable.builtin".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
        (
            "string.special.grammar".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "symbol.grammar.pascal".to_owned(),
            ThemeValue::Color("$yellow".to_owned()),
        ),
        (
            "symbol.grammar.camel".to_owned(),
            ThemeValue::Color("$cyan".to_owned()),
        ),
        (
            "symbol.grammar.upper".to_owned(),
            ThemeValue::Color("$orange".to_owned()),
        ),
        (
            "symbol.grammar.lower".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
        (
            "storageclass.lifetime".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
        (
            "tag.attribute".to_owned(),
            ThemeValue::Color("$yellow".to_owned()),
        ),
        (
            "text.environment".to_owned(),
            ThemeValue::Color("$fg".to_owned()),
        ),
        (
            "text.environment.name".to_owned(),
            ThemeValue::Color("$fg".to_owned()),
        ),
        (
            "text.diff.add".to_owned(),
            ThemeValue::Color("$green".to_owned()),
        ),
        (
            "text.diff.delete".to_owned(),
            ThemeValue::Color("$red".to_owned()),
        ),
    ])
}
