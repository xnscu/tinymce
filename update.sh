#!/bin/bash

project=$PWD
# 设置下载URL和目标文件名
url="https://download.tiny.cloud/tinymce/community/tinymce_7.0.0.zip"
zip_file="tinymce.zip"

cd /tmp
# 下载zip文件
curl -o "$zip_file" "$url"

# 检查下载是否成功
if [ $? -eq 0 ]; then
    echo "Download successful."
else
    echo "Download failed."
    exit 1
fi

# 解压到/tmp文件夹
unzip -o "$zip_file" -d "/tmp"

# 检查解压是否成功
if [ $? -eq 0 ]; then
    echo "Unzip successful."
else
    echo "Unzip failed."
    exit 1
fi

# 拷贝tinymce/js/tinymce到当前文件夹
cp -r /tmp/tinymce/js/tinymce/* $project

# 检查拷贝是否成功
if [ $? -eq 0 ]; then
    echo "Copy successful."
else
    echo "Copy failed."
    exit 1
fi

echo "Operation completed."
