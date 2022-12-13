# Android Application

MediShare's Android application is built with the open source UI framework [React Native](https://reactnative.dev) by Meta Platforms, Inc.



## Setting Up the Development Environment

The steps below are taken from React Native's  ["Setting Up the Development Environment"](https://reactnative.dev/docs/environment-setup) page.

This document will help you install and build MediShare's Android app. The instructions are a bit different depending on your development operating system:

### Installing Dependencies

<details>
<summary><strong>Windows</strong></summary>

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

1. Node, JDK

    We recommend installing Node via [Chocolatey](https://chocolatey.org/), a popular package manager for Windows.

    It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via [nvm-windows](https://github.com/coreybutler/nvm-windows), a Node version manager for Windows.

    React Native also requires [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/11/), which can be installed using Chocolatey as well.

    Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

    ``` bash
    choco install -y nodejs-lts openjdk11
    ```
    If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, we recommend JDK11. You may encounter problems using higher JDK versions.

    *Note: You can find additional installation options on [Node's Downloads page](https://nodejs.org/en/download/).*

    *Note: If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to `{project root folder}\android\gradle\wrapper\gradle-wrapper.properties` and changing the `distributionUrl` value to upgrade the Gradle version. You can check out [here the latest releases of Gradle](https://gradle.org/releases/).*

2. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - Android SDK
        - Android SDK Platform
        - Android Virtual Device
        - If you are not already using Hyper-V: Performance (Intel ® HAXM) ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

        Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

        *Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the **Android SDK Build-Tools** entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_HOME` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        1. Open the **Windows Control Panel**.
        2. Click on **User Accounts**, then click **User Accounts** again
        3. Click on **Change my environment variables**
        4. Click on **New...** to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK.

        The SDK is installed, by default, at the following location:

        ```
        %LOCALAPPDATA%\Android\Sdk
        ```
        You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

        Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

        1. Open powershell
        2. Copy and paste `Get-ChildItem -Path Env:\` into powershell
        3. Verify `ANDROID_HOME` has been added
    4. Add platform-tools to Path

        1. Open the **Windows Control Panel**.
        2. Click on **User Accounts**, then click **User Accounts** again
        3. Click on **Change my environment variables**
        4. Select the **Path** variable.
        5. Click **Edit**.
        6. Click **New** and add the path to platform-tools to the list.

        The default location for this folder is:

        ```
        %LOCALAPPDATA%\Android\Sdk\platform-tools
        ```

3. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>

<details>
<summary><strong>MacOS</strong></summary>

You will need Xcode, Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build MediShare for Android.

1. Xcode

    You can download Xcode directly from Apple's App Store. 

2. Node & Watchman

    We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

    ``` bash
    brew install node
    brew install watchman
    ```
    
    If you have already installed Node on your system, make sure it is Node 14 or newer.

    [Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

3. Java Development Kit

    We recommend installing the OpenJDK distribution called Azul **Zulu** using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

    ``` bash
    brew tap homebrew/cask-versions
    brew install --cask zulu11
    ```

    The Zulu OpenJDK distribution offers JDKs for **both Intel and M1 Macs**. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

    If you have already installed JDK on your system, we recommend JDK 11. You may encounter problems using higher JDK versions.

4. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - Android SDK
        - Android SDK Platform
        - Android Virtual Device,

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

        *Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image** or (for Apple M1 Silicon) **Google APIs ARM 64 v8a System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_SDK_ROOT` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

        ``` bash
        export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
        ```

        *Note: `.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.*

        Type source `$HOME/.bash_profile` for bash or source `$HOME/.zprofile` to load the config into your current shell. Verify that `ANDROID_SDK_ROOT` has been set by running `echo $ANDROID_SDK_ROOT` and the appropriate directories have been added to your path by running `echo $PATH`.

        *Note: Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

5. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>

<details>
<summary><strong>Linux</strong></summary>

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

1. Node

    Follow the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 14 or newer.

2. Java Development Kit

    React Native currently recommends version 11 of the Java SE Development Kit (JDK). You may encounter problems using higher JDK versions. You may download and install [OpenJDK](http://openjdk.java.net/) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager.

3. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - **Android SDK**
        - **Android SDK Platform**
        - **Android Virtual Device**

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

        Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

        Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_SDK_ROOT` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

        ``` bash
        export ANDROID_SDK_ROOT=$HOME/Library/Android/Sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
        ```

        *Note: `.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.*

        Type `source $HOME/.bash_profile` for `bash` or source `$HOME/.zprofile` to load the config into your current shell. Verify that ANDROID_SDK_ROOT has been set by running `echo $ANDROID_SDK_ROOT` and the appropriate directories have been added to your path by running `echo $PATH`.

        Note: Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

4. Watchman

    Follow the [Watchman installation guide](https://facebook.github.io/watchman/docs/install/#buildinstall) to compile and install Watchman from source.

    *[Watchman](https://facebook.github.io/watchman/docs/install/) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).*

5. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>


## Preparing the Android device

You will need an Android device to run MediShare's Android app. This can be either a physical Android device, or you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

### Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](https://reactnative.dev/docs/running-on-device).

### Using a virtual device

If you use Android Studio to open `bounswe2022group6/Application/Mobile/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **S** API Level 31 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

## Running MediShare App

### Put the .env file inside this folder

MediShare cannot be built without the .env file, which should be inside `bounswe2022group6/Application/Mobile`. .env stores important environment variables.

### Start Metro

First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

To start Metro, run `npx react-native start` inside this folder (`bounswe2022group6/Application/Mobile`):

``` bash
npx react-native start
```

`react-native start` starts Metro Bundler.

*Note: If you use the Yarn package manager, you can use yarn instead of npx when running React Native commands inside an existing project.*

### Start MediShare App

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```bash
npx react-native run-android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

*Note: If you encounter an error due to the .env file after changing the contents of .env, please go to the previous step ([Start Metro](https://github.com/bounswe/bounswe2022group6/tree/master/Application/Mobile#start-metro)) and type*

``` bash
npx react-native start --reset-cache
```

*instead.*

`npx react-native run-android` is one way to run your app - you can also run it directly from within Android Studio.

*Note: If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.*

## That's it!

Congratulations!\
You've successfully built and run MediShare on Android.
