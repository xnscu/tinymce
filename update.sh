#!/bin/bash

project=$PWD
# 设置下载URL和目标文件名
zip_file="tinymce.tgz"
cp package.json package.json.bak

cd /tmp
# 下载zip文件
npm pack tinymce
mv tinymce-*.tgz $zip_file


# 检查下载是否成功
if [ $? -eq 0 ]; then
    echo "Download successful."
else
    echo "Download failed."
    exit 1
fi

# 解压到/tmp文件夹
# unzip -o "$zip_file" -d "/tmp"
tar -xzvf $zip_file

# 检查解压是否成功
if [ $? -eq 0 ]; then
    echo "Unzip successful."
else
    echo "Unzip failed."
    exit 1
fi

# 拷贝tinymce/js/tinymce到当前文件夹
cp -r /tmp/package/* $project

# 检查拷贝是否成功
if [ $? -eq 0 ]; then
    echo "Copy successful."
else
    echo "Copy failed."
    exit 1
fi
cd $project
mv package.json.bak package.json
echo "Operation completed."
