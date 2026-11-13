EARLY LEARNINGS  ·  Play, Discover, Grow
========================================
A calm, offline set of learning activities for ages 2 to 6, with Rory the dino.
Runs in the browser on an iPad (iOS 12 and newer), iPhone, or any modern tablet,
and installs to the Home Screen like an app.

FILES (upload ALL of these to GitHub, replacing the old ones)
  play.html              the app itself
  play.appcache, sw.js   offline support (old iPads use the first, newer devices the second)
  manifest.webmanifest   app name and icons for "Add to Home Screen"
  play-icon.png, icon-192.png, icon-512.png   icons
  index.html             start page with install steps
  guide.html             educator guide (learning objectives)
  sheets.html            printable activity sheets
  privacy.html, terms.html   DRAFT policy and terms - fill in the [brackets], get them reviewed
  docs.css               styling for the four document pages

  DELETE from GitHub (no longer used): calendar.html, calendar.appcache, calendar-icon.png,
  and any ipad-apps zip that was uploaded by accident.

INSTALL
  1. Open  https://<your-name>.github.io/ipad/  in Safari and tap "Open the app".
  2. Share button > Add to Home Screen > Add.
  3. Old home-screen icons called "Play Time" or "Family Calendar" can be deleted.
     Play Time progress carries over because the app is still at play.html.

FOR CHILDREN
  Welcome screen > Start > five big cards: Discover, Think, Create, Explore, Relax.
  Each card opens a page of activities. The house button always goes home.
  There are no links out of the app, no ads and no purchases.

FOR EDUCATORS  (Settings, top right - or tap the bar at the bottom of the home screen)
  First time: answer the grown-ups sum, then choose a 4-digit PIN.
  Forgot the PIN? Tap "Forgot PIN?" and answer a new sum to choose another.
    Age group        2-3, 3-4, 4-5, 5-6. Changes subjects and difficulty everywhere.
    Calm Mode        no music, no sound effects, no confetti, nothing bounces or flashes.
    Sound / Voice    volume for effects and music; spoken instructions on or off.
    Session length   10-30 minutes, then a gentle "all done" screen only an educator can clear.
    Group turns      2-4 children: a coloured number shows whose turn it is.
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
