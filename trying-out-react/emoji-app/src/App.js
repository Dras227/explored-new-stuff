import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const emojiObject = {
  "yt recs":["hi man","hello"],
    "😂": "Face with Tears of Joy",
    "😭": "Loudly Crying Face",
    "🥺": "Pleading Face",
    "🤣": "Rolling on the Floor Laughing",
    "❤️": "Red Heart",
    "✨": "Sparkles",
    "😍": "Smiling Face with Heart-Eyes",
    "🙏": "Folded Hands",
    "😊": "Smiling Face with Smiling Eyes",
    "🥰": "Smiling Face with Hearts",
    "👍": "Thumbs Up",
    "💕": "Two Hearts",
    "🤔": "Thinking Face",
    "😲": "Astonished Face",
    "😘": "Face Blowing A Kiss",
    "😒": "Unamused Face",
    "😩": "Weary Face",
    "😏": "Smirking Face",
    "😁": "Beaming Face With Smiling Eyes",
    "😳": "Flushed Face",
    "🙈": "See No Evil Monkey",
    "😔": "Pensive Face",
    "😑": "Expressionless Face",
    "😋": "Face Savoring Food ",
    "😞": "Disappointed Face",
    "😀": "Grinning Face",
"😃": "Grinning Face with Big Eyes",
"😄": "Grinning Face with Smiling Eyes",
"😁": "Beaming Face with Smiling Eyes",
"😆": "Grinning Squinting Face",
"😅": "Grinning Face with Sweat",
"🤣": "Rolling on the Floor Laughing",
"😂": "Face with Tears of Joy",
"🙂": "Slightly Smiling Face",
"🙃": "Upside-Down Face",
"😉": "Winking Face",
"😊": "Smiling Face with Smiling Eyes",
"😇": "Smiling Face with Halo",
"🥰": "Smiling Face with Hearts",
"😍": "Smiling Face with Heart-Eyes",
"🤩": "Star-Struck",
"😘": "Face Blowing a Kiss",
"😗": "Kissing Face",
"☺️": "Smiling Face",
"😚": "Kissing Face with Closed Eyes",
"😙": "Kissing Face with Smiling Eyes",
"🥲": "Smiling Face with Tear",
"😋": "Face Savoring Food",
"😛": "Face with Tongue",
"😜": "Winking Face with Tongue",
"🤪": "Zany Face",
"😝": "Squinting Face with Tongue",
"🤑": "Money-Mouth Face",
"🤗": "Hugging Face",
"🤭": "Face with Hand Over Mouth",
"🤫": "Shushing Face",
"🤔": "Thinking Face",
"🤐": "Zipper-Mouth Face",
"🤨": "Face with Raised Eyebrow",
"😐": "Neutral Face",
"😑": "Expressionless Face",
"😶": "Face Without Mouth",
"😶‍🌫️": "Face in Clouds",
"😏": "Smirking Face",
"😒": "Unamused Face",
"🙄": "Face with Rolling Eyes",
"😬": "Grimacing Face",
"😮‍💨": "Face Exhaling",
"🤥": "Lying Face",
"😌": "Relieved Face",
"😔": "Pensive Face",
"😪": "Sleepy Face",
"🤤": "Drooling Face",
"😴": "Sleeping Face",
"😷": "Face with Medical Mask",
"🤒": "Face with Thermometer",
"🤕": "Face with Head-Bandage",
"🤢": "Nauseated Face",
"🤮": "Face Vomiting",
"🤧": "Sneezing Face",
"🥵": "Hot Face",
"🥶": "Cold Face",
"🥴": "Woozy Face",
"😵": "Dizzy Face",
"😵‍💫": "Face with Spiral Eyes",
"🤯": "Exploding Head",
"🤠": "Cowboy Hat Face",
"🥳": "Partying Face",
"🥸": "Disguised Face",
"😎": "Smiling Face with Sunglasses",
"🤓": "Nerd Face",
"🧐": "Face with Monocle",
"😕": "Confused Face",
"😟": "Worried Face",
"🙁": "Slightly Frowning Face",
"☹️": "Frowning Face",
"😮": "Face with Open Mouth",
"😯": "Hushed Face",
"😲": "Astonished Face",
"😳": "Flushed Face",
"🥺": "Pleading Face",
"😦": "Frowning Face with Open Mouth",
"😧": "Anguished Face",
"😨": "Fearful Face",
"😰": "Anxious Face with Sweat",
"😥": "Sad but Relieved Face",
"😢": "Crying Face",
"😭": "Loudly Crying Face",
"😱": "Face Screaming in Fear",
"😖": "Confounded Face",
"😣": "Persevering Face",
"😞": "Disappointed Face",
"😓": "Downcast Face with Sweat",
"😩": "Weary Face",
"😫": "Tired Face",
"🥱": "Yawning Face",
"😤": "Face with Steam From Nose",
"😡": "Pouting Face",
"😠": "Angry Face",
"🤬": "Face with Symbols on Mouth",
"😈": "Smiling Face with Horns",
"👿": "Angry Face with Horns",
"💀": "Skull",
"☠️": "Skull and Crossbones",
"💩": "Pile of Poo",
"🤡": "Clown Face",
"👹": "Ogre",
"👺": "Goblin",
"👻": "Ghost",
"👽": "Alien",
"👾": "Alien Monster",
"🤖": "Robot",
"😺": "Grinning Cat",
"😸": "Grinning Cat with Smiling Eyes",
"😹": "Cat with Tears of Joy",
"😻": "Smiling Cat with Heart-Eyes",
"😼": "Cat with Wry Smile",
"😽": "Kissing Cat",
"🙀": "Weary Cat",
"😿": "Crying Cat",
"😾": "Pouting Cat",
"💋": "Kiss Mark",
"👋": "Waving Hand",
"🤚": "Raised Back of Hand",
"🖐️": "Hand with Fingers Splayed",
"✋": "Raised Hand",
"🖖": "Vulcan Salute",
"👌": "OK Hand",
"🤌": "Pinched Fingers",
"🤏": "Pinching Hand",
"✌️": "Victory Hand",
"🤞": "Crossed Fingers",
"🤟": "Love-You Gesture",
"🤘": "Sign of the Horns",
"🤙": "Call Me Hand",
"👈": "Backhand Index Pointing Left",
"👉": "Backhand Index Pointing Right",
"👆": "Backhand Index Pointing Up",
"🖕": "Middle Finger",
"👇": "Backhand Index Pointing Down",
"☝️": "Index Pointing Up",
"👍": "Thumbs Up",
"👎": "Thumbs Down",
"✊": "Raised Fist",
"👊": "Oncoming Fist",
"🤛": "Left-Facing Fist",
"🤜": "Right-Facing Fist",
"👏": "Clapping Hands",
"🙌": "Raising Hands",
"👐": "Open Hands",
"🤲": "Palms Up Together",
"🤝": "Handshake",
"🙏": "Folded Hands",
"✍️": "Writing Hand",
"💅": "Nail Polish",
"🤳": "Selfie",
"💪": "Flexed Biceps",
"🦾": "Mechanical Arm",
"🦿": "Mechanical Leg",
"🦵": "Leg",
"🦶": "Foot",
"👂": "Ear",
"🦻": "Ear with Hearing Aid",
"👃": "Nose",
"🧠": "Brain",
"🫀": "Anatomical Heart",
"🫁": "Lungs",
"🦷": "Tooth",
"🦴": "Bone",
"👀": "Eyes",
"👁️": "Eye",
"👅": "Tongue",
"👄": "Mouth",
"👶": "Baby",
"🧒": "Child",
"👦": "Boy",
"👧": "Girl",
"🧑": "Person",
"👱": "Person: Blond Hair",
"👨": "Man",
"🧔": "Person: Beard",
"👨‍🦰": "Man: Red Hair",
"👨‍🦱": "Man: Curly Hair",
"👨‍🦳": "Man: White Hair",
"👨‍🦲": "Man: Bald",
"👩": "Woman",
"👩‍🦰": "Woman: Red Hair",
"🧑‍🦰": "Person: Red Hair",
"👩‍🦱": "Woman: Curly Hair",
"🧑‍🦱": "Person: Curly Hair",
"👩‍🦳": "Woman: White Hair",
"🧑‍🦳": "Person: White Hair",
"👩‍🦲": "Woman: Bald",
"🧑‍🦲": "Person: Bald",
"👱‍♀️": "Woman: Blond Hair",
"👱‍♂️": "Man: Blond Hair",
"🧓": "Older Person",
"👴": "Old Man",
"👵": "Old Woman",
"🙍": "Person Frowning",
"🙍‍♂️": "Man Frowning",
"🙍‍♀️": "Woman Frowning",
"🙎": "Person Pouting",
"🙎‍♂️": "Man Pouting",
"🙎‍♀️": "Woman Pouting",
"🙅": "Person Gesturing No",
"🙅‍♂️": "Man Gesturing No",
"🙅‍♀️": "Woman Gesturing No",
"🙆": "Person Gesturing OK",
"🙆‍♂️": "Man Gesturing OK",
"🙆‍♀️": "Woman Gesturing OK",
"💁": "Person Tipping Hand",
"💁‍♂️": "Man Tipping Hand",
"💁‍♀️": "Woman Tipping Hand",
"🙋": "Person Raising Hand",
"🙋‍♂️": "Man Raising Hand",
"🙋‍♀️": "Woman Raising Hand",
"🧏": "Deaf Person",
"🧏‍♂️": "Deaf Man",
"🧏‍♀️": "Deaf Woman",
"🙇": "Person Bowing",
"🙇‍♂️": "Man Bowing",
"🙇‍♀️": "Woman Bowing",
"🤦": "Person Facepalming",
"🤦‍♂️": "Man Facepalming",
"🤦‍♀️": "Woman Facepalming",
"🤷": "Person Shrugging",
"🤷‍♂️": "Man Shrugging",
"🤷‍♀️": "Woman Shrugging",
"🧑‍⚕️": "Health Worker",
"👨‍⚕️": "Man Health Worker",
"👩‍⚕️": "Woman Health Worker",
"🧑‍🎓": "Student",
"👨‍🎓": "Man Student",
"👩‍🎓": "Woman Student",
"🧑‍🏫": "Teacher",
"👨‍🏫": "Man Teacher",
"👩‍🏫": "Woman Teacher",
"🧑‍⚖️": "Judge",
"👨‍⚖️": "Man Judge",
"👩‍⚖️": "Woman Judge",
"🧑‍🌾": "Farmer",
"👨‍🌾": "Man Farmer",
"👩‍🌾": "Woman Farmer",
"🧑‍🍳": "Cook",
"👨‍🍳": "Man Cook",
"👩‍🍳": "Woman Cook",
"🧑‍🔧": "Mechanic",
"👨‍🔧": "Man Mechanic",
"👩‍🔧": "Woman Mechanic",
"🧑‍🏭": "Factory Worker",
"👨‍🏭": "Man Factory Worker",
"👩‍🏭": "Woman Factory Worker",
"🧑‍💼": "Office Worker",
"👨‍💼": "Man Office Worker",
"👩‍💼": "Woman Office Worker",
"🧑‍🔬": "Scientist",
"👨‍🔬": "Man Scientist",
"👩‍🔬": "Woman Scientist",
"🧑‍💻": "Technologist",
"👨‍💻": "Man Technologist",
"👩‍💻": "Woman Technologist",
"🧑‍🎤": "Singer",
"👨‍🎤": "Man Singer",
"👩‍🎤": "Woman Singer",
"🧑‍🎨": "Artist",
"👨‍🎨": "Man Artist",
"👩‍🎨": "Woman Artist",
"🧑‍✈️": "Pilot",
"👨‍✈️": "Man Pilot",
"👩‍✈️": "Woman Pilot",
"🧑‍🚀": "Astronaut",
"👨‍🚀": "Man Astronaut",
"👩‍🚀": "Woman Astronaut",
"🧑‍🚒": "Firefighter",
"👨‍🚒": "Man Firefighter",
"👩‍🚒": "Woman Firefighter",
"👮": "Police Officer",
"👮‍♂️": "Man Police Officer",
"👮‍♀️": "Woman Police Officer",
"🕵️": "Detective",
"🕵️‍♂️": "Man Detective",
"🕵️‍♀️": "Woman Detective",
"💂": "Guard",
"💂‍♂️": "Man Guard",
"💂‍♀️": "Woman Guard",
"🥷": "Ninja",
"👷": "Construction Worker",
"👷‍♂️": "Man Construction Worker",
"👷‍♀️": "Woman Construction Worker",
"🤴": "Prince",
"👸": "Princess",
"👳": "Person Wearing Turban",
"👳‍♂️": "Man Wearing Turban",
"👳‍♀️": "Woman Wearing Turban",
"👲": "Person With Skullcap",
"🧕": "Woman with Headscarf",
"🤵": "Person in Tuxedo",
"🤵‍♂️": "Man in Tuxedo",
"🤵‍♀️": "Woman in Tuxedo",
"👰": "Person With Veil",
"👰‍♂️": "Man with Veil",
"👰‍♀️": "Woman with Veil",
"🤰": "Pregnant Woman",
"🤱": "Breast-Feeding",
"👩‍🍼": "Woman Feeding Baby",
"👨‍🍼": "Man Feeding Baby",
"🧑‍🍼": "Person Feeding Baby",
"👼": "Baby Angel",
"🎅": "Santa Claus",
"🤶": "Mrs. Claus",
"🧑‍🎄": "Mx Claus",
"🦸": "Superhero",
"🦸‍♂️": "Man Superhero",
"🦸‍♀️": "Woman Superhero",
"🦹": "Supervillain",
"🦹‍♂️": "Man Supervillain",
"🦹‍♀️": "Woman Supervillain",
"🧙": "Mage",
"🧙‍♂️": "Man Mage",
"🧙‍♀️": "Woman Mage",
"🧚": "Fairy",
"🧚‍♂️": "Man Fairy",
"🧚‍♀️": "Woman Fairy",
"🧛": "Vampire",
"🧛‍♂️": "Man Vampire",
"🧛‍♀️": "Woman Vampire",
"🧜": "Merperson",
"🧜‍♂️": "Merman",
"🧜‍♀️": "Mermaid",
"🧝": "Elf",
"🧝‍♂️": "Man Elf",
"🧝‍♀️": "Woman Elf",
"🧞": "Genie",
"🧞‍♂️": "Man Genie",
"🧞‍♀️": "Woman Genie",
"🧟": "Zombie",
"🧟‍♂️": "Man Zombie",
"🧟‍♀️": "Woman Zombie",
"💆": "Person Getting Massage",
"💆‍♂️": "Man Getting Massage",
"💆‍♀️": "Woman Getting Massage",
"💇": "Person Getting Haircut",
"💇‍♂️": "Man Getting Haircut",
"💇‍♀️": "Woman Getting Haircut",
"🚶": "Person Walking",
"🚶‍♂️": "Man Walking",
"🚶‍♀️": "Woman Walking",
"🧍": "Person Standing",
"🧍‍♂️": "Man Standing",
"🧍‍♀️": "Woman Standing",
"🧎": "Person Kneeling",
"🧎‍♂️": "Man Kneeling",
"🧎‍♀️": "Woman Kneeling",
"🧑‍🦯": "Person with White Cane",
"👨‍🦯": "Man with White Cane",
"👩‍🦯": "Woman with White Cane",
"🧑‍🦼": "Person in Motorized Wheelchair",
"👨‍🦼": "Man in Motorized Wheelchair",
"👩‍🦼": "Woman in Motorized Wheelchair",
"🧑‍🦽": "Person in Manual Wheelchair",
"👨‍🦽": "Man in Manual Wheelchair",
"👩‍🦽": "Woman in Manual Wheelchair",
"🏃": "Person Running",
"🏃‍♂️": "Man Running",
"🏃‍♀️": "Woman Running",
"💃": "Woman Dancing",
"🕺": "Man Dancing",
"🕴️": "Person in Suit Levitating",
"👯": "People with Bunny Ears",
"👯‍♂️": "Men with Bunny Ears",
"👯‍♀️": "Women with Bunny Ears",
"🧖": "Person in Steamy Room",
"🧖‍♂️": "Man in Steamy Room",
"🧖‍♀️": "Woman in Steamy Room",
"🧘": "Person in Lotus Position",
"🧑‍🤝‍🧑": "People Holding Hands",
"👭": "Women Holding Hands",
"👫": "Woman and Man Holding Hands",
"👬": "Men Holding Hands",
"💏": "Kiss",
"👩‍❤️‍💋‍👨": "Kiss: Woman, Man",
"👨‍❤️‍💋‍👨": "Kiss: Man, Man",
"👩‍❤️‍💋‍👩": "Kiss: Woman, Woman",
"💑": "Couple with Heart",
"👩‍❤️‍👨": "Couple with Heart: Woman, Man",
"👨‍❤️‍👨": "Couple with Heart: Man, Man",
"👩‍❤️‍👩": "Couple with Heart: Woman, Woman",
"👪": "Family",
"👨‍👩‍👦": "Family: Man, Woman, Boy",
"👨‍👩‍👧": "Family: Man, Woman, Girl",
"👨‍👩‍👧‍👦": "Family: Man, Woman, Girl, Boy",
"👨‍👩‍👦‍👦": "Family: Man, Woman, Boy, Boy",
"👨‍👩‍👧‍👧": "Family: Man, Woman, Girl, Girl",
"👨‍👨‍👦": "Family: Man, Man, Boy",
"👨‍👨‍👧": "Family: Man, Man, Girl",
"👨‍👨‍👧‍👦": "Family: Man, Man, Girl, Boy",
"👨‍👨‍👦‍👦": "Family: Man, Man, Boy, Boy",
"👨‍👨‍👧‍👧": "Family: Man, Man, Girl, Girl",
"👩‍👩‍👦": "Family: Woman, Woman, Boy",
"👩‍👩‍👧": "Family: Woman, Woman, Girl",
"👩‍👩‍👧‍👦": "Family: Woman, Woman, Girl, Boy",
"👩‍👩‍👦‍👦": "Family: Woman, Woman, Boy, Boy",
"👩‍👩‍👧‍👧": "Family: Woman, Woman, Girl, Girl",
"👨‍👦": "Family: Man, Boy",
"👨‍👦‍👦": "Family: Man, Boy, Boy",
"👨‍👧": "Family: Man, Girl",
"👨‍👧‍👦": "Family: Man, Girl, Boy",
"👨‍👧‍👧": "Family: Man, Girl, Girl",
"👩‍👦": "Family: Woman, Boy",
"👩‍👦‍👦": "Family: Woman, Boy, Boy",
"👩‍👧": "Family: Woman, Girl",
"👩‍👧‍👦": "Family: Woman, Girl, Boy",
"👩‍👧‍👧": "Family: Woman, Girl, Girl",
"🗣️": "Speaking Head",
"👤": "Bust in Silhouette",
"👥": "Busts in Silhouette",
"🫂": "People Hugging",
"👣": "Footprints",
"🧳": "Luggage",
"🌂": "Closed Umbrella",
"☂️": "Umbrella",
"🎃": "Jack-O-Lantern",
"🧵": "Thread",
"🧶": "Yarn",
"👓": "Glasses",
"🕶️": "Sunglasses",
"🥽": "Goggles",
"🥼": "Lab Coat",
"🦺": "Safety Vest",
"👔": "Necktie",
"👕": "T-Shirt",
"👖": "Jeans",
"🧣": "Scarf",
"🧤": "Gloves",
"🧥": "Coat",
"🧦": "Socks",
"👗": "Dress",
"👘": "Kimono",
"🥻": "Sari",
"🩱": "One-Piece Swimsuit",
"🩲": "Briefs",
"🩳": "Shorts",
"👙": "Bikini",
"👚": "Woman’s Clothes",
"👛": "Purse",
"👜": "Handbag",
"👝": "Clutch Bag",
"🎒": "Backpack",
"🩴": "Thong Sandal",
"👞": "Man’s Shoe",
"👟": "Running Shoe",
"🥾": "Hiking Boot",
"🥿": "Flat Shoe",
"👠": "High-Heeled Shoe",
"👡": "Woman’s Sandal",
"🩰": "Ballet Shoes",
"👢": "Woman’s Boot",
"👑": "Crown",
"👒": "Woman’s Hat",
"🎩": "Top Hat",
"🎓": "Graduation Cap",
"🧢": "Billed Cap",
"🪖": "Military Helmet",
"⛑️": "Rescue Worker’s Helmet",
"💄": "Lipstick",
"💍": "Ring",
"💼": "Briefcase",
"🩸": "Drop of Blood",

};

function App() {

const [meaning,setMeaning] = useState("Select an Emoji")
const [emoji,setEmoji] = useState("")


function inputClickHandler(index) {
  setMeaning(emojiObject[index]);
}
function emojiClickHandler(emoji) {
  console.log(emoji)
  setEmoji(emoji)
  setMeaning(emojiObject[emoji]);
}

var emojis = Object.keys(emojiObject);

  return (
    <div className="App">
       <h1>{emoji}</h1>
       <h1>{meaning}</h1>

       {
         emojis.map(emoji => {
           return <span 
           onClick={()=>emojiClickHandler(emoji)}
           style={{fontSize:"1rem",padding:"0.5rem",cursor:"pointer"}}>{emoji}</span>
         })

         
       }
    </div>
  );
}

export default App;

// VISER
// View -> Interact -> State in Event Handler -> Render 