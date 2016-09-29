#### Moving on to Python

 - What should I know before starting?
 - How can I install it?
 - When will we get platform access?

 - Questions?




#### Installation:


###Installation (OSX)
For our Python and Django course, we will be using Python 2.7.  
You might be wondering why we aren't using the "latest" version of Python (3.4.3).  Here's why:
* Many web development libraries only support Python 2.x and have not been ported to 3.x
* Less than 1% of Python users uses Python 3.x, therefore, it has fewer community resources, although where applicable we will try to show 3.x-friendly syntax. 
* Python 3.x is not backward compatible with 2.x - you can always migrate forward to 3.x
* We do not gain or lose much with Django if we use 2.x rather than 3.x

Installing Python

To install python, we will use homebrew which is a package manager that helps us install software on our operating system.

1) Install GCC

First, we need to install GCC. This is a collection of compilers for C, C++, Object-C, and Java. But for now, all we need to know is that we need this in order to get homebrew working on our system.
Before you proceed, run this command in your terminal:
```
gcc -v
```
If the output looks something like below, you can skip to step 2: 
￼
```bash
Configured with: --prefix~/Applications/Xcode.app/Contents/Developer/user --with-gxx-include-dir~/usr/include/c++/4.2.1
Apple LLVM version 6.1.0 (clang-602.0.49) (based on LLVM 3.6.0svn)
Target: x86_64-apple-darwin16.0.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
```

Otherwise, go to this link and follow the directions:  http://www.mkyong.com/mac/how-to-install-gcc-compiler-on-mac-os-x/

You'll need to log in with your Apple ID to do this. If you're already a mac user, you should already have one. Don't worry! It doesn't cost anything. After you've signed in, make sure your computer is updated, and then go ahead and download the most recent version of the **Command Line Tools for Xcode**.

2) Install Homebrew

Now we can go ahead and install homebrew.
Open up your terminal and run this command:
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
The script will explain what changes it will make and prompt you before the installation begins. Once installed, we need to make sure our system know where to look for homebrew so we can easily execute commands without having to write long file paths. We can do this by entering the following:
```
cd ~

nano .bash_profile
```
What the last command did was open up a hidden file called  .bash_profile that allows us to configure our terminal. Now copy and paste the following code at the bottom of your .bash_profile:
```
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
```
Once you've done that, press "cmd + x" (or "ctrl + x" to some machines) to exit. When you are prompted to accept changes made, hit the 'y' key and then press 'enter' key to save your changes. Basically, we just told your computer where to look in order to find the homebrew commands we will be using in the future! You can check to see if this all worked by restarting your terminal and then typing in the following command:
```
brew
```
Your output should look like the following, giving you more info on how to use homebrew:
￼
```
Example usage:
  brew [info | home | options ] [FORMULA...]
  brew install FORMULA...
  brew uninstall FORMULA...
  brew search [foo]
  brew list [FORMULA...]
  brew update
  brew upgrade [FORMULA...]
  brew pin/unpin [FORMULA...]

Troubleshooting:
  brew doctor
  brew install -vd FORMULA
  brew [--env | config]

Brewing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]
  https://github.com/Homebrew/brew/blob/master/share/doc/homebrew/Formula-Cookbook.md

Further help:
  man brew
  brew home
```

3) Install Python

Now that we have homebrew working, we can install python by simply typing:

```python
brew update #this updates homebrew

brew install python #installs python
```

Updating and installation might take a few minutes. If there are any other problems, homebrew helps us out by telling us certain commands we might need to run to properly install things. Read through the outputs and run the recommended commands. Otherwise, we can check the version and then run python in our terminal to see if it is working:

```python
python -V # type this command
Python 2.7.9  # if it outputs something like this, we have the right version. You might see 2.7.10 etc.
python # type this command to start the python shell
```

The python shell looks like the screenshot below:

```
~ git:(master) ✗ python
Python 2.7.11 (v2.7.11:6d1b6a68f775, Dec  5 2015, 12:54:16)
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>


```
￼
Congratulations! You now have an updated, working version of Python 2.7.x on your computer! You can type `exit()` in your Python shell to exit :)







###Installation (Windows)

For our Python and Django course, we will be using Python 2.7.  
You might be wondering why we aren't using the "latest" version of Python (3.4.3).  Here's why:
* Many web development libraries only support Python 2.x and have not been ported to 3.x
* Less than 1% of Python users use Python 3.x, therefore, it has fewer community resources, although where applicable we will try to show 3.x-friendly syntax. 
* Python 3.x is not backward compatible with 2.x - you can always migrate forward to 3.x
* We do not gain or lose much with Django if we use 2.x rather than 3.x

Installing Python

To install python, we will download Python directly from Python's website: 

#####_[https://www.python.org/downloads](https://www.python.org/downloads)_

We will have to set a PATH environment variable. To do this we navigate to our Advanced System Settings of your computer. Go to Control Panel->Advanced System Settings-> Advanced-> Environment Variables:


[image**](windows1.PNG)

￼
At this point, we can click Environment Variables to set up the Python executable for our Command Prompt.

￼
[image**](windows2.PNG)


Here we see that there is already a PATH variable declared with some other file path directories already set up.
(Yours may look different and you may not have a PATH variable declared so click New and add PATH as a variable name)

Finally, assuming you installed Python on your C drive, you will have to add this line to your Variable Value.

C:\Python27;C:\Python27\Scripts;C:\Python27\Lib
￼

We can check the version and then run python in our terminal to see if it is working:
```
python -V # type this command
Python 2.7.9  # if it outputs something like this, we have the right version. You might see 2.7.10 etc.
python # type this command to start the python shell
```
When we start the python shell, it will look like:
￼

Congratulations! You now have an updated, working version of Python 2.7.x on your computer! You can type  exit() in your Python shell to exit :)
