cd vinhmdev
flutter clean
flutter pub get
flutter build web
rm -rfv ../web/
cp -rfv ./build/web ../
cd ..
