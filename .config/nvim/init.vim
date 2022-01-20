"     ___                     _       _       _ _         _
"    / _ \__      _____ _ __ ( )___  (_)_ __ (_) |___   _(_)_ __ ___
"   | | | \ \ /\ / / _ \ '_ \|// __| | | '_ \| | __\ \ / / | '_ ` _ \
"   | |_| |\ V  V /  __/ | | | \__ \ | | | | | | |_ \ V /| | | | | | |
"    \___/  \_/\_/ \___|_| |_| |___/ |_|_| |_|_|\__(_)_/ |_|_| |_| |_|

"  =========================== PLUGIN MANAGER ==============================
" This installs plug vim if not installed already
if ! filereadable(system('echo -n "${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/plug.vim"'))
	echo "Downloading junegunn/vim-plug to manage plugins..."
	silent !mkdir -p ${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/
	silent !curl "https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim" > ${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/plug.vim
	autocmd VimEnter * PlugInstall
endif

call plug#begin(system('echo -n "${XDG_CONFIG_HOME:-$HOME/.config}/nvim/plugged"'))

" General
Plug 'tpope/vim-surround'
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'

" navigation
Plug 'preservim/nerdtree'
Plug 'tommcdo/vim-exchange'
Plug 'justinmk/vim-sneak'
Plug 'ThePrimeagen/vim-be-good'
Plug 'vim-scripts/restore_view.vim'

" Languages
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'jalvesaq/Nvim-R', {'branch': 'stable'}
Plug 'tpope/vim-markdown'

" color and syntax highlighing
Plug 'ap/vim-css-color'
Plug 'octol/vim-cpp-enhanced-highlight'  "better highlighing for C++
Plug 'dylanaraps/wal'  " for use with pywal
Plug 'numirias/semshi', {'do': ':UpdateRemotePlugins'} "highlighing for python

" for writing prose
Plug 'junegunn/goyo.vim'
Plug 'preservim/vim-litecorrect'
Plug 'preservim/vim-pencil'

" notes
Plug 'vimwiki/vimwiki'
Plug 'stevearc/gkeep.nvim', { 'do': ':UpdateRemotePlugins' }

call plug#end()

" =========================================================================

" the essentials
    let mapleader = " "
    set go=a
    set mouse=a
    set clipboard+=unnamedplus
    " colorscheme wal

" status bar
    set showmode
    set ruler
    set laststatus=2
    set showcmd
    set title

" Some basics:
    filetype plugin indent on
    " syntax on
    set encoding=utf-8
    set number relativenumber


" Fold settings
    set viewoptions=cursor,folds,slash,unix

    augroup filetype_fold
        autocmd BufRead,BufNewFile *.py setlocal foldmethod=indent
    augroup END


" Enable autocompletion:
    set wildmode=longest,list,full

" Disables automatic commenting on newline:
    autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o

" Perform dot commands over visual blocks:
    vnoremap . :normal .<CR>


" make Y behave like D and C
nnoremap Y y$

" keep cursor centered
nnoremap n nzzzv
nnoremap N Nzzzv
nnoremap <c-d> <c-d>zz
nnoremap <c-u> <c-u>zz

" delete selection to the void and paste what is
" in default unnamedplus register
xnoremap <leader>p "_dP

" delete to the void instead of unnamedplus
nnoremap <leader>d "_d
vnoremap <leader>d "_d

" undo break points
inoremap , ,<c-g>u
inoremap . .<c-g>u
inoremap ! !<c-g>u
inoremap ? ?<c-g>u

" make command line mode harder to enter
noremap q: :



" Splits open at the bottom and right, unlike vim defaults.
set splitbelow splitright

" Calculator -- Evaluate expression between start of line and "="
nnoremap Q ^yt=f=a <C-r>=<C-r>"<CR><Esc>



" Nerd tree
noremap <leader>n :NERDTreeToggle<CR>
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
if has('nvim')
    let NERDTreeBookmarksFile = stdpath('data') . '/NERDTreeBookmarks'
else
    let NERDTreeBookmarksFile = '~/.vim' . '/NERDTreeBookmarks'
endif

" syntax hignlighting and commenting for unfamiliar extensions
autocmd BufNewFile,BufRead *.smt set syntax=lisp "usmalltalk
autocmd FileType smith setlocal commentstring=;\ %s
autocmd FileType scm setlocal commentstring=;\ %s
autocmd FileType imp setlocal commentstring=;\ %s
autocmd FileType sml setlocal commentstring=(*\ %s\ *)



" python syntax error detection is already done by coc
augroup semshi
    let g:semshi#error_sign = v:false
augroup END



" =============================
" split navigation + resizing
" =============================

noremap <leader>h <C-w>h
noremap <leader>j <C-w>j
noremap <leader>k <C-w>k
noremap <leader>l <C-w>l

noremap <C-h> <C-w><
noremap <C-l> <C-w>>
noremap <C-j> <C-w>-
noremap <C-k> <C-w>+
noremap <C-=> <C-w>=

" searching
set nohlsearch
set ignorecase
set smartcase


"tab characters
set softtabstop=4
set shiftwidth=4
set expandtab
set autoindent

"allows save prompt in exit
set confirm





" =============================
" coc autocomplete
" =============================
" use <tab> for trigger completion and navigate to the next complete item
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~ '\s'
endfunction

inoremap <silent><expr> <Tab>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<Tab>" :
      \ coc#refresh()



"=====================================
" Writing Prose
"=====================================

" Spell-check toggle
noremap <leader>o :setlocal spell! spelllang=en_us<CR>

" Goyo toggle
noremap <leader>g :Goyo<CR>



augroup vimwriting
    function s:prose()
        call litecorrect#init()
        call pencil#init({'wrap': 'soft'})
        CocDisable
        " c-s fixes spelling errors, c-a adds them to autocorrect. Currently only works w/ 1 to 1 replacements.
        nnoremap <buffer> <c-s> "byiW1z="gyiW
        nnoremap <buffer> <c-a> :call litecorrect#add('<c-r>b', '<c-r>g')<CR>
        inoremap <buffer> <c-s> <c-g>u<Esc>[s1z=`]A<c-g>u

        " replace common punctuation
        iabbrev <buffer> -- —
    endfunction
    autocmd BufRead,BufNewFile *.md,*.wiki call <SID>prose()
augroup END


let s:in_goyo = 0
function! s:goyo_enter()
    let s:in_goyo = 1
    let b:quitting = 0
    set noshowmode
    set noshowcmd
    set noruler
    let b:quitting_bang = 0
    autocmd QuitPre <buffer> let b:quitting = 1
    cabbrev <buffer> q! let b:quitting_bang = 1 <bar> q!
endfunction

function! s:goyo_leave()
" Quit Vim if this is the only remaining buffer
    set showmode
    set showcmd
    set ruler
    let s:in_goyo = 0
    if b:quitting && len(filter(range(1, bufnr('$')), 'buflisted(v:val)')) == 1
        if b:quitting_bang
            qa!
        else
            qa
        endif
    endif
endfunction

autocmd! User GoyoEnter call <SID>goyo_enter()
autocmd! User GoyoLeave call <SID>goyo_leave()

" Function for toggling the bottom statusbar:

function! s:force_goyo()
    Goyo 80
endfunction

" Auto enter goyo when opening markdown or wiki files
autocmd BufRead,BufNewFile *.md,*.wiki call <SID>force_goyo()



"=====================================
" R shortcuts
"=====================================

vmap  <Plug>RDSendSelection
nmap  <Plug>RDSendLine
nmap <leader>r <Plug>RStart
nmap <leader>t <Plug>RClose

let R_assign = 2



"=====================================
" Quick shortcuts
"=====================================
" Replace all.
noremap <leader>f :%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>
" Compile program, python, c etc.
noremap <leader>c :write! \| !compiler "<c-r>%"<CR>

" Background compiler for LaTex
autocmd BufRead,BufNewFile *.md,*.tex noremap <leader>c :write! \| silent !compiler "<c-r>%" &<CR>

" Open corresponding .pdf/.html or preview
" noremap <leader>p :!opout <c-r>%<CR><CR>

" Runs a script that cleans out tex build files whenever I close out of a .tex file.
autocmd VimLeave *.tex !texclear %


" Save file as sudo on files that require root permission
cnoremap w!! execute 'silent! write !sudo tee % >/dev/null' <bar> edit!


" Automatically deletes all trailing whitespace and newlines at end of file on save.
autocmd BufWritePre * %s/\s\+$//e
autocmd BufWritePre * %s/\n\+\%$//e
autocmd BufWritePre *.[ch] %s/\%$/\r/e

" When shortcut files are updated, renew bash and ranger configs with new material:
autocmd BufWritePost bm-files,bm-dirs !shortcuts
" Run xrdb whenever Xdefaults or Xresources are updated.
autocmd BufRead,BufNewFile xresources,xdefaults set filetype=xdefaults
autocmd BufWritePost Xresources,Xdefaults,xresources,xdefaults !xrdb %

autocmd BufWritePost ~/.local/src/dwmblocks/config.h !cd ~/.local/src/dwmblocks/; sudo make install && { killall -q dwmblocks;setsid dwmblocks & }

" Turns off highlighting on the bits of code that are changed,
" so the line that is changed is highlighted but the actual text
" that has changed stands out on the line and is readable.
" if &diff
"     highlight! link DiffText MatchParen
" endif


augroup highlight_yank
    autocmd!
    autocmd TextYankPost * silent! lua require'vim.highlight'.on_yank({timeout = 40})
augroup END
