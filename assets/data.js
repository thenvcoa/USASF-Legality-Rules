// Content paraphrased from the USASF 2025-26 All Star Cheer Rules. Edit text here; all pages read from this file.
// Glossary flashcards: paraphrased from the USASF 2025-26 Glossary (pp. 3-9).
// cat: tumbling | stunt | pyramid | toss | dismount | position | people | general
const GLOSSARY = [
["Aerial (noun)","A cartwheel or walkover done without the hands touching the ground.","tumbling"],
["Airborne / Aerial (adjective)","Free of contact with any person and with the performing surface.","general"],
["Airborne Tumbling Skill","An aerial move with hip-over-head rotation where the athlete uses their body and the floor to propel themselves off the floor.","tumbling"],
["All 4s","Athlete on hands and knees, not tucked into a nugget. If supporting a top person, the stunt counts as waist level.","position"],
["Assisted-Flipping Stunt","Top person rotates hip-over-head while in direct contact with a base or another top person as they pass through inverted. See Suspended Roll and Braced Flip.","stunt"],
["Backbend","Body arched through the upper back, usually supported on hands and feet with the stomach facing up.","position"],
["Backward Roll","Non-aerial skill rotating backward into or through inverted by lifting the hips over the head with a curved (tucked) spine, like a ball rolling.","tumbling"],
["Ball-X","Toss body position: top person goes from a tuck to a straddle/X with arms and legs, or legs only.","toss"],
["Barrel Roll","Another name for a Log Roll.","stunt"],
["Base","The person who holds, lifts or tosses a top person; must be in direct contact with the performing surface. A lone person under a top person's foot is a base regardless of grip. A base in a backbend or inverted on the floor may not touch a top person.","people"],
["Basket Toss","A toss using 2 or 3 bases plus a spotter, where 2 of the bases interlock wrists.","toss"],
["Block Cartwheel","A cartwheel that becomes airborne when the tumbler pushes off through the shoulders against the floor.","tumbling"],
["Brace / Bracer","A brace is a physical connection between top persons for stability; hair and uniform are never legal bracing points. A bracer is the top person giving that support. A required bracer may not go inverted during a transition.","pyramid"],
["Braced Flip","Top person rotates hip-over-head while staying in constant contact with another top person (or persons).","pyramid"],
["Cartwheel","Non-aerial skill rotating sideways through inverted with weight on the arm(s), landing one foot at a time.","tumbling"],
["Catcher","Responsible for safely landing a top person from a stunt, dismount, toss or release. Must be attentive, uninvolved in other choreography, able to catch (e.g., not holding a sign), on the floor when the skill starts, and must make contact when catching.","people"],
["Chair","Prep level stunt: base holds the top person's ankle with one hand and under the seat with the other; the supported leg stays vertical under the torso.","stunt"],
["Coed Style Toss","One base grabs the top person at the waist and tosses from ground level.","toss"],
["Cradle","Dismount caught with the top person face up in a V/pike/hollow position, legs straight and together, below prep level; bases wrap arms under the back and legs.","dismount"],
["Cupie","Upright stunt with both of the top person's feet together in the base's hand(s). Also called an Awesome.","stunt"],
["Dismount","The ending move from a stunt or pyramid, released to a cradle or to the floor (landing on feet). May not intentionally travel; must return to original base(s) except single based stunts with multiple top persons; floor dismounts need help from the original base/spotter unless a straight drop/small hop off from waist level or below. Nothing may pass over/under it; released top persons may not touch each other.","dismount"],
["Dive Roll","Airborne forward roll where the feet leave the floor before the hands reach it.","tumbling"],
["Downward Inversion","A stunt or pyramid where an inverted top person's center of gravity is moving toward the floor.","stunt"],
["Drop","Landing on the knee, thigh, seat, front, back or split from airborne or inverted without first taking most of the weight on hands/feet to break the impact.","general"],
["Extended Arm Level","The highest point of a standing base's fully extended arm(s) overhead (spotter's arms don't count). Extended arms alone don't make a stunt 'extended'.","stunt"],
["Extended Stunt","The top person's entire body is above the base's head. Squatting or kneeling bases with extended arms still count as extended (floor stunts excluded). Not extended despite arms overhead: chairs, torches, flat backs, straddle lifts, suspended rolls, leap frogs.","stunt"],
["Flat Back","Top person lies horizontal and face up, usually held by 2+ bases. Counts as a two-leg stunt.","stunt"],
["Flat Body","Top person's torso is parallel to the floor.","position"],
["Flip","Stunting: hip-over-head through inverted with no contact with a base or the floor. Tumbling: hip-over-head through inverted with no floor contact.","general"],
["Flipping Toss","A toss where the top person rotates through an inverted position.","toss"],
["Floor Stunt","Base lies on their back on the floor with arm(s) extended. Counts as waist level.","stunt"],
["Flyer","Another name for Top Person.","people"],
["Forward Roll","Non-airborne skill rotating forward through inverted, hips over head with a curved spine, like a ball rolling.","tumbling"],
["Free Flipping Stunt","A stunt release move passing through inverted with no contact with a base, brace or the floor. Does not include releases that start inverted and rotate to non-inverted.","stunt"],
["Free Release Move","A release where the top person is free of all bases, bracers and the floor.","stunt"],
["Front Tuck","Tumbling skill generating upward momentum into a forward flip. Also called a Punch Front.","tumbling"],
["Full","A 360-degree twist.","general"],
["Ground Level","On the performing surface.","position"],
["Hand/Arm Connection","Contact between athletes using hand(s)/arm(s). The shoulder does not count when hand/arm connection is required.","pyramid"],
["Handspring","Airborne skill from the feet, jumping forward or backward through a handstand, then blocking off the hands with a shoulder push to land on the feet.","tumbling"],
["Handstand","Straight inverted body with the arms extended straight by the head and ears.","tumbling"],
["Helicopter","A horizontal top person is tossed to spin around a vertical axis (like helicopter blades) and caught by the original bases.","stunt"],
["Horizontal Axis (Twisting in Stunts)","Imaginary line front-to-back through the belly button of a non-upright top person.","general"],
["Initiation / Initiating","Where a skill begins. For building skills (stunt, pyramid, transition, release, dismount, toss), it is the bottom of the dip the skill comes from.","general"],
["Inversion / Inverted","At least one foot above the head and the shoulders below the waist.","position"],
["Jump","Airborne position with no hip-over-head rotation, created by pushing off the floor with one's own legs.","tumbling"],
["Jump Skill","A jump with a change of body position (toe touch, pike, etc.). A straight jump with a turn is not a jump skill. A jump inside a tumbling pass breaks up the pass.","tumbling"],
["Kick Double","Usually from a toss: a kick plus a 720-degree twist. A quarter turn during the kick to start the twist is customary and allowed.","toss"],
["Kick Full","Usually from a toss: a kick plus a 360-degree twist. A quarter turn during the kick to start the twist is customary and allowed.","toss"],
["Layout","Airborne tumbling or toss skill with hip-over-head rotation in a stretched, hollow body.","tumbling"],
["Leap Frog","Top person moves from one set of bases to another (or back) by passing over the base's torso and through their extended arms, staying upright and in continuous contact. Variations pass over a base's and/or another top person's torso.","stunt"],
["Leg/Foot Connection","Contact using leg(s)/feet. Anywhere from shin to toe is legal when leg/foot connection is allowed.","pyramid"],
["Liberty","Base(s) hold one foot; the top person's other foot is bent beside the knee.","stunt"],
["Load-In","Top person has at least one foot in the base's hands, with the base's hands at waist level.","stunt"],
["Log Roll","Release move started at waist level where the top person usually rotates 360 degrees while staying parallel to the floor. An Assisted Log Roll keeps a base in contact throughout.","stunt"],
["Multi Based Stunt","A stunt with 2 or more bases, not counting the spotter.","stunt"],
["New Base(s)","Bases who were not in direct contact with the top person before.","people"],
["Non-Inverted Position","Either the shoulders are at or above the waist, or the shoulders are below the waist and both feet are below the head.","position"],
["Nugget","Tucked position on hands and knees. A nugget supporting a top person is the base of a waist level stunt.","position"],
["Onodi","From a back handspring push-off, a 1/2 twist to the hands, finishing as a front handspring step out.","tumbling"],
["Original Base(s)","Base(s) in contact with the top person when the skill is initiated.","people"],
["Pancake","Downward inversion where both legs/feet stay in the base's grip while the top person folds/pikes forward and is caught on their back.","stunt"],
["Paper Dolls","Single-leg stunts bracing one another while on one leg; may or may not be extended.","pyramid"],
["Pike","Bent forward at the hips with legs straight and together.","position"],
["Platform Position","Single leg stunt with the free leg held straight next to the supporting leg. Also called dangle or target.","stunt"],
["Prep Level","Lowest base-to-top connection is above waist and below extended (prep, shoulder hitch, shoulder sit). Also prep level: arms overhead but body height like a prep (flat back, straddle lift, chair, T-lift), and squatting/kneeling bases whose lowest connection is at prep. Below prep if at least one foot is at waist level (except chair, T-lift, shoulder sit).","position"],
["Primary Support","Holding the majority of the top person's weight.","general"],
["Prone Position","Face-down, flat body position.","position"],
["Prop","An object that can be manipulated. Only flags, standard flat banners/signs, poms, megaphones and pieces of cloth are allowed. A uniform piece used on purpose for visual effect becomes a prop.","general"],
["Punch Front","Another name for Front Tuck.","tumbling"],
["Pyramid","Two or more connected stunts.","pyramid"],
["Rebound","Airborne position with no hip-over-head rotation from pushing off with one's own legs, usually from or into a tumbling skill.","tumbling"],
["Release Move","Top person is free of contact with everyone on the floor. Can't pass over/under/through anything; separate release top persons can't touch. Height is measured hips-to-bases' extended arms at peak: more than leg length (L3-4) or leg length + 18 in. (L5-7) makes it a toss or dismount.","stunt"],
["Rewind","Backward free-flipping release from ground level used as an entry into a stunt.","stunt"],
["Round Off","Like a cartwheel but landing on two feet together, facing back the way you came.","tumbling"],
["Running Tumbling","Tumbling entered with a forward step or hurdle for momentum.","tumbling"],
["Second Level","Anyone supported above the floor by one or more bases.","people"],
["Series Front or Back Handsprings","Two or more front or back handsprings in a row by one athlete.","tumbling"],
["Shoulder Level","Base-to-top connection is at the base's shoulder height.","position"],
["Shoulder Sit","Top person sits on the base's shoulder(s). Counts as prep level.","stunt"],
["Shoulder Stand","Top person stands on the base's shoulder(s).","stunt"],
["Shushunova","A straddle jump (toe touch) landing on the floor in a prone/push-up position.","tumbling"],
["Single Based Stunt","A stunt held by one base.","stunt"],
["Single Leg Stunt","See Stunt: decided by how many of the top person's feet (or legs) are supported.","stunt"],
["Split Catch","Upright top person, knees forward, base holding both inner thighs, usually in a high V forming an X. Single based split catches are not allowed.","stunt"],
["Sponge Toss","Like a basket toss, but tossed from load-in with both of the top person's feet in the bases' hands.","toss"],
["Spotter","Protects the top person's head, neck, back and shoulders. Must be a trained teammate, standing on the floor, attentive, free (no sign), able to touch the stunt's base, torso not under the stunt. May grab base wrists/arms or top's legs/ankles. Not both hands under the foot or under base hands; front hand only under the foot. Cannot be both a base and the required spotter.","people"],
["Standing Tumbling","Tumbling from a standing start with no forward momentum. Steps backward first still count as standing.","tumbling"],
["Step Out","A tumbling landing one foot at a time instead of both feet together.","tumbling"],
["Straddle Lift","Another name for V-Sit.","stunt"],
["Straight Cradle","Release/dismount to cradle holding a straight ride with no skill (no turn, kick, twist, pretty girl, etc.).","dismount"],
["Straight Ride","Toss/dismount body position with no trick: a straight line that teaches reaching for maximum height.","toss"],
["Stunt","Any skill where a top person is held above the floor by one or more people. One-leg vs two-leg is set by the number of feet supported (or legs, if no foot is held). V-sit, pike and flat body positions always count as two-leg.","stunt"],
["Suspended Roll","Hip-over-head rotation while each of the top person's hands/arms holds a separate base hand/arm; bases release the legs during rotation. Counts as prep level.","stunt"],
["T-Lift","Top person, arms in a T, held on each side by two bases at the hands and under the arms; stays upright and vertical.","stunt"],
["Tension Roll / Drop","Bases and top lean forward together until the top leaves the bases unassisted, usually followed by forward rolls. Not allowed in any form.","stunt"],
["Three Quarter (3/4) Front Flip (stunt)","Forward hip-over-head rotation released from upright to a cradle.","stunt"],
["Three Quarter (3/4) Front Flip (tumbling)","Forward hip-over-head rotation from upright to seated on the ground, hands and/or feet landing first.","tumbling"],
["Tic-Tock","From a static one-leg stunt, bases dip and release upward while the top switches to the other leg and lands static.","stunt"],
["Toe / Leg Pitch","Bases toss upward, usually using one foot or leg of the top person, to gain height.","stunt"],
["Top Person","The athlete supported above the floor in a stunt, pyramid or toss (flyer).","people"],
["Toss","Airborne stunt thrown from waist level to add height; top person becomes free of all contact. Top starts off the floor with both feet in/on bases' hands. 3 to 4 stationary tossing bases; caught in cradle by at least 3 bases, one at head/shoulders. Single top person only; nothing over/under it. Twisting is cumulative: up to 1 1/4 = 1 skill; over 1 1/4 up to 2 1/4 = 2 skills.","toss"],
["Tower Pyramid","A stunt on top of a waist level stunt.","pyramid"],
["Transitional Pyramid","Top person moves between pyramid positions; may change bases if at least one athlete at prep level or below keeps constant contact. Starts at each initiation; ends at a new initiation, a stop, or floor contact.","pyramid"],
["Transitional Stunt","Top person(s) move from one stunt position to another, changing the configuration. Starts at each initiation; ends at a new initiation, a stop, or floor contact.","stunt"],
["Traveling Toss","A toss that intentionally requires bases/catchers to travel to catch. A 1/4 or 1/2 turn by bases (e.g., kick full) is not traveling.","toss"],
["Tuck Position","Bent at waist/hips with knees pulled into the torso.","position"],
["Tumbling","Any hip-over-head skill, not supported by a base, that starts and ends on the floor. To separate passes after a skill that ends tumbling, add a step; a step-out is part of the same pass so needs an extra step; landing feet together needs one step.","tumbling"],
["Twist / Twisting","Rotation around the vertical (head-to-toe) axis. In stunts, vertical and horizontal axes count separately, not added together. Degree = total rotation of the hips relative to the floor. After a hit with a clear stop, the stunt may be walked around further. A new twist begins with a base dip and/or a change of direction.","general"],
["Two-High Pyramid","All top persons are mainly held by bases standing on the floor. Any pyramid release move counts as passing above two persons high: it's about layers, not actual height.","pyramid"],
["Two and One Half (2 1/2) High Pyramid","Top person is weight-supported (not braced) by another top person and free of the bases. Body lengths: chairs, thigh stands, shoulder straddles 1 1/2; shoulder stands 2; extended stunts 2 1/2. Above 2 1/2 high = upright prep middle layer holding an upright prep stunt (2 1/2 high chairs are still 2 1/2 high).","pyramid"],
["Upright","Top person standing or sitting while supported (star, liberty, V-sit).","position"],
["V-Sit","Top person sits with straight legs parallel to the floor in a V. Counts as two-leg. Also called straddle lift.","stunt"],
["Vertical Axis","Imaginary head-to-toe line through the tumbler or top person.","general"],
["Waist Level","Lowest connection is above ground and below prep, and/or at least one foot is below prep. Examples: All 4s and nugget stunts. Chairs and shoulder sits are prep, not waist.","position"],
["Waist Level Cradle","Release started below prep and caught in a cradle. Multi-based waist level cradles with bases starting under the feet count as tosses.","dismount"],
["Walkover","Non-airborne skill: lean to a handstand and bring the legs over one at a time (front), or arch backward through the upper back to land one foot at a time (back), with one or both hands supporting.","tumbling"],
["Whip","Non-twisting, backward-traveling aerial skill with the body in a stretched upper-back arch; looks like a back handspring with no hands.","tumbling"],
["Wrap Around","Single base holding a cradle releases the top's legs, swings them around the base's back, then wraps a free arm around the legs, the top's body wrapped around the base.","stunt"],
["X-Out","A tumbling flip or toss where arms and legs spread into an X during the rotation.","tumbling"]
];

// Rule maps, paraphrased from USASF All Star Cheer Rules 2025-26 (pp. 12-19).
// Item types: ok = allowed, no = not allowed, exc = exception, req = requirement / condition
const RULES = {
tumbling: {
  name: "Tumbling", page: "p. 12 (L7 p. 18)",
  sections: [
    { id:"A", title:"General",
      all:[["ok","May jump or rebound over an individual"],["ok","May rebound from feet into a stunt transition"],["no","Rebounding into a stunt transition may NOT go to or through inverted"],["no","NO tumbling over, under (any body part) or through a stunt, individual or prop"],["no","NO tumbling while holding or touching a prop"]],
      levels:{
        1:[["ok","1/2 rebound to prone"],["no","NO dive rolls"]],
        2:[["ok","Dive rolls allowed"],["no","NO arched/swan dive rolls"],["no","Dive rolls may NOT twist"]],
        3:[["no","NO arched/swan dive rolls"],["no","Dive rolls may NOT twist"]],
        4:[["no","NO arched/swan dive rolls"],["no","Dive rolls may NOT twist"]],
        5:[["no","NO arched/swan dive rolls"],["no","Dive rolls may NOT twist"]],
        6:[["ok","Arched/swan dive rolls now allowed"],["no","Dive rolls may NOT twist"]]
      }},
    { id:"B", title:"Standing",
      levels:{
        1:[["ok","Skills keeping constant contact with the floor: cartwheels, forward/backward rolls, walkovers, handstands"],["ok","Blocked cartwheels"]],
        2:[["ok","Single handspring"],["no","NO twisting or turning after a back handspring step out"],["no","NO jump skills connected to a handspring"],["no","NO twisting while airborne except round offs"]],
        3:[["ok","Series handsprings"],["ok","Jump in combination with handspring(s)"],["no","NO flips"],["no","NO airborne twisting except round offs"]],
        4:[["ok","Standing tucks and tucks from a back handspring entry"],["req","Max 1 flip, 0 twists"],["ok","Aerials (front walkover, cartwheel) and Onodis"],["no","NO tumbling after a tuck"],["no","NO jump flip, NO consecutive flip-flip"]],
        5:[["ok","Jump flip"],["req","Max 1 flip, 0 twists"]],
        6:[["req","Max 1 flip and 2 twists"],["req","Over 1 twist: must be preceded by at least 2 consecutive non-twisting, backward-traveling skills, one a back handspring (back extension roll doesn't count)"],["no","NO flipping and twisting INTO a double"],["no","NO twisting OUT of a double"]]
      }},
    { id:"C", title:"Running",
      levels:{
        1:[["ok","Constant-contact skills: cartwheels, rolls, walkovers"],["ok","Blocked cartwheels and round off"],["no","NO tumbling immediately after a round off or round off rebound"]],
        2:[["ok","Handspring series"],["no","NO twisting or turning after a back handspring step out"],["no","NO airborne twisting except round offs"]],
        3:[["ok","Round off or round off back handspring(s) into back tuck"],["ok","Aerial cartwheels, front tucks, 3/4 front flips"],["no","NO tumbling after a tuck or aerial cartwheel"],["no","NO tumbling before a front tuck except a front handspring"],["no","NO airborne twisting except round offs and aerial cartwheels"]],
        4:[["req","Max 1 flip, 0 twists"],["ok","Aerials (front walkover, cartwheel) and Onodis"]],
        5:[["req","Max 1 flip and 1 twist"],["req","Flip + twist must be immediately preceded by running, round off, back handspring(s) or front handspring(s)"],["no","NO trick during full-twisting skills"],["req","Fulls must land on both feet"],["no","NO tumbling after a full"]],
        6:[["req","Max 1 flip and 2 twists"],["no","NO flipping and twisting INTO a double"],["no","NO twisting OUT of a double"]]
      }}
  ],
  l7:[
    {id:"A",title:"General",items:[["ok","Same jump/rebound allowances as L1-6"],["no","Rebound into a stunt may not go to/through inverted"],["exc","EXCEPT cartwheel rewind, round off rewind, standing single back handspring rewind, with NO tumbling before them"],["no","NO tumbling over/under/through anything or with a prop"],["no","Dive rolls may NOT twist"]]},
    {id:"B",title:"Standing",items:[["req","Max 1 flip and 2 twists"],["req","Over 1 twist: immediately preceded by at least ONE backward, non-twisting skill (L6 needs two)"],["no","NO twisting out of a double"]]},
    {id:"C",title:"Running",items:[["req","Max 1 flip and 2 twists"],["no","NO twisting out of a double"]]}
  ]
},
stunts: {
  name: "Stunts", page: "pp. 13-14 (L7 p. 18)",
  sections: [
    { id:"A", title:"Spotter",
      levels:{
        1:[["req","Required for prep level and above, and for floor stunts"],["exc","Not required: shoulder sits, T-lifts, stunts held only at waist"]],
        2:[["req","Required for ABOVE prep level, and floor stunts"]],
        3:[["req","Required above prep level"],["req","Single based, multiple top persons: a spotter for each top"]],
        4:[["req","Required above prep level"],["req","Single based, multiple tops: a spotter for each top"]],
        5:[["req","Required above prep level"],["req","Single based, multiple tops: a spotter for each top"]],
        6:[["req","Required above prep level"],["req","Single based, multiple tops: a spotter for each top"]]
      }},
    { id:"B", title:"Stunt Height",
      all:[["no","Youth and below: NO single based or assisted single based extended stunts (may immediately pass through extended if the level allows)"]],
      levels:{
        1:[["ok","Waist level single leg"],["ok","Prep level two leg (may immediately pass through extended)"],["ok","Prep level single leg ONLY with an extra base holding a hand/arm connection before initiation"],["ok","Walk up shoulder stands"],["no","NO single based stunts with multiple top persons"]],
        2:[["ok","Prep level single leg (may immediately pass through extended)"],["ok","Above prep level two leg"],["no","NO single based stunts with multiple top persons"]],
        3:[["ok","Above prep level single leg"]],
        4:[["ok","Above prep level single leg"]],
        5:[["ok","Above prep level single leg"]],
        6:[["ok","Above prep level single leg"]]
      }},
    { id:"C", title:"Transition",
      levels:{
        1:[["req","Top person must stay in contact with at least one base"],["no","NO leap frogs or leap frog variations"]],
        2:[["req","Top person must stay in contact with at least one base"]],
        3:[["req","Must stay in contact with a base unless it is a legal release move"]],
        4:[["req","Must stay in contact with a base unless it is a legal release move"]],
        5:[["req","See release move rules"]],
        6:[["req","See release move rules"]]
      }},
    { id:"D", title:"Twisting",
      levels:{
        1:[["req","Up to 1/4 twist"],["exc","Rebound 1/2 turn to prone"],["exc","Wrap around stunts"],["exc","Up to 1/2 twist starting and ending on the floor, supported only at the waist"]],
        2:[["req","Up to 1/2 twist"],["exc","Single full-twisting log roll, no extra skills, cradle to cradle"]],
        3:[["req","Up to 1/2 twist to extended single leg"],["req","Up to 1 twist to prep or below"],["req","Up to 1 twist to extended two leg"]],
        4:[["req","Up to 1 1/2 to prep or below"],["req","Up to 1 1/2 to extended two leg"],["req","Up to 1 twist to extended single leg"]],
        5:[["req","Up to 2 to prep or below"],["req","Up to 2 to extended two leg"],["req","Up to 1 1/2 to extended single leg"]],
        6:[["req","Up to 2 1/4 twists"]]
      }},
    { id:"E", title:"Release Moves",
      all:[["req","3 catchers for multi-based; 2 catchers for single based landing horizontal"],["no","May NOT land inverted or intentionally travel"],["no","May NOT touch top persons in separate release moves"],["req","Must return to original base(s)"],["no","NO free flips (except L6 rewinds)"]],
      levels:{
        1:[["no","NOT allowed other than dismounts"]],
        2:[["no","NOT allowed other than dismounts, tosses and full-twisting log rolls (no extra skills, cradle to cradle)"]],
        3:[["req","Start waist level or below; land prep level or below"],["req","1 skill/trick, 0 twisting"],["exc","Log rolls up to 1 twist, landing in cradle, flat back or prone"],["req","May NOT exceed bases' extended arm level (not back spot)"],["no","NO helicopters; NO inversions"]],
        4:[["req","Landing extended? Must start prep level or below"],["req","2 skills allowed"],["ok","Helicopters up to 180°, 0 twisting, 3 catchers (1 at head/shoulders)"],["ok","Inverted to non-inverted, 0 twisting; spotter if lands prep or above"],["req","May NOT exceed extended arm level"],["no","NO twisting to/from extended stunts"],["no","May NOT pass through inverted"]],
        5:[["ok","Helicopters up to 180°, 3 catchers (1 at head/shoulders)"],["ok","Inverted to non-inverted, 0 twisting; spotter if lands prep or above"],["req","May NOT exceed 18 in./46 cm above extended arm level"],["no","May NOT pass through inverted"]],
        6:[["ok","Inverted to non-inverted up to 1/2 twist; spotter if lands prep or above"],["ok","Helicopters up to 180°, 3 catchers (1 at head/shoulders)"],["req","May NOT exceed 18 in./46 cm above extended arm level"],["no","May NOT pass through inverted"],["exc","Rewinds (not Junior 6): 1 flip only, 0 twist; single based 1 catcher + 1 spotter, multi-based 2 catchers + 1 spotter; no leg/toe pitch entry; no tumbling before"]]
      }},
    { id:"F", title:"Inversions",
      all:[["no","A base/athlete in a backbend or inverted may NOT touch a top person"]],
      levels:{
        1:[["no","NOT allowed (an inverted athlete must keep contact with the floor)"]],
        2:[["ok","Ground level inversions that go directly to non-inverted"]],
        3:[["ok","Prep level or below"],["req","Suspended rolls over 1/2 twist must land in cradle"]],
        4:[["ok","Extended"]],
        5:[["ok","Extended"]],
        6:[["ok","Extended"]]
      }},
    { id:"G", title:"Downward Inversions",
      all:[["no","Downward inversions may NOT touch each other"],["req","Must keep contact with the original base"],["exc","Original base may lose contact when necessary, e.g., cartwheel-style transitions"]],
      levels:{
        1:[["no","NOT allowed"]],
        2:[["no","NOT allowed"]],
        3:[["ok","Waist level or below (may immediately pass through prep)"],["req","2 catchers touching between waist and shoulders of the top's torso"],["no","NO two-leg pancake stunts"]],
        4:[["ok","Prep level (may pass above prep)"],["req","3 catchers, 2 touching waist-to-shoulder region"],["no","If it passes above prep: may NOT land, stop or touch the ground inverted"],["exc","Controlled lowering of an extended inverted stunt to prep"]],
        5:[["ok","Above prep level"],["req","3 catchers, 2 touching waist-to-shoulder region"],["no","From/passing above prep may NOT land, stop or touch the ground inverted"],["exc","Lowering extended inverted to prep; passing above prep to prep; extended non-inverted to inverted at prep"]],
        6:[["ok","Above prep level"],["req","3 catchers, 2 touching waist-to-shoulder region"],["no","From/passing above prep may NOT land, stop or touch the ground inverted"],["exc","Same three exceptions as L5"]]
      }},
    { id:"H", title:"Over / Under",
      levels:{
        1:[["ok","Arms and legs only"]],
        2:[["ok","Arms and legs only"]],
        3:[["ok","Arms and legs only"]],
        4:[["ok","Individual under a stunt; stunt over an individual"]],
        5:[["ok","Allowed"]],
        6:[["ok","Allowed"]]
      }}
  ],
  l7:[
    {id:"A",title:"Spotters",items:[["req","One-arm stunts above prep (except cupies and liberties)"],["req","Load transitions with a release over 1 twist"],["req","Release to/from inverted landing prep or above; free flips; inverted top above prep"],["req","Release from above ground to a one-arm stunt"],["req","Coed tosses to a new base (tossing base may become the spotter)"],["req","Single based, multiple tops: a spotter per top"]]},
    {id:"B",title:"Stunt Height",items:[["ok","Above prep level single leg"]]},
    {id:"C",title:"Twisting",items:[["req","2 1/4 twists"]]},
    {id:"D",title:"Release Moves",items:[["req","Max 18 in./46 cm above extended arm level"],["no","May NOT land inverted"],["exc","Ground level handstand to hand-to-hand, 0 twist/flip; prep or below to prep inverted, 0 twist/flip"],["req","Return to original bases"],["exc","Coed toss to a new base (single tosser, caught by at least one free base; tosser may spot); single based multi-top tosses (base may spot)"],["ok","Helicopters up to 180°, at least 2 catchers (1 at head/shoulders)"],["no","No intentional travel beyond the exceptions"]]},
    {id:"E",title:"Rewinds / Free Flipping",items:[["req","Return to original bases"],["ok","From ground: 1 1/4 flip + 1 1/4 twist; toe/leg pitch entries ALLOWED"],["ok","Cartwheel, round off, standing single back handspring rewinds (nothing before them)"],["ok","From stunt: 1 1/4 flip + 1/2 twist, from prep ONLY, land cradle, horizontal, or standing on the floor (dismount rules)"],["req","1 flip or less: 2 catchers; over 1 flip: 3 catchers"]]},
    {id:"F",title:"Inversions",items:[["req","Downward from above prep: at least 2 catchers"],["req","Top keeps contact with a base"],["no","Backbend/inverted base may not touch a top"],["exc","Lowering inverted to prep; passing above prep to prep; extended non-inverted to inverted at prep"]]}
  ]
},
pyramids: {
  name: "Pyramids", page: "pp. 15-16 (L7 p. 19)",
  sections: [
    { id:"A", title:"General",
      all:[["req","Follow stunt and dismount rules; up to 2 high"],["req","Top must get primary support from a base unless a legal release transition"],["no","Released transitions may NOT touch other stunt/pyramid release moves"],["req","Required catchers/spotters: stationary, eyes on top the whole transition, not in other choreography at initiation"],["no","Primary weight may NOT be held at second level (transitions must be continuous)"]],
      levels:{}},
    { id:"B", title:"Structures",
      all:[["no","Youth and below: NO single based or assisted single based extended stunts"],["req","Required bracers/connections must be connected by initiation and stay connected throughout"]],
      levels:{
        1:[["ok","Two leg extended braced by prep-or-below bracer with hand/arm connection"],["ok","Prep single leg braced by prep-or-below bracer with hand/arm connection"],["req","Prep level bracers: both feet in bases' hands unless shoulder sit, flat back, straddle lift or shoulder stand"],["no","NO extended stunt connected to an extended stunt"]],
        2:[["ok","Extended single leg braced by prep-or-below bracer with hand/arm connection"],["req","Prep level bracers: both feet in hands (same exceptions as L1)"],["no","NO extended stunt connected to an extended stunt"]],
        3:[["no","NO extended single leg connected to ANY extended stunt"],["ok","Implied: extended two leg to extended two leg is no longer banned"]],
        4:[["no","NO extended single leg connected to extended single leg"],["ok","Implied: extended single leg to extended two leg is allowed"]],
        5:[["ok","No structure restrictions listed"]],
        6:[["ok","No structure restrictions listed"]]
      }},
    { id:"C", title:"Non-Released Transitions",
      all:[["req","Required brace must be connected by initiation and stay connected"],["no","Backbend/inverted base may NOT touch a top"]],
      levels:{
        1:[["req","Twisting: up to 1/4"],["req","Inversions: follow stunt rules"]],
        2:[["req","Twisting: up to 1/2"],["req","Inversions: follow stunt rules"],["no","Log rolls may NOT be assisted by another top person"]],
        3:[["req","Twisting: up to 1; over 1/2 to extended single leg needs a hand/arm bracer at prep or below"],["req","Inversions: follow stunt rules"],["exc","Top may pass through inverted if in contact with base AND prep-or-below bracer the whole time, starting and ending at prep or below"]],
        4:[["req","Twisting: up to 1 1/2; over 1 to extended single leg needs a prep-or-below bracer"],["req","Inversions: follow stunt rules"]],
        5:[["req","Twisting: up to 2; over 1 1/2 to extended single leg needs a prep-or-below bracer"],["req","Inversions: follow stunt rules"]],
        6:[["req","Twisting: up to 2 1/4"],["req","Inversions: follow stunt rules"]]
      }},
    { id:"D", title:"Released Transitions",
      all:[["req","Keep the SAME bracer(s) throughout"],["req","Touch a base on the floor before losing bracer contact (hair/uniform don't count)"],["req","Two required bracers must be on separate sides of the body"],["no","May NOT be braced to tops above prep level"],["no","Braced inversions/flips may NOT travel downward while inverted"]],
      levels:{
        1:[["no","NOT allowed other than dismounts"]],
        2:[["no","NOT allowed other than dismounts and tosses"],["no","Log rolls may NOT be assisted by another top"]],
        3:[["ok","Non-inverted: 2 bracers (one hand/arm to hand/arm; other hand/arm or hand/arm to foot/lower leg), 2 catchers, may NOT change bases"],["exc","Legal stunt release moves with 1 bracer; release to extended with 1 bracer must start waist level or below with hand/arm connection"],["ok","Twisting: 1 twist, 2 hand/arm bracers"],["no","Braced inversions NOT allowed"]],
        4:[["ok","Non-inverted: 1 bracer, 2 catchers (min 1 catcher + 1 spotter)"],["ok","Twisting: 1 1/2 with 1 bracer, 2 catchers"],["ok","Braced inversions/flips: 2 bracers, up to 1 1/4 flip, 0 twist, may NOT change bases, 3 catchers"],["exc","Braced flips landing upright at prep+: 1 catcher + 2 spotters"],["exc","Legal stunt release moves with only 1 bracer"]],
        5:[["ok","Non-inverted: 1 bracer, 2 catchers (min 1 catcher + 1 spotter)"],["ok","Twisting: 2 twists, 2 catchers"],["ok","Braced inversions/flips: 1 bracer, up to 1 1/4 flip, 0 twist, 3 catchers"],["exc","Braced flips landing upright at prep+: 1 catcher + 2 spotters"]],
        6:[["ok","Non-inverted: 1 bracer, 2 catchers (min 1 catcher + 1 spotter)"],["ok","Twisting: 2 1/4, 2 catchers"],["ok","Braced inversions/flips: 1 bracer; 1 1/4 flip + 1/2 twist OR 3/4 flip + 1 twist; 3 catchers"],["exc","Non-twisting braced flips landing upright at prep+: 1 catcher + 2 spotters"]]
      }},
    { id:"E", title:"Over / Under",
      levels:{
        1:[["ok","Arms and legs only"]],
        2:[["ok","Arms and legs"],["no","Top may NOT pass over/under another top's torso"]],
        3:[["ok","Arms and legs"],["no","Top may NOT pass over/under another top's torso"]],
        4:[["ok","Arms and legs"],["no","Top may NOT INVERT over/under another top's torso"]],
        5:[["ok","Allowed"]],
        6:[["ok","Allowed"]]
      }}
  ],
  l7:[
    {id:"A",title:"General",items:[["ok","Up to 2 1/2 high"],["exc","Tower pyramids allowed"]]},
    {id:"B",title:"Spotters",items:[["req","Follow stunt spotter rules"],["exc","One-arm extended paper dolls: a spotter per top"],["req","2 1/2 high: front AND back spotter per top-layer top, in position and watching the whole time; not primary support"],["req","2 1/2 high with horizontal top: spotters on 2 of 4 sides, not the feet/leg side"],["req","Tower: a spotter behind the top, not touching the pyramid (+1 more if a base helps the middle layer)"]]},
    {id:"C",title:"Free Flying Mounts / Transitions",items:[["ok","From ground: 1 flip + 1 twist, or 0 flip + 2 1/4 twists"],["ok","From above ground: 1 1/4 flip + 0 twist, or 0 flip + 2 twists"],["no","May NOT land inverted, greatly exceed intended height, or pass over/under/through anything"]]},
    {id:"D",title:"Release Moves",items:[["ok","May pass above 2 1/2 high during transitions"],["req","Released and caught at second layer: must be the same second-layer base"],["no","May NOT land inverted or pass over/under/through a prop"],["req","Free releases from 2 1/2 high: 0 flip, up to 1 twist, 2 catchers"]]},
    {id:"E",title:"Inversions",items:[["ok","Allowed up to 2 1/2 high"],["req","Downward from above prep: 2 catchers, keep contact with a base or another top"]]},
    {id:"F",title:"Released Braced Inversions / Flips",items:[["ok","Up to 1 1/4 flip + 1 twist"],["req","1 prep-or-below bracer; 2 catchers"],["exc","Landing upright at prep+: 1 base + 1 extra spotter; braced inversions to 2 1/2 high may be caught by 1 person"],["req","Base/spotter stationary, watching, free at initiation"]]}
  ]
},
dismounts: {
  name: "Dismounts", page: "p. 17 (L7 p. 19)",
  sections: [
    { id:"A", title:"General Dismounts",
      all:[["req","Single based cradles: a spotter with at least one hand/arm supporting waist-to-shoulder"],["req","Multi-based cradles: 2 catchers + a spotter (hand/arm at waist-to-shoulder)"],["req","Single based, multiple tops: 2 catchers per top; catchers and bases stationary before initiation"],["req","To the floor: assisted by original base/spotter, unless a straight drop/small hop off from waist or below with no skills"],["req","Return to original base(s), except single based multi-top"],["no","NO flipping, inverted (incl. landing inverted) or intentionally traveling dismounts"],["no","Nothing over/under a dismount; no dismount over/under/through anything"],["no","Released tops may NOT touch (except single based multi-top)"],["no","NO tension drops/rolls"]],
      levels:{}},
    { id:"B", title:"Dismounts",
      levels:{
        1:[["ok","Straight pop downs, basic straight cradles"],["no","NO waist level cradles or sponge tosses"],["no","NO dismounts from above prep in pyramids"]],
        2:[["ok","Straight pop downs, straight cradles, 1/4 turn cradles"],["no","NO waist level cradles in Mini division"]],
        3:[["ok","Two legs: 1 1/4 twist OR 1 trick"],["ok","Single leg: 1/4 twist cradles"],["req","Any trick from prep or above must land in cradle"],["no","NO dismounts from inverted"]],
        4:[["ok","Two legs: 2 1/4 twist"],["ok","Single leg: 1 1/4 twist"],["req","Max 2 tricks"],["no","From inverted: may NOT twist"]],
        5:[["ok","2 1/4 twist"],["req","Max 3 tricks"],["req","Over 1 1/2 twists: no other skill"],["no","From inverted: may NOT twist"]],
        6:[["ok","2 1/4 twists"],["ok","From inverted: may twist up to 1/2"]]
      }}
  ],
  l7:[
    {id:"A",title:"General",items:[["req","See Dismount in glossary"]]},
    {id:"B",title:"Requirements",items:[["ok","Stunt to cradle: up to 2 1/4; over 1 1/4 needs an extra spotter on the cradle"],["req","Single based multi-top cradles: 2 stationary catchers per top"],["req","Twisting cradles from 1-arm stunts: spotter supporting head/shoulders"],["ok","Free flipping to cradle: 1 1/4 flip + 1/2 twist, from prep, 2 catchers (1 original base); back flips must cradle"],["ok","Stunt to floor: up to 2 1/4; over 1 1/4 needs 2 catchers or catcher + spotter"],["ok","Free flip to floor: front only, 1 flip, 0 twist, spotter, from prep"],["req","2 high to cradle: stunt dismount rules"],["ok","2 1/2 high to cradle: 2 1/4 twists OR 3/4 front flip + 1/2 twist, 2 catchers"],["ok","2 1/2 high to floor: 1 1/4 twists, 2 catchers or catcher + spotter"]]}
  ]
},
tosses: {
  name: "Tosses", page: "p. 17 (L7 p. 20)",
  sections: [
    { id:"A", title:"General Tosses",
      all:[["req","3 to 4 tossing bases; one behind the top"],["req","Caught in cradle by at least 3 ORIGINAL bases, one at head/shoulders"],["no","Only ONE top person"],["no","NO flipping, inverted or intentionally traveling tosses"],["no","Nothing over/under a toss; no toss over/under/through anything"]],
      levels:{}},
    { id:"B", title:"Tosses",
      levels:{
        1:[["no","NOT allowed, including waist level cradles and sponge tosses"]],
        2:[["ok","Straight ride only"],["no","NO tosses in Mini division"]],
        3:[["ok","1 1/4 twists"],["req","Max 1 trick"],["exc","Ball X allowed"],["exc","Arch is not a trick"]],
        4:[["ok","2 1/4 twists"],["req","Max 2 tricks"]],
        5:[["ok","2 1/2 twists"],["req","Max 3 tricks"],["req","Over 1 1/2 twists: no other skill"]],
        6:[["ok","2 1/2 twists"]]
      }}
  ],
  l7:[
    {id:"A",title:"General",items:[["req","3 to 4 tossing bases; one behind (may assist)"],["exc","Not required: tosses to another set of bases; Arabians"],["req","From ground level; cradled by at least 3 bases, one at head/shoulders"]]},
    {id:"B",title:"Requirements",items:[["ok","Non-flipping: up to 3 1/2 twists"],["ok","Flipping: up to 1 1/4 flip + 2 extra skills (tuck, pike, layout don't count)"]]},
    {id:"C",title:"Flyovers",items:[["req","Thrown by 3-4 stationary bases; caught in cradle by at least 3 stationary catchers"],["req","Catchers free of choreography, watching from initiation to catch"],["ok","0 flip + 1 1/2 twists, or 3/4 front flip + 0 twist"]]}
  ]
}
};

// Study guide content (HTML strings). Paraphrased from USASF 2025-26 Cheer Rules.
const GUIDE = [
{ id:"core", title:"Core concepts that decide most calls", html:`
<p class="lede">Most rule questions come down to five measurements: <b>how high</b>, <b>how many legs</b>, <b>inverted or not</b>, <b>how much twist</b>, and <b>released or connected</b>. Settle those first, then look up the level cell.</p>

<h4>1. Height: where is the lowest connection?</h4>
<div class="ladder-mini" data-ladder></div>
<ul class="tight">
<li><b>Prep level</b> = lowest connection above waist and below extended.</li>
<li><b>Below prep</b> = at least one of the top person's feet is at waist level.</li>
</ul>
<div class="callout exc"><b>Exceptions to memorize</b>
<ul class="tight">
<li>Chair, T-lift and shoulder sit are <b>prep level</b>, even though they look lower or higher.</li>
<li>Arms overhead but <b>not extended</b>: chairs, torches, flat backs, straddle lifts, suspended rolls, leap frogs. Their body height matches a prep.</li>
<li>Bases who squat or kneel while extending their arms still make it an <b>extended</b> stunt (floor stunts excluded). If the lowest connection lands at prep, it's prep.</li>
<li>Floor stunts, All 4s and nugget stunts are <b>waist level</b>.</li>
</ul></div>

<h4>2. One leg or two legs?</h4>
<p>Count the feet the bases are holding. If no foot is held, count the supported legs. <span class="pill exc">Exception</span> A V-sit, pike or flat body position is always <b>two-leg</b>, including flat backs.</p>

<h4>3. Inverted or non-inverted?</h4>
<p><b>Inverted</b> means at least one foot is above the head and the shoulders are below the waist. Shoulders below the waist with <b>both</b> feet below the head is still non-inverted. A <b>downward inversion</b> is an inverted top whose center of gravity is moving toward the floor, and it has its own section in the stunt rules.</p>

<h4>4. How much twist?</h4>
<ul class="tight">
<li>Measure the total rotation of the top person's <b>hips relative to the floor</b>.</li>
<li>In stunts, the vertical axis (head to toe) and horizontal axis (front to back through the belly button) are counted <b>separately</b>, never added together.</li>
<li>A new twisting transition begins with a <b>dip</b> by the bases and/or a <b>change of direction</b>.</li>
<li>Once the stunt hits with a <b>clear, definite stop</b>, walking it around further is not part of the twist.</li>
<li>Kick fulls and kick doubles: the customary quarter turn during the kick is allowed to start the twist.</li>
</ul>

<h4>5. Released, or still connected?</h4>
<p>A <b>release move</b> means the top is free of everyone on the floor. Its height is measured at the peak, from the top's hips to the bases' extended arms:</p>
<div class="callout key"><b>Release becomes a toss or dismount when the gap is more than:</b>
<ul class="tight"><li>Levels 3–4: the length of the top person's legs</li><li>Levels 5–7: leg length <b>+ 18 in. (46 cm)</b></li></ul>
Then it must follow toss or dismount rules instead.</div>
<div class="callout warn"><b>The waist-level cradle trap.</b> Any <b>multi-based</b> waist level cradle where the bases start <b>under the top's feet</b> counts as a <b>toss</b>, with all toss rules (3–4 bases, cradle by 3, and none at Level 1 or in Prep/Novice).</div>

<h4>People: base, spotter, catcher, bracer</h4>
<ul class="tight">
<li><b>Base</b>: holds, lifts or tosses; must be on the floor. A lone person under a foot is always a base, whatever the grip. A base in a backbend or inverted can't touch a top.</li>
<li><b>Spotter</b>: protects head, neck, back and shoulders. Trained teammate, on the floor, attentive, able to touch the stunt's base, torso not under the stunt. Only the <b>front</b> hand may go under the foot; never both hands under the foot or under the bases' hands. <b>Can't count as a base and the required spotter at once.</b> In a two-leg stunt, the person under one leg is a base, never the spotter.</li>
<li><b>Catcher</b>: attentive, not in other choreography (no sign in hand), on the floor when the skill starts, makes contact on the catch.</li>
<li><b>Bracer</b>: a top person supporting another top. Hair and uniform are never legal bracing points. A required bracer can't go inverted in a transition. When hand/arm connection is required, the <b>shoulder doesn't count</b>. For leg/foot connections, shin to toe is legal.</li>
</ul>

<h4>Tumbling passes</h4>
<p>When a rule says "no tumbling after" a skill, you need a step to start a new pass. A <b>step-out</b> is part of the same pass, so it needs an extra step. Landing <b>feet together</b> needs just one step. A <b>jump</b> inside a pass breaks it up. A straight jump with a turn is not a jump skill.</p>

<h4>Pyramid height counts layers, not inches</h4>
<p><b>Two-high</b>: every top is mainly held by bases standing on the floor. Any pyramid release move counts as "passing above two persons high", however low it goes. <b>2½ high</b>: a top is weight-supported (not braced) by another top and free of the bases. Body lengths: chair, thigh stand, shoulder straddle = 1½; shoulder stand = 2; extended = 2½.</p>

<h4>Toss skill counting</h4>
<p>Twisting in tosses is cumulative. Up to 1¼ twists = <b>1 skill</b>; over 1¼ up to 2¼ = <b>2 skills</b>. Example: ½ twist, X, ½ twist = 2 skills (a full twist plus the X).</p>
`},
{ id:"tumbling", title:"Tumbling: nuances & exceptions", html:`
<div class="callout key"><b>All levels:</b> may jump or rebound over a person and rebound from feet into a stunt transition, but not to or through inverted. No tumbling over, under or through anything, and never while touching a prop.</div>
<table class="nuance"><thead><tr><th>Level</th><th>The fine print people miss</th></tr></thead><tbody>
<tr><td><span class="lv l1">1</span></td><td>Only skills that keep contact with the floor, plus <b>blocked cartwheels</b> (and round offs in running). Nothing may come <b>right after</b> a round off or round off rebound. A ½ rebound to prone is allowed. No dive rolls.</td></tr>
<tr><td><span class="lv l2">2</span></td><td>Standing allows a <b>single</b> handspring; running allows a <b>series</b>. The round off is the only airborne twist. No turning after a back handspring step out. No jump skill <b>connected</b> to a standing handspring.</td></tr>
<tr><td><span class="lv l3">3</span></td><td><b>No standing flips at all.</b> Running tucks only from a round off or round off back handspring(s). A front tuck may only follow a front handspring. Nothing after a tuck or aerial cartwheel. Standing: jump + handspring combinations allowed.</td></tr>
<tr><td><span class="lv l4">4</span></td><td>1 flip, 0 twist, standing and running, so any single non-twisting flip. Standing tucks and back handspring tucks allowed, but <b>no jump flip</b>, no consecutive flips, nothing after a tuck. Aerials and Onodis added.</td></tr>
<tr><td><span class="lv l5">5</span></td><td>Standing is still <b>0 twist</b>; the jump flip is new. Running: any flip that twists must come <b>immediately</b> after a run, round off, or back/front handspring(s). Full-twisting skills: no trick during, land on <b>both feet</b>, nothing after.</td></tr>
<tr><td><span class="lv l6">6</span></td><td>1 flip + 2 twists. Standing over 1 twist needs at least <b>2</b> consecutive non-twisting, backward skills before it, one a back handspring; a back extension roll doesn't count. No flip-twist <b>into</b> a double; no twisting <b>out of</b> a double. Swan/arched dive rolls now allowed (still no twist).</td></tr>
<tr><td><span class="lv l7">7</span></td><td>Standing doubles need only <b>one</b> backward non-twisting skill before them. Cartwheel, round off and standing single back handspring <b>rewinds</b> are allowed with nothing before them.</td></tr>
</tbody></table>
<div class="callout exc"><b>Dive roll ladder:</b> L1 none → L2–5 allowed but no arched/swan position and no twist → L6–7 swan allowed, still no twist.</div>
`},
{ id:"stunts", title:"Stunts: nuances & exceptions", html:`
<h4>Spotters</h4>
<p>Level 1 needs a spotter at <b>prep level and above</b> (shoulder sits, T-lifts and waist-only stunts excepted). From Level 2 up it's <b>above prep</b>. Floor stunts need a spotter in L1 and L2. From L3 a single based stunt with multiple tops needs a spotter <b>for each</b> top.</p>
<h4>Height</h4>
<div class="callout exc"><b>Level 1 single leg:</b> waist level normally; prep level only if an <b>extra base</b> has a hand/arm connection to the top <b>before</b> the single leg starts. Two-leg preps may <b>immediately pass</b> through extended (no stopping there).</div>
<div class="callout warn"><b>Youth and below:</b> no single based or assisted single based extended stunts at any level. They may only pass through extended if the level allows.</div>
<h4>Twisting depends on where it lands</h4>
<p>Starting at Level 3 the twist limit splits three ways: landing <b>prep or below</b>, <b>extended two-leg</b>, or <b>extended single-leg</b>. Single-leg extended is always the strictest. See the Progressions tab.</p>
<div class="callout exc"><b>Twisting exceptions:</b> L1 allows a rebound ½ turn to prone, wrap arounds, and a ½ twist that starts and ends on the floor supported only at the waist. L2 allows one full-twisting log roll, cradle to cradle, nothing added.</div>
<h4>Release moves</h4>
<ul class="tight">
<li>All levels: 3 catchers multi-based; 2 catchers single based landing horizontal; no landing inverted; no travel; separate release tops can't touch; back to original bases; no free flips (except L6 rewinds).</li>
<li><b>L3</b>: start waist or below, land prep or below, 1 trick, 0 twist, no higher than extended arms. Log rolls up to 1 twist landing cradle, flat back or prone.</li>
<li><b>L4</b>: landing extended requires a start at prep or below; 2 skills; helicopters to 180° (0 twist); inverted to non-inverted (0 twist); <b>no twisting to or from extended</b>.</li>
<li><b>L5</b>: height cap becomes 18 in. above extended arms; still no passing through inverted.</li>
<li><b>L6</b>: inverted to non-inverted may twist ½. Rewinds allowed except <b>Junior 6</b>: 1 flip, 0 twist, no toe/leg pitch, no tumbling before.</li>
</ul>
<h4>Inversions and downward inversions</h4>
<p>Inversions: none (L1) → ground level to non-inverted (L2) → prep or below (L3) → extended (L4–6). Downward: none (L1–2) → waist level, 2 catchers (L3) → prep level, 3 catchers (L4) → above prep, 3 catchers (L5–6). Two of the catchers must touch between waist and shoulders.</p>
<div class="callout exc"><b>Downward inversion exceptions:</b> the original base may lose contact when it has to, as in a cartwheel-style transition. From L4, a controlled lowering of an extended inverted stunt to prep is allowed. L5–6 add passing above prep to prep, and extended non-inverted to inverted at prep. No two-leg pancakes at L3.</div>
<p><b>Over/under:</b> arms and legs only (L1–3) → individual under a stunt / stunt over an individual (L4) → allowed (L5–6).</p>
`},
{ id:"pyramids", title:"Pyramids: nuances & exceptions", html:`
<div class="callout key"><b>All levels:</b> follow stunt and dismount rules, max 2 high. The top's primary support comes from a base unless it's a legal release. Required catchers and spotters must be stationary, watching, and not in other choreography. No resting weight at second level: transitions are continuous.</div>
<h4>Structures: what can connect to what</h4>
<ul class="tight">
<li><b>L1</b>: extended two-leg or prep single leg, braced by a prep-or-below bracer with <b>hand/arm</b> connection.</li>
<li><b>L2</b>: extended single leg, braced the same way.</li>
<li><b>L1–2 prep bracers</b> need both feet in the bases' hands unless in a shoulder sit, flat back, straddle lift or shoulder stand. No extended-to-extended connections.</li>
<li><b>L3</b>: extended single leg may not connect to <i>any</i> extended stunt. <b>L4</b>: only single-leg-to-single-leg extended is banned.</li>
</ul>
<h4>Non-released transitions</h4>
<p>Twist limits mirror stunts (¼, ½, 1, 1½, 2, 2¼), with a bracer requirement when twisting to extended single leg past ½ (L3), 1 (L4) or 1½ (L5).</p>
<div class="callout exc"><b>L3 inversion exception:</b> a top may pass through inverted if they stay in contact with a base <b>and</b> a prep-or-below bracer for the whole transition, starting and ending at prep or below. <b>L2:</b> log rolls can't be assisted by another top.</div>
<h4>Released transitions</h4>
<ul class="tight">
<li>Keep the <b>same</b> bracer(s); touch a base on the floor before losing the bracer; two bracers on separate sides; never braced to tops above prep; no traveling downward while inverted.</li>
<li><b>L3</b>: 2 bracers, 2 catchers, no base changes; twist 1. Braced inversions not allowed.</li>
<li><b>L4</b>: 1 bracer non-inverted; twist 1½; braced flips need <b>2</b> bracers, 1¼ flip, 3 catchers, no base changes.</li>
<li><b>L5</b>: braced flips drop to <b>1</b> bracer. <b>L6</b>: braced flips may combine 1¼ flip + ½ twist or ¾ flip + 1 twist.</li>
</ul>
<div class="callout exc"><b>Catcher swaps:</b> braced flips landing <b>upright at prep or above</b> need 1 catcher + 2 spotters instead of 3 catchers (L4–5; L6 only if non-twisting). Legal stunt release moves may use 1 bracer (L3–4).</div>
`},
{ id:"dismounts", title:"Dismounts: nuances & exceptions", html:`
<div class="callout key"><b>All levels:</b> single based cradles need a spotter supporting waist to shoulders; multi-based cradles need 2 catchers + that spotter. Single based multi-top cradles need 2 catchers per top, everyone stationary. Floor dismounts need help from the original base/spotter unless it's a straight drop or small hop from waist level or below. Back to original bases. No flipping, inverted, traveling or tension drops.</div>
<ul class="tight">
<li><b>L1</b>: pop downs and straight cradles only. No waist level cradles or sponges, and no dismounting from above prep in pyramids.</li>
<li><b>L2</b>: adds ¼ turn cradles. Mini division: no waist level cradles.</li>
<li><b>L3</b>: two legs: 1¼ twist <b>or</b> 1 trick. Single leg: only ¼ twist cradles. Any trick from prep or above must cradle. Nothing from inverted.</li>
<li><b>L4</b>: 2¼ from two legs, 1¼ from single leg, max 2 tricks. From inverted: no twist.</li>
<li><b>L5</b>: 2¼, max 3 tricks; past 1½ twists, nothing but the twist.</li>
<li><b>L6</b>: 2¼; dismounts from inverted may twist up to ½.</li>
</ul>
<div class="callout exc"><b>Multi-top exception:</b> single based stunts with multiple tops are the one case where dismounts needn't return to the original base and released tops may touch.</div>
`},
{ id:"tosses", title:"Tosses: nuances & exceptions", html:`
<div class="callout key"><b>All levels:</b> 3–4 tossing bases with one behind the top; caught in cradle by at least 3 <b>original</b> bases with one at head and shoulders; one top only; no flipping, inverted or traveling; nothing over or under.</div>
<ul class="tight">
<li><b>L1</b>: no tosses, including waist level cradles and sponge tosses.</li>
<li><b>L2</b>: straight ride only. Mini division: none.</li>
<li><b>L3</b>: 1¼ twists, max 1 trick. Ball X is allowed and an arch doesn't count as a trick.</li>
<li><b>L4</b>: 2¼ twists, 2 tricks. <b>L5</b>: 2½, 3 tricks; past 1½ twists, nothing else. <b>L6</b>: 2½.</li>
<li><b>L7</b>: non-flipping up to 3½; flipping up to 1¼ flip + 2 skills (tuck, pike and layout don't count). Flyovers to another set of bases: 1½ twists or a ¾ front flip.</li>
</ul>
<div class="callout warn">Traveling toss means bases must travel to catch. A ¼ or ½ turn by the bases (as in a kick full) is <b>not</b> traveling.</div>
`},
{ id:"l7", title:"Level 7 at a glance", html:`
<ul class="tight">
<li><b>Tumbling</b>: 1 flip + 2 twists; standing doubles need one backward non-twisting skill first; tumbling rewinds allowed.</li>
<li><b>Stunts</b>: 2¼ twists; release moves capped at 18 in.; ground-level free flips up to 1¼ flip + 1¼ twist (toe/leg pitch allowed); from a stunt 1¼ flip + ½ twist, from prep only. Coed tosses to a new base allowed.</li>
<li><b>Pyramids</b>: up to 2½ high, towers allowed; 2½ high needs a front and back spotter per top. Free flying mounts from ground 1 flip + 1 twist or 2¼ twists.</li>
<li><b>Dismounts</b>: up to 2¼; over 1¼ needs an extra spotter (cradle) or 2 catchers (floor). Front free flips to the floor: 1 flip, 0 twist.</li>
<li><b>Tosses</b>: 3½ twists non-flipping; flipping 1¼ + 2 skills.</li>
</ul>
`},
{ id:"divisions", title:"Division-specific differences", html:`
<table class="nuance"><thead><tr><th>Division</th><th>What changes</th></tr></thead><tbody>
<tr><td><b>International</b></td><td>At least 16 athletes; males capped at ⅔ of a co-ed team; 2:30 (non-tumbling 2:00). Non-tumbling: forward rolls, handstands, cartwheels and round offs only for stunting or formation changes, under level inversion rules.</td></tr>
<tr><td><b>Prep</b></td><td>2:00 max. No tosses (including sponge/load-in/squish) and no waist level cradles. Spring floor or carpet bonded foam. At 2-day events, evaluated once only.</td></tr>
<tr><td><b>Novice</b></td><td>1:30 max. Same toss ban and surface options as Prep. Rated Outstanding/Excellent/Superior, not ranked. Tumbling follows level rules but isn't rated. Tiny Novice: only cartwheels and forward rolls, and no stunts or pyramids.</td></tr>
<tr><td><b>Novice L1</b></td><td>No single legs above waist; two-legs can't pass through extended; only ¼ twists; no transitions to prone; no straight pop downs.</td></tr>
<tr><td><b>Novice L2</b></td><td>Single legs can't pass through extended; no log/barrel rolls.</td></tr>
<tr><td><b>Novice L3</b></td><td>No twisting to/from extended single leg; no full twists to/from extended two leg; multi-based suspended rolls can't twist.</td></tr>
<tr><td><b>CheerABILITIES</b></td><td>No tosses. Prep-level-and-above building without a coach needs an extra coach/assistant spotter. Assistants wear contrasting t-shirt and dark pants. Mobility devices are part of the athlete; weight-bearing wheelchair use is pre-approved through the Coach App. Tumbling and building limits vary by Exhibition, Novice, Elite and Unified.</td></tr>
</tbody></table>
`}
];

// Rule-based flashcards (second deck)
const RULECARDS = [
["Stunts L1: when is a spotter required?","Prep level and above, plus floor stunts. Not needed for shoulder sits, T-lifts or stunts held only at the waist.","stunts"],
["Stunts L2+: when is a spotter required?","Above prep level (L2 also floor stunts). From L3, single based multi-top stunts need a spotter per top.","stunts"],
["Max stunt twist by level (prep or below)","L1 ¼ · L2 ½ · L3 1 · L4 1½ · L5 2 · L6 2¼ · L7 2¼","stunts"],
["Max twist to extended single leg","L3 ½ · L4 1 · L5 1½ · L6 2¼ (one limit for all landings at L6)","stunts"],
["When can a L1 single leg go to prep level?","Only with an additional base holding a hand/arm connection to the top before the single leg starts.","stunts"],
["Youth and below: extended single based stunts?","Not allowed (single based or assisted single based), but may immediately pass through extended if the level allows.","stunts"],
["Release move height cap by level","L3–4: bases' extended arm level. L5–6 (and L7): 18 in./46 cm above extended arms.","stunts"],
["When does a release move become a toss/dismount?","Hips-to-extended-arms gap exceeds leg length (L3–4) or leg length + 18 in. (L5–7).","stunts"],
["Release move catchers (all levels)","3 for multi-based; 2 for single based landing horizontal.","stunts"],
["L6 rewind requirements","Not Junior 6. 1 flip, 0 twist; single based 1 catcher + 1 spotter; multi-based 2 catchers + 1 spotter; no toe/leg pitch; no tumbling before.","stunts"],
["Inversion progression (stunts)","L1 none · L2 ground level to non-inverted · L3 prep or below · L4–6 extended","stunts"],
["Downward inversion progression","L1–2 none · L3 waist (2 catchers) · L4 prep (3 catchers) · L5–6 above prep (3 catchers)","stunts"],
["Stunt over/under progression","L1–3 arms & legs · L4 individual under stunt / stunt over individual · L5–6 allowed","stunts"],
["Standing tumbling: first level with a flip?","Level 4 (standing tuck, back handspring tuck). Level 3 allows no standing flips.","tumbling"],
["Running tumbling: first level with a twisting flip?","Level 5: 1 flip + 1 twist, immediately preceded by run/round off/handspring(s); land both feet; nothing after.","tumbling"],
["What may precede a L3 running front tuck?","Only a front handspring.","tumbling"],
["L6 vs L7 standing double setup","L6: 2+ consecutive non-twisting backward skills, one a back handspring. L7: at least 1.","tumbling"],
["Dive roll rules by level","L1 none · L2–5 no swan/arched, no twist · L6–7 no twist","tumbling"],
["Pyramid structure limits L1–4","L1 two-leg ext or prep single leg with hand/arm bracer · L2 ext single leg with hand/arm bracer · L3 no ext single leg to any ext · L4 no ext single leg to ext single leg","pyramids"],
["Pyramid released transition bracers (non-inverted)","L3: 2 bracers (one hand/arm to hand/arm), no base changes · L4–6: 1 bracer, 2 catchers (min 1 catcher + 1 spotter)","pyramids"],
["Braced flips: bracers by level","L3 not allowed · L4 2 bracers · L5–6 1 bracer; all 3 catchers","pyramids"],
["Braced flip landing upright at prep+","1 catcher + 2 spotters (L4–5; L6 non-twisting only).","pyramids"],
["Dismount twist by level","L1 0 · L2 ¼ turn · L3 1¼ (two legs) / ¼ (single leg) · L4 2¼ / 1¼ · L5–7 2¼","dismounts"],
["Dismounts from inverted","L1–3 none · L4–5 no twist · L6 up to ½ twist","dismounts"],
["Toss twist by level","L1 none · L2 straight ride · L3 1¼ · L4 2¼ · L5 2½ · L6 2½ · L7 3½ (non-flipping)","tosses"],
["Toss trick limits","L3 1 · L4 2 · L5 3 (over 1½ twists, no other skill). Ball X OK at L3; arch isn't a trick.","tosses"],
["Toss bases & catch","3–4 tossing bases, one behind; cradled by 3+ original bases, one at head/shoulders; one top only.","tosses"],
["Multi-based waist level cradle from under the feet","It's a toss: follows all toss rules.","tosses"],
["Prep & Novice tosses?","Not permitted, including sponge/load-in/squish tosses and waist level cradles.","divisions"],
["Routine time limits (divisions)","Prep 2:00 · Novice 1:30 · International 2:30 (non-tumbling 2:00)","divisions"]
];

// Practice quiz. a = index of the correct option.
const QUIZ = [
// Core concepts / glossary
{t:"core",q:"A top person is held in a V-sit by one base. Is this a one-leg or two-leg stunt?",o:["One-leg, since only one base","Two-leg","Depends on how many feet are held","It isn't a stunt"],a:1,e:"V-sit, pike and flat body positions are always treated as two-leg stunts."},
{t:"core",q:"Which of these is a PREP level stunt even though the base's arms may be overhead?",o:["Extension","Liberty","Chair","Cupie"],a:2,e:"Chairs, T-lifts, flat backs, straddle lifts, torches and suspended rolls have prep-like body height, so they're prep level."},
{t:"core",q:"Bases squat down while holding a top at full arm extension. How is the stunt classified?",o:["Prep level","Extended","Shoulder level","Waist level"],a:1,e:"Dropping the overall height with extended arms is still an extended stunt (floor stunts excluded)."},
{t:"core",q:"A top's shoulders are below their waist but both feet are below their head. They are:",o:["Inverted","Non-inverted","In a downward inversion","Prone"],a:1,e:"Non-inverted includes shoulders below waist with both feet below the head."},
{t:"core",q:"In stunts, a top twists ½ on the vertical axis while also rolling ½ on the horizontal axis. How much twist is counted?",o:["1 full twist","½ on each axis, counted separately","No twist","¼"],a:1,e:"Simultaneous twisting on both axes is counted separately, not added together."},
{t:"core",q:"At Level 5, a release move's hips-to-extended-arms gap is bigger than the top's leg length plus 18 inches. It is now treated as:",o:["Still a release move","A toss or dismount","A free flip","Illegal at every level"],a:1,e:"Past leg length (L3–4) or leg length + 18 in. (L5–7), the release must follow toss or dismount rules."},
{t:"core",q:"Three bases start under the top's feet at waist level and release to a cradle. This is:",o:["A waist level cradle (dismount)","A toss","A release move","A pop down"],a:1,e:"Multi-based waist level cradles with bases starting under the feet count as tosses and follow toss rules."},
{t:"core",q:"Which body part is NEVER legal for bracing in a pyramid?",o:["Hand","Lower leg","Hair or uniform","Foot"],a:2,e:"Hair and uniform are never legal bracing points."},
{t:"core",q:"In a two-leg stunt, can the base holding one foot also be the required spotter?",o:["Yes, if they grip the ankle","Yes, at Level 1 only","No, a lone person under a foot is a base","Only for floor stunts"],a:2,e:"A person alone under a foot is a base regardless of grip, and nobody can be both a base and the required spotter."},
{t:"core",q:"If a spotter puts a hand under the top's foot, which hand must it be?",o:["Either","The back hand","The front hand","Both hands"],a:2,e:"Only the front hand may go under the foot. The back hand goes on the back of the ankle/leg or the back of the base's back wrist."},
{t:"core",q:"A tumbler does a skill that rules say can't be followed by more tumbling and lands in a step-out. To start a new pass they need:",o:["Nothing","One step","An additional step beyond the step-out","A jump"],a:2,e:"A step-out continues the same pass, so an additional step is needed. Landing feet together needs just one step."},
{t:"core",q:"How many skills is a toss of ½ twist, X, ½ twist?",o:["1","2","3","It's illegal"],a:1,e:"Twisting is cumulative: a full twist (1 skill) plus the X = 2 skills."},
{t:"core",q:"A pyramid top is released from the bases for a moment and is caught again at the same height. Is it 'passing above two persons high'?",o:["No, it never went higher","Yes, any pyramid release move counts","Only above extended level","Only at Level 7"],a:1,e:"'Passing above two high' refers to layers, not actual height. Any pyramid release move counts."},
{t:"core",q:"How many body lengths is a shoulder stand when measuring 2½ high pyramids?",o:["1½","2","2½","3"],a:1,e:"Chairs, thigh stands and shoulder straddles are 1½; shoulder stands 2; extended stunts 2½."},
// Tumbling
{t:"tumbling",q:"What is the lowest level that allows a STANDING back tuck?",o:["Level 2","Level 3","Level 4","Level 5"],a:2,e:"Level 3 standing allows no flips. Standing tucks begin at Level 4."},
{t:"tumbling",q:"At Level 3 running, what may come immediately before a front tuck?",o:["A round off","A front handspring only","A back handspring","Any tumbling"],a:1,e:"No tumbling prior to a front tuck except a front handspring."},
{t:"tumbling",q:"At Level 5, a standing tumbling pass may include:",o:["A standing full","A jump flip with 0 twists","Round off back handspring full","A double"],a:1,e:"L5 standing: jump flip and up to 1 flip with 0 twists."},
{t:"tumbling",q:"Level 5 running full: which is required?",o:["Must land with both feet","May add a trick during the full","May tumble after it","Must follow a jump"],a:0,e:"Any twisting flip must be immediately preceded by running, a round off or handspring(s). Full-twisting skills have no trick, land on both feet, and nothing may follow."},
{t:"tumbling",q:"Level 6 standing double: what must come before it?",o:["Nothing","One back handspring","At least 2 consecutive non-twisting backward skills, one a back handspring","A round off"],a:2,e:"And a back extension roll doesn't count. Level 7 needs only one such skill."},
{t:"tumbling",q:"Which dive roll is legal at Level 4?",o:["Swan dive roll","Twisting dive roll","Tucked dive roll, no twist","None"],a:2,e:"L2–5: no arched/swan dive rolls, no twisting. Swan becomes legal at L6."},
{t:"tumbling",q:"At Level 1, what's NOT allowed immediately after a round off?",o:["A step","More tumbling","A jump","A pose"],a:1,e:"Level 1 running: no tumbling immediately after a round off or round off rebound."},
{t:"tumbling",q:"When rebounding into a stunt transition (L1–6), the athlete may NOT:",o:["Rebound from their feet","Rebound to or through inverted","Jump over a person","Rebound at all"],a:1,e:"Rebounding into a stunt transition may not go to or through inverted. Level 7 has rewind exceptions."},
// Stunts
{t:"stunts",q:"At Level 1, a spotter is required for:",o:["Above prep only","Prep level and above, and floor stunts","Only extended stunts","Every stunt including shoulder sits"],a:1,e:"Exceptions: shoulder sits, T-lifts and stunts supported only at the waist."},
{t:"stunts",q:"At Level 3, what is the max twist into an extended single leg stunt?",o:["¼","½","1","1½"],a:1,e:"L3: ½ to extended single leg; 1 to prep or below; 1 to extended two leg."},
{t:"stunts",q:"At Level 5, max twist into an extended single leg stunt?",o:["1","1½","2","2¼"],a:1,e:"L5: 2 to prep/below and extended two leg; 1½ to extended single leg."},
{t:"stunts",q:"Level 2 allows which twisting exception?",o:["Double-twisting log roll","Single full-twisting log roll, cradle to cradle, no extra skills","Full up to extended","Helicopter"],a:1,e:"Otherwise Level 2 stunts are capped at ½ twist."},
{t:"stunts",q:"A Youth Level 3 team wants a stopped single based extended liberty. Legal?",o:["Yes","No: Youth and below can't do single based extended stunts","Only with two spotters","Only in pyramids"],a:1,e:"Youth and below may only immediately pass through extended single based if the level allows."},
{t:"stunts",q:"Level 3 release moves must:",o:["Start waist or below and land prep or below","Start at prep and land extended","Include a twist","Be helicopters"],a:0,e:"1 skill/trick, 0 twist, no higher than extended arm level, no helicopters or inversions. Log rolls up to 1 twist are the exception."},
{t:"stunts",q:"Which first appears at Level 4 release moves?",o:["Free flips","Helicopters up to 180° with 0 twisting","Rewinds","18-inch height allowance"],a:1,e:"Helicopters at L4 need 3 catchers with 1 at the head and shoulders."},
{t:"stunts",q:"Rewinds at Level 6 are NOT allowed in which division?",o:["Senior 6","Open 6","Junior 6","U18"],a:2,e:"The L6 rewind exception excludes Junior 6."},
{t:"stunts",q:"Level 3 downward inversions:",o:["Not allowed","Waist level or below with 2 catchers at waist-to-shoulder region","Prep level with 3 catchers","Above prep with 3 catchers"],a:1,e:"May immediately pass through prep. No two-leg pancakes."},
{t:"stunts",q:"When may an original base lose contact during a downward inversion?",o:["Never","When necessary, as in cartwheel-style transitions","Whenever catchers are present","Only at Level 6"],a:1,e:"Downward inversions must keep contact with the original base, with that exception."},
{t:"stunts",q:"At Level 4, which over/under is allowed?",o:["Arms and legs only","An individual under a stunt / stunt over an individual","Any over/under","None"],a:1,e:"L1–3 arms and legs only; L4 individual under/stunt over individual; L5–6 allowed."},
// Pyramids
{t:"pyramids",q:"At Level 2, an extended single leg in a pyramid must be:",o:["Unbraced","Braced by a prep-or-below bracer with hand/arm connection","Braced by another extended stunt","Not allowed"],a:1,e:"And prep level bracers need both feet in the bases' hands unless in shoulder sit, flat back, straddle lift or shoulder stand."},
{t:"pyramids",q:"At Level 3, which pyramid structure is NOT allowed?",o:["Extended two leg next to prep","Extended single leg connected to any extended stunt","Prep level single leg braced","Shoulder sit bracer"],a:1,e:"Level 4 relaxes this to banning only extended single leg to extended single leg."},
{t:"pyramids",q:"Level 3 released transitions (non-inverted) require:",o:["1 bracer, 1 catcher","2 bracers, 2 catchers, no base changes","No bracers","3 bracers"],a:1,e:"One bracer must be hand/arm to hand/arm; the other may be hand/arm or hand/arm to foot/lower leg."},
{t:"pyramids",q:"How many bracers does a Level 4 released braced flip require?",o:["0","1","2","3"],a:2,e:"L4: 2 bracers, up to 1¼ flip, 0 twist, no base changes, 3 catchers. L5–6 drop to 1 bracer."},
{t:"pyramids",q:"A Level 5 braced flip lands upright at prep level. The minimum catching crew is:",o:["3 catchers","1 catcher and 2 spotters","2 catchers","1 spotter"],a:1,e:"Braced flips landing upright at prep or above need a minimum of 1 catcher and 2 spotters."},
{t:"pyramids",q:"During a released pyramid transition, when may contact with the bracer be lost?",o:["Any time","After contact with a base on the floor is made","Only at the peak","Never"],a:1,e:"The top must touch a base on the floor before losing bracer contact (hair/uniform don't count)."},
// Dismounts
{t:"dismounts",q:"At Level 3, the max dismount from a single leg stunt is:",o:["Straight cradle only","¼ twist cradle","1¼ twist","2¼ twist"],a:1,e:"L3: 1¼ twist or 1 trick from two legs; ¼ twist cradles from single leg."},
{t:"dismounts",q:"Which level first allows a dismount from an inverted position to twist?",o:["Level 4","Level 5","Level 6","Never"],a:2,e:"L3: no dismounts from inverted. L4–5: may not twist. L6: up to ½ twist."},
{t:"dismounts",q:"A dismount to the performing surface without assistance from the original base/spotter is legal only if:",o:["It's from extended","It's a straight drop/small hop off from waist level or below with no skills","It has a ¼ turn","The top lands on one foot"],a:1,e:"All other floor dismounts need help from the original base/spotter."},
{t:"dismounts",q:"Multi-based cradles require:",o:["1 catcher","2 catchers and a spotter supporting waist to shoulder","3 catchers only","No spotter"],a:1,e:"Single based cradles need a spotter with at least one hand/arm at the waist-to-shoulder region."},
{t:"dismounts",q:"At Level 5, a dismount with more than 1½ twists may include:",o:["A kick","Up to 3 tricks","No skill other than the twist","An arch"],a:2,e:"L5 allows 2¼ twists and up to 3 tricks, but past 1½ twists, nothing but the twist."},
// Tosses
{t:"tosses",q:"What is the only toss allowed at Level 2?",o:["Kick full","Straight ride","Toe touch","Ball X"],a:1,e:"And no tosses at all in the Mini division."},
{t:"tosses",q:"Level 3 tosses allow:",o:["2¼ twists","1¼ twists, max 1 trick (Ball X allowed)","Straight ride only","Kick double"],a:1,e:"An arch doesn't count as a trick."},
{t:"tosses",q:"How many tossing bases are required?",o:["2–3","3–4, one behind the top","Exactly 4","Any number"],a:1,e:"Caught in cradle by at least 3 original bases, one at head and shoulders."},
{t:"tosses",q:"Max twisting for Level 6 tosses?",o:["2¼","2½","3","3½"],a:1,e:"L5 and L6: 2½. L7 non-flipping: 3½."},
{t:"tosses",q:"A kick full where the bases make a ½ turn to catch is:",o:["A traveling toss (illegal)","Legal: a ¼ or ½ turn isn't traveling","Legal only at Level 7","A flyover"],a:1,e:"Traveling tosses intentionally require bases to travel; a quarter or half turn doesn't count."},
// Divisions / L7
{t:"divisions",q:"Are sponge tosses allowed in Prep divisions?",o:["Yes","Only at Level 2","No, no tosses or waist level cradles","Only straight rides"],a:2,e:"Prep and Novice ban all tosses, including sponge/load-in/squish, and waist level cradles."},
{t:"divisions",q:"Novice routine time limit?",o:["2:30","2:00","1:30","1:00"],a:2,e:"Prep is 2:00; International 2:30 (non-tumbling 2:00)."},
{t:"divisions",q:"Which tumbling skills are allowed in Tiny Novice?",o:["Any Level 1 skill","Cartwheels and forward rolls only","Handstands and bridges","None"],a:1,e:"Tiny Novice also allows no stunts or pyramids."},
{t:"l7",q:"Level 7 pyramids may go up to:",o:["2 high","2½ high, towers allowed","3 high","Any height"],a:1,e:"2½ high pyramids need a front and back spotter for each top-layer top."},
{t:"l7",q:"Level 7 non-flipping tosses may twist up to:",o:["2½","3","3½","4"],a:2,e:"Flipping tosses: up to 1¼ flip and 2 additional skills (tuck, pike, layout not counted)."}
];
