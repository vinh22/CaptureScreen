cd vinhmdev
flutter clean
flutter pub get
flutter build web
cp -rfv ./build/web ../
cd ..
