# AppMobile
Repository made for the containment of an app made for M:tel App Competition (BiH, Serbia, Montenegro), 2021.

An app that allows you to write down all the required data to keep track of your car maintainance, with the ability to display all the data in a useful, yet readable way.
It also has a way for the user to find latest news surrounding COVID19 development in countries featured in the competition.


Note:
The node_modules are preinstalled, since a package that we have manually modified is being used. The Gradle is also installed.

Should you find trouble running the application out of the box, follow these steps:
1. npm i
2. upgrade react-native or npm audit fix (or npm audit fix --force, note that the version of react-native should stay the same)
3. if all fails, reinstall node_modules, run npm i and replace react-native-dropdown-picker with the one currently present in the repository (in node_modules)

Gradle version: 6.2
React Native version: 0.63.4

Team Linuxovci
