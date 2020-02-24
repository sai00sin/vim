set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" 導入したいプラグインを以下に列挙
" Plugin '[Github Author]/[Github repo]' の形式で記入
Plugin 'airblade/vim-gitgutter'
Plugin 'mattn/emmet-vim'

call vundle#end()
filetype plugin indent on

"　その他のカスタム設定を以下に書く

set number
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set smarttab

set clipboard+=unnamed

