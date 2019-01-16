# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'smalin.cn' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Smalin0020/blog.git
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Smalin0020/Smalin0020.github.io.git master
# git push -f origin master
#  origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Smalin0020/gh-pages.git master:gh-pages

cd -