Figma design: 
https://www.figma.com/proto/UbSmUsq6Fw4XnVlIBWnPOf/Bubo-Owl%3A-Baby-Music?node-id=114%3A261&scaling=scale-down&page-id=0%3A1&starting-point-node-id=114%3A261

Create an app for the Google Play Store that features nursery songs for children

# Built with React Native

[Udemy course used](https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706480)

# General Questions and Barriers
- How will I know what language the user prefers?
- How do I play music?
  - https://www.youtube.com/watch?v=fOtCxD3AodY
  - https://www.youtube.com/watch?v=-F8twDee9rA
- How to I configure notifications for the app, such as when to play music for the child?
- [How do I create a popup screen?](https://reactnative.dev/docs/modal)
- Best way to do animation (for rotating disk [native add possibly..] and for startup loading screen with logo)? Manually through math functions and playing with margins, or some better way?
- Figure out the database*


# DATABASE*

What to store:
- Assets (asset folder: this will be the same for everyone):
  - A select number of songs for normal speed (local data)
  - Any self-made logos and icons
- Paulstretch songs (Large data - store on server)
- Videos for the About and Support My Child page (Large data - store on server)
- Playlists that the user made (Virtually nothing, should be available without internet connection - local data)

[Options available (StackOverflow)](https://stackoverflow.com/questions/44376002/what-are-my-options-for-storing-data-when-using-react-native-ios-and-android)
[Picking a database to use for my app (YT)](https://www.youtube.com/watch?v=NxyvPltvvBE)
Options to look at:
- Firebase [pricing](https://www.quora.com/How-many-visitors-does-Firebase-support-in-free-and-paid-plans-Is-Firebase-costly): Online storage OR Amazon Simple Storage Service (Amazon S3)
- [Realm Database](https://www.youtube.com/watch?v=86kq_6nNuwU) (open source and free!)
- Traditional MySQL database, just a little hard to use


(What about MongoDB? It would be good to use this since the tutorial used it)

# Testing the app?
- Cypress

# Figuring out Google Play
- [General Guide](https://orangesoft.co/blog/how-to-publish-an-android-app-on-google-play-store)
- [Rules for apps](https://orangesoft.co/blog/why-google-and-apple-may-remove-your-app)
- [Legal requirements for app](https://termly.io/resources/articles/legal-requirements-for-apps/)
- [Best Practices](https://play.google.com/console/about/)

# Figuring out the App Store (iOS)

# Where to get advertisements to show on your app
AdMob, StartApp, or InMobi

# Public Domain and Copyright Laws

All songs used in this app will adhere to the "70 year rule", in that copyright, 
for most countries, is no longer applicable for works whose author has been 
deceased for more than 70 years. 

In the US, works are in the public domain if the publication date is before 
January 1, 1927.

[Songs in the public domain (supposedly)](https://www.pdinfo.com/mobile/pd-music-genres/pd-children-songs.php)

[World map of country copyright laws](https://en.wikipedia.org/wiki/List_of_countries%27_copyright_lengths#/media/File:World_copyright_terms.svg)

## Creative Commons Attribution link ##
[link](https://docs.google.com/spreadsheets/d/1_ZVSW99C82CW0tuiZUI6mUNebztOZNLHM1qSu52CHX4/edit?usp=sharing)

# Source Music

| Nursery | Classical |
| ------- | --------- |
| Lavender Blue (Originally published in 1877, author Walter Crane deceased since 1915) ([Licence](https://commons.wikimedia.org/wiki/File:The_Baby%27s_Opera_A_book_of_old_Rhymes_and_The_Music_by_the_Earliest_Masters_Book_Cover_11.png))| Mozart Andante. Sonate KV 545 Movt. 1 |
| Row, Row, Row Your Boat (Origianlly published in 1852, composer Eliphalet Oram Lyte deceased since 1913) ([License](https://commons.wikimedia.org/wiki/File:Row_your_boat.svg)) | Mozart Andante. Sonate KV 545 Movt. 2 |
| Old McDonald Had A Farm (Alledged composer Thomas d'Urfey deceased since 1723) [Article](https://en.wikipedia.org/wiki/Old_MacDonald_Had_a_Farm) | Mozart Andante. Sonate KV 545 Movt. 3 |
| Hot Cross Buns | ~~Mozart Variations on "Ah! Vous Dirai-je Maman" (Theme,Var.1,3,5,8,9,11) K.265~~ |
| Are You Sleeping? (Two Tigers) | Mozart Piano Sonata no.11 in A Major, Movt. 1 K.331 |
| London Bridge Is Falling Down | ~~Mozart Piano Sonata no.11 in A Major, Movt. 3 "Rondo alla Turca" K.331~~ |
| Alouette (Alouette, the Lark) | Chopin Op. 57 |
| If You're Happy And You Know It | Chopin Op. 28 No. 15 |
| Three Blind Mice | Bach prelude in C BWV 846 |
| Mary had a Little Lamb | ~~Debussy Clair de Lune~~ |

# Recordings Used

_Note: All of the nursery song recordings were originals._

| Classical Song | Recording used | 
| ------- | --------- |
| Mozart Andante Sonata K. 545 Movt. 1 |  |
| Mozart Andante Sonata K. 545 Movt. 2 |  |
| Mozart Andante Sonata K. 545 Movt. 3 |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


# Future Songs
- Classical 
  - Mozart Piano Sonata no.5 in G Major, I. "Allegro" K.283 (Originally thought of this, may be too intense in some parts.)
  - Chopin Nouvelle Etude No. 2
  - Bach Minuet in G major, BWV Anh. 114
  - [~~Beethoven: Sonata No.20 in G Major, Op.49 No.2 Movt. 2~~](https://musopen.org/music/45-piano-sonata-no-20-in-g-major-op-49-no-2/) [License](https://creativecommons.org/publicdomain/mark/1.0/)
  - Chopin Waltz in A minor
  - Pathetique Sonata, 2nd Mvt.
  - [~~Chopin Nocturne Op. 32 No. 1 in B Major~~](https://musopen.org/music/109-nocturnes-op-32/) [License](https://creativecommons.org/publicdomain/mark/1.0/)
  - Schumann - Träumerei, "Kinderszenen" No. 7, Scenes from Childhood

- Nursery:
  - She'll be coming round the mountain when she comes
  - I'm a little teapot
  - The Itsy Bitsy Spider


# Sources of Revenue
- Banner ads
- Interstitial ads:
  - Logic for these ads so they are not interruptive:
    - 
- Affiliate Marketing
- In-app purchases: Use Stripe or Paypall

# Helpful Resources
- [Get local time](https://infinitbility.com/how-to-get-current-time-in-react-native/#:~:text=To%20get%20the%20current%20datetime,hours%2C%20minutes%2C%20and%20seconds.)
- [Music App UI Guide](https://www.youtube.com/watch?v=fOtCxD3AodY)
- [Guide for configuring music player](https://www.youtube.com/watch?v=-F8twDee9rA)
- [Better Music Player Guide](https://www.youtube.com/watch?v=Bxj1spqPOZE)
- [Switches for SettingsScreen](https://reactnative.dev/docs/switch)
- [Storing variables other than strings into AsyncStorage](https://stackoverflow.com/questions/59801359/saving-list-with-asyncstorage)
-[override react native style](https://stackoverflow.com/questions/48823823/override-react-native-style)
