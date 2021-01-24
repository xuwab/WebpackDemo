npm run build &&
git checkout GitHub_Pages &&
rm -rf src &&
rm -rf *.json *.html *.sh *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push
