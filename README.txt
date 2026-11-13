EARLY LEARNINGS  ·  Play, Discover, Grow
========================================
A calm, offline set of learning activities for ages 2 to 6, with Rory the dino.
Runs in the browser on an iPad (iOS 12 and newer), iPhone, or any modern tablet,
and installs to the Home Screen like an app.

FILES (upload ALL of these to the root of the Early-Learnings repo)
  play.html              the app itself
  play.appcache, sw.js   offline support (old iPads use the first, newer devices the second)
  manifest.webmanifest   app name and icons for "Add to Home Screen"
  play-icon.png, icon-192.png, icon-512.png   icons
  index.html             start page with install steps
  guide.html             educator guide (learning objectives)
  sheets.html            printable activity sheets
  privacy.html, terms.html   DRAFT policy and terms - fill in the [brackets], get them reviewed
  docs.css               styling for the four document pages


PUBLISH (new repo "Early-Learnings")
  1. github.com > New repository > name: Early-Learnings > Public > Create.
  2. "uploading an existing file" > drag in the files (not the zip, not a folder) > Commit.
  3. Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
  4. After about a minute the site is at  https://anthdimatz.github.io/Early-Learnings/

INSTALL
  1. Open  https://anthdimatz.github.io/Early-Learnings/  in Safari and tap "Open the app".
  2. Share button > Add to Home Screen > Add.
  3. Old home-screen icons from the earlier ipad site can be deleted.

FOR CHILDREN
  Welcome screen > Start > five big cards (Discover, Think, Create, Explore, Relax)
  and a wide Rory banner underneath for his Hero Academy missions.
  Each card opens a page of activities. The house button always goes home.
  There are no links out of the app, no ads and no purchases.

FOR EDUCATORS  (Settings, top right - or tap the bar at the bottom of the home screen)
  First time: answer the grown-ups sum, then choose a 4-digit PIN.
  Forgot the PIN? Tap "Forgot PIN?" and answer a new sum to choose another.
    Age group        2-3, 3-4, 4-5, 5-6. Changes subjects and difficulty everywhere.
    Calm Mode        no music, no sound effects, no confetti, nothing bounces or flashes.
    Sound / Voice    volume for effects and music; spoken instructions on or off.
    Session length   10-30 minutes, then a gentle "all done" screen only an educator can clear.
    Group turns      2-4 children: type their first names and the app shows whose turn it is.
    Activities       tap any activity to hide it from children; "Suggested for this age".
    Difficulty       set any subject or Rory mission level by hand.
    Language         English, Français, Español, Italiano, Português.
    About            educator guide, printable sheets, privacy, terms, change PIN, reset.
  To stop a child leaving the app on an iPad: Settings > Accessibility > Guided Access.

WHAT IS SAVED
  Only on the device: settings, PIN, levels and stars, an optional first name.
  Nothing is sent anywhere. See privacy.html.

UPDATING
  Upload the new files to GitHub. The app picks up a new version by itself the next time
  it is opened with an internet connection (old iPads: within a few seconds of opening).
  The version number is at the bottom of Settings.

NOT IN THIS VERSION
  User accounts, licences and an admin portal need a server (see the notes from Claude).
