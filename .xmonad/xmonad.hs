import XMonad

import XMonad.Util.EZConfig
import XMonad.Util.Ungrab



myModMask  = mod4Mask
myTerminal = "alacritty"
myFont = "xft:

main :: IO ()
main = xmonad $ def
    { modMask = myModMask
    }
  `additionalKeysP`
    [ ("M-S-z", spawn "xscreensaver-command -lock")
    , ("M-S-=", unGrab *> spawn "scrot -s"        )
    , ("M-]"  , spawn "$BROWSER"                   )
    ]
