npm run build
rm -R ~/eclipse-workspace/site-vente/WebContent/js/* ~/eclipse-workspace/site-vente/WebContent/css/*
echo 'rm fait'
cp -r dist/* ~/eclipse-workspace/site-vente/WebContent/
echo 'cp fait'
