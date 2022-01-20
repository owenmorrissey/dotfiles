#
# ~/.bash_profile
#

if [[ -f ~/.profile ]]; then
	. ~/.profile
fi

[[ -f ~/.bashrc ]] && . ~/.bashrc
source "/home/owen/.local/share/cargo/env"
