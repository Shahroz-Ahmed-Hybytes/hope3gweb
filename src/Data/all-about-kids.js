const kids = [
  {
    id: "teaching_safety_safely",
    image: "/Images/allAboutKids/teaching_safety_safely.png",
    alt: "Teaching Safety Safely with the HOPE Augmented Reality App"
  },
  {
    id: "learning_rainbow_ziggy",
    image: "/Images/allAboutKids/learning_rainbow_ziggy.png",
    alt: "A rainbow between Ziggy writing on blackboard and Ziggy thinking",
    pos: "absolute",
    section: "one"
  },
  {
    id: "school_house_baby_ziggy",
    image: "/Images/allAboutKids/school_house_baby_ziggy.png",
    alt: "A school building, a house and baby Ziggy"
  },
  {
    id: "ziggy_hand_app",
    image: "/Images/allAboutKids/ziggy_hand_app.png",
    alt: "Ziggy's hand holding smartphone with app",
    pos: "absolute",
    section: "two"
  },
  {
    id: "open_book",
    image: "/Images/allAboutKids/open_book.png",
    alt: "An open book with a spring and shapes coming out from it",
    pos: "absolute",
    section: "three"
  },
  {
    id: "kids_child_holding_ziggy",
    image: "/Images/allAboutKids/child_holding_ziggy.png",
    alt: "Ziggy holding younger Ziggy",
    pos: "absolute",
    section: "three"
  },
  {
    id: "imagining_ziggy",
    image: "/Images/allAboutKids/imagining_ziggy.png",
    alt: "Ziggy reading a book while imagining riding on a wheeled duck from a rainbow",
    pos: "absolute",
    section: "three"
  },
  {
    id: "kids_energy_saving_ziggy",
    image: "/Images/allAboutKids/energy_saving_ziggy.png",
    alt: "Ziggy pulling a plug",
    pos: "absolute",
    section: "three"
  },
  {
    id: "here_to_help_ziggy",
    image: "/Images/allAboutKids/here_to_help_ziggy.png",
    alt: "Ziggy with headset on saying \"HERE TO HELP\""
  },
  {
    id: "ziggys_services",
    image: "/Images/allAboutKids/ziggys_services.png",
    alt: "Ziggy's Services!"
  },
  {
    id: "coin_dropping_ziggy",
    image: "/Images/allAboutKids/coin_dropping_ziggy.png",
    alt: "Ziggy dropping a coin in a box",
    pos: "absolute",
    section: "four"
  },
  {
    id: "childish_drawing",
    image: "/Images/allAboutKids/childish_drawing.png",
    alt: "A crayon drawing of ziggy with a person",
    pos: "absolute",
    section: "four"
  },
  {
    id: "origami",
    image: "/Images/allAboutKids/origami.png",
    alt: "origami of a red bird, green boat and blue butterfly"
  },
  {
    id: "kids_coins",
    image: "/Images/allAboutKids/coins.png",
    alt: "Some coins",
    pos: "absolute",
    section: "five"
  },
  {
    id: "depositing_ziggy",
    image: "/Images/allAboutKids/depositing_ziggy.png",
    alt: "Ziggy holding credit/debit cards with coins",
    pos: "absolute",
    section: "five"
  },
  {
    id: "piggy_bank_ziggy",
    image: "/Images/allAboutKids/piggy_bank_ziggy.png",
    alt: "Ziggy holding a piggy bank",
    pos: "absolute",
    section: "five"
  },
  {
    id: "benefits_ziggy",
    image: "/Images/allAboutKids/benefits_ziggy.png",
    alt: "Ziggy hanging off a whiteboard blind that reads \"How would Our Service Benefits You\"",
    pos: "absolute",
    section: "six"
  },
  {
    id: "ziggys_on_world",
    image: "/Images/allAboutKids/ziggys_on_world.png",
    alt: "Ziggys on top of the world",
    pos: "absolute",
    section: "six"
  },
  {
    id: "free_gift_ziggy",
    image: "/Images/allAboutKids/free_gift_ziggy.png",
    alt: "Ziggy holding a giftbox with a word \"FREE\" on it",
    pos: "absolute",
    section: "seven"
  },
  {
    id: "how_to_access_lessons",
    image: "/Images/allAboutKids/how_to_access_lessons.png",
    alt: "How to Access Ziggy's Lessons"
  },
  {
    id: "access_train",
    image: "/Images/allAboutKids/access_train.png",
    alt: "A train with \"ACCESS\" written along the top",
    pos: "absolute",
    section: "eight"
  },
  {
    id: "account_rainbow_ziggy",
    image: "/Images/allAboutKids/account_rainbow_ziggy.png",
    alt: "Ziggy in front of a rainbow holding an account login box",
    pos: "absolute",
    section: "eight"
  },
  {
    id: "kids_writing_ziggy",
    image: "/Images/allAboutKids/writing_ziggy.png",
    alt: "Ziggy with a big pencil writing his name",
    pos: "absolute",
    section: "eight"
  },
  {
    id: "mailbox_ziggy_with_plane",
    image: "/Images/allAboutKids/mailbox_ziggy_with_plane.png",
    alt: "Ziggy in a mailbox throwing out a paper plane"
  },
  {
    id: "dashed_line",
    image: "/Images/allAboutKids/dashed_line.png",
    alt: "",
    pos: "absolute",
    section: "nine"
  },
  {
    id: "writing_message_ziggy",
    image: "/Images/allAboutKids/writing_message_ziggy.png",
    alt: "Ziggy thinking on writing a message",
    pos: "absolute",
    section: "nine"
  },
  {
    id: "messages_ziggy",
    image: "/Images/allAboutKids/messages_ziggy.png",
    alt: "Ziggy with large red phone receiver along with an envelop containing a letter, a recording microphone and a game controller"
  },
  {
    id: "footprints",
    image: "/Images/allAboutKids/footprints.png",
    alt: "Some footprints",
    pos: "absolute",
    section: "ten"
  },
  {
    id: "kids_staircase_ziggy",
    image: "/Images/allAboutKids/staircase_ziggy.png",
    alt: "Ziggy at a staircase with numbers",
    pos: "absolute",
    section: "ten"
  },
  {
    id: "no_stealing_ziggys",
    image: "/Images/allAboutKids/no_stealing_ziggys.png",
    alt: "One Ziggy trying to steal a giftbox with a \"no symbol\" over it from another Ziggy",
    pos: "absolute",
    section: "ten"
  },
  {
    id: "camera_dolly_ziggy",
    image: "/Images/allAboutKids/camera_dolly_ziggy.png",
    alt: "Ziggy on a camera dolly",
    pos: "absolute",
    section: "ten"
  },
  {
    id: "skin_colour_tone_ziggys",
    image: "/Images/allAboutKids/skin_colour_tone_ziggys.png",
    alt: "Ziggy's faces in different skin colour tones with confetti around them",
    pos: "absolute",
    section: "eleven"
  },
  {
    id: "rainbow_on_ziggy_island",
    image: "/Images/allAboutKids/rainbow_on_ziggy_island.png",
    alt: "A rainbow coming down on Ziggy's island",
    pos: "absolute",
    section: "eleven"
  },
  {
    id: "comforting_ziggy",
    image: "/Images/allAboutKids/comforting_ziggy.png",
    alt: "Ziggy comforting little Ziggy",
    pos: "absolute",
    section: "eleven"
  },
  {
    id: "about_hope_ziggy",
    image: "/Images/allAboutKids/about_hope_ziggy.png",
    alt: "Ziggy thinking with a question mark within letters spelling out \"HOPE\""
  },
  {
    id: "hugging_ziggys",
    image: "/Images/allAboutKids/hugging_ziggys.png",
    class: "hugging_ziggys",
    alt: "Two Ziggys hugging",
    section: "twelve"
  }  
];

export default kids;