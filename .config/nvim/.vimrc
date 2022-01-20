" .vimrc
"   ___
"  /   \ ____    Owen Morrissey
"  \___/ | | |   vim customization
"


"plugins:
"   Need plug-vim installed already
"   run :PlugInstall to install the plugins listed below
"   For information on each plugin, visit https://github.com/<Plugin-string>
call plug#begin('~/.vim/plugged')

Plug 'fatih/molokai'                     "color scheme
Plug 'dracula/vim',{'as':'dracula'}      "color scheme
Plug 'tpope/vim-surround'                "allows for modifying surrounding parens
Plug 'tpope/vim-commentary'              "allows for quick commenting
Plug 'itchyny/lightline.vim'             "cool status bar at the bottom
                                         "[SEE github page for install instructions]
Plug 'octol/vim-cpp-enhanced-highlight'  "better highlighing for C++

call plug#end()

"essentials
    syntax on
    filetype plugin on
    let mapleader=" "
    " set encoding=utf-8
    " set fileencoding=utf-8

"syntax hignlighting and commenting for unfamiliar extensions
    autocmd BufNewFile,BufRead *.smt set syntax=lisp "usmalltalk
    autocmd FileType smith setlocal commentstring=;\ %s
    autocmd FileType scm setlocal commentstring=;\ %s
    autocmd FileType imp setlocal commentstring=;\ %s
    autocmd FileType sml setlocal commentstring=(*\ %s\ *)

"remaps
    " leader f searches for the word under the cursor, starting at the top of the file
    noremap <leader>f ggn/<c-r><c-a><CR>

"windows
    set splitbelow splitright

    " sets movement remaps for navigating windows faster
    map <Leader>h <C-w>h
    map <Leader>l <C-w>l
    map <Leader>k <C-w>k
    map <Leader>j <C-w>j

    " quick way to open splits
    map <Leader>s :sp
    map <Leader>v :vsp

"enable autocomplete in cmd line
    set wildmode=longest,list,full


"disable automatic commenting
    autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o


"searching
    set nohlsearch
    set ignorecase
    set smartcase

"replace all is aliased to S
    nnoremap S :%s//g<Left><Left>

"lines
    set number
    set relativenumber
    set cursorline


"spellcheck set to leader o
    map <Leader>o :setlocal spell! spelllang=en_us<CR>

"tab characters
    set expandtab
    set softtabstop=4
    set shiftwidth=4
    set autoindent
    set smartindent

"allows save prompt in exit
    set confirm


"bottom line
    set noshowmode
    set laststatus=2


"parens
    set showmatch

"colors
    " let g:lightline = {'colorscheme': 'wombat'}
    colorscheme molokai
    " colorscheme dracula
    "let g:molokai_original = 1
