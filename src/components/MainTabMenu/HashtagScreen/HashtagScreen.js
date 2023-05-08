import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Swiper from "react-native-swiper";
import Fontisto from 'react-native-vector-icons/Fontisto'





const data = [
  { label: 'Food Restaurant', value: '1', },
  { label: 'Shoes', value: '2' },
  { label: 'Garment Store', value: '3' },
  { label: 'Cafe', value: '4' },
  { label: 'Home Chef', value: '5' },
  { label: 'Real State', value: '6' },
  { label: 'Marketing Agency', value: '7' },
  { label: 'Accessories', value: '8' },
];



const HashtagScreen = () => {
  const [defaultRating, setDefaultRating] = useState();
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  const [hashtag, setHashtag] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dispHashtag, setdispHashtag] = useState(false);


  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };


  const HashtagSets = () => {
    const db = getDatabase();
    set(ref(db, 'Hashtags/' + 'BussinessHL1'),
      {
        Accessories: '#accessories #fashion #handmade #jewelry #style #earrings #love #jewellery #necklace #onlineshopping #shopping #design #fashionista #bracelet #handmadejewelry #instagood #ootd #gold #smallbusiness #bags #silver #beautiful #bracelets #fashionstyle #fashionblogger #shoes #trendy #beauty #instafashion #like',
        MarketingAgency: '#marketingagency #marketing #digitalmarketing #marketingstrategy #socialmediamarketing #marketingtips #marketingdigital #branding #socialmedia #contentmarketing #advertising #digitalmarketingagency #onlinemarketing #business #seo #marketingonline #graphicdesign #smallbusiness #digitalagency #marketingconsultant #entrepreneur #webdesign #advertisingagency #design #marketingplan #digital #marketingideas #digitalmarketingtips #creativeagency #emailmarketing',
        RealState: '#realstate #inmobiliaria #bienesraices #realtor #inmuebles #venta #casa #inversion #propiedades #home #alquiler #casas #realestate #asesorinmobiliario #hogar #agenteinmobiliario #realstateagent #arquitectura #design #apartamento #compra #apartamentos #inmobiliarias #ventas #n #vivienda #architecture #o #luxury #house',
        HomeChef: '#homechef #homecooking #foodie #foodporn #homemade #food #foodphotography #instafood #foodstagram #foodblogger #cooking #homecook #yummy #homecooked #foodlover #delicious #homemadefood #foodiesofinstagram #healthyfood #indianfood #foodgasm #dinner #tasty #chef #foodpics #cookingathome #foodies #instagood #cheflife #comfortfood',
        Cafe: '#cafe #coffee #caf #food #coffeetime #coffeelover #coffeeshop #restaurant #foodie #love #espresso #barista #foodporn #coffeeaddict #instagood #coffeelovers #breakfast #bar #instafood #latte #o #a #chocolate #instacoffee #cafeteria #photography #lunch #coffeeholic #coffeegram #yummy',
        Garments: '#garment #konveksi #fashion #clothing #distro #textile #style #bordir #kain #konfeksi #fabric #ootd #garments #printing #hijab #like #rayon #design #woven #jualkain #rayonviscose #tshirt #fashiondesigner #katunrayonimport #clothes #sablon #butikmuslimah #apparel #kemeja #konveksimurah',
        Shoes: '#shoes #fashion #style #sneakers #love #shopping #nike #moda #shoesaddict #instagood #heels #like #jordan #ootd #outfit #onlineshopping #dress #follow #bags #fashionblogger #instagram #adidas #model #fashionstyle #instafashion #stylish #clothes #fashionista #photooftheday #sneakerhead',
        Food: '#food #foodporn #foodie #instafood #foodphotography #foodstagram #yummy #foodblogger #foodlover #instagood #love #delicious #follow #like #healthyfood #homemade #dinner #foodgasm #tasty #photooftheday #foodies #restaurant #cooking #lunch #picoftheday #bhfyp #foodpics #instagram #healthy #chef',
      }).then(() => {
        alert("Your account has been registered.");
      })

    set(ref(db, 'Hashtags/' + 'BussinessHL2'),
      {
        Accessories: '#accessories2 #fashion #handmade #jewelry #style #earrings #love #jewellery #necklace #onlineshopping #shopping #design #fashionista #bracelet #handmadejewelry #instagood #ootd #gold #smallbusiness #bags #silver #beautiful #bracelets #fashionstyle #fashionblogger #shoes #trendy #beauty #instafashion #like',
        MarketingAgency: '#marketingagency2 #marketing #digitalmarketing #marketingstrategy #socialmediamarketing #marketingtips #marketingdigital #branding #socialmedia #contentmarketing #advertising #digitalmarketingagency #onlinemarketing #business #seo #marketingonline #graphicdesign #smallbusiness #digitalagency #marketingconsultant #entrepreneur #webdesign #advertisingagency #design #marketingplan #digital #marketingideas #digitalmarketingtips #creativeagency #emailmarketing',
        RealState: '#realstate2 #inmobiliaria #bienesraices #realtor #inmuebles #venta #casa #inversion #propiedades #home #alquiler #casas #realestate #asesorinmobiliario #hogar #agenteinmobiliario #realstateagent #arquitectura #design #apartamento #compra #apartamentos #inmobiliarias #ventas #n #vivienda #architecture #o #luxury #house',
        HomeChef: '#homechef2 #homecooking #foodie #foodporn #homemade #food #foodphotography #instafood #foodstagram #foodblogger #cooking #homecook #yummy #homecooked #foodlover #delicious #homemadefood #foodiesofinstagram #healthyfood #indianfood #foodgasm #dinner #tasty #chef #foodpics #cookingathome #foodies #instagood #cheflife #comfortfood',
        Cafe: '#cafe2 #coffee #caf #food #coffeetime #coffeelover #coffeeshop #restaurant #foodie #love #espresso #barista #foodporn #coffeeaddict #instagood #coffeelovers #breakfast #bar #instafood #latte #o #a #chocolate #instacoffee #cafeteria #photography #lunch #coffeeholic #coffeegram #yummy',
        Garments: '#garment2 #konveksi #fashion #clothing #distro #textile #style #bordir #kain #konfeksi #fabric #ootd #garments #printing #hijab #like #rayon #design #woven #jualkain #rayonviscose #tshirt #fashiondesigner #katunrayonimport #clothes #sablon #butikmuslimah #apparel #kemeja #konveksimurah',
        Shoes: '#shoes2 #fashion #style #sneakers #love #shopping #nike #moda #shoesaddict #instagood #heels #like #jordan #ootd #outfit #onlineshopping #dress #follow #bags #fashionblogger #instagram #adidas #model #fashionstyle #instafashion #stylish #clothes #fashionista #photooftheday #sneakerhead',
        Food: '#food2s #foodporn #foodie #instafood #foodphotography #foodstagram #yummy #foodblogger #foodlover #instagood #love #delicious #follow #like #healthyfood #homemade #dinner #foodgasm #tasty #photooftheday #foodies #restaurant #cooking #lunch #picoftheday #bhfyp #foodpics #instagram #healthy #chef',
      }).then(() => {
        alert("Your account has been registered.");
      })
  }
  const showHashtag = () => {
    
    const db = getDatabase();
    if (value == 1 ) {
      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Food)
        console.log(data.Food)
        

      })
    
    } 
    
    if (value == 1 && defaultRating == 1 ) {
      console.log("KOI BHI STATEMENT YE LO")
      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL2');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Food)
        console.log(data.Food)
        

      })
    
    }
    if (value == 1 && defaultRating == 2 ) {
      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Cafe)
        console.log(data.Cafe)
        

      })
    
    } 

   
    if (value == 2) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Shoes)
      })

    }
    if (value == 3) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Garments)
      })

    }
    if (value == 4) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Cafe)
      })

    }
    if (value == 5) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.HomeChef)
      })

    }
    if (value == 6) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.RealState)
      })

    }
    if (value == 7) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.MarketingAgency)
      })

    }
    if (value == 8) {

      const starCountRef = ref(db, 'Hashtags/' + 'BussinessHL1/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setdispHashtag(data.Accessories)
      })

    }

  }




  return (

    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Swiper autoplay height={250} horizontal={false} activeDotColor="#9D00C8">
          <View style={styles.slide}>
            <Image source={require('../../HomeScreen/banner1.png')}
              resizeMode="stretch"
              style={styles.sliderImage} />
          </View>



        </Swiper>
      </View>
      <View style={styles.categoryBtn2}>
        <View style={styles.catetogryIcon2}>
          <Text style={{ marginLeft: 70, fontSize: 30, fontStyle: 'italic', fontWeight: '900', color: '#fee500' }}>   HASHTAG FINDER </Text>
        </View></View>

      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15, marginTop: 40 }}>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#9d00c8' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          iconColor= '#9d00c8'
          activeColor='#bbbb'
          showsVerticalScrollIndicator
          containerStyle={styles.DropdownContainer}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Business' : 'Select your business'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            setHashtag(item.label);
          }}
          renderLeftIcon={() => (
            <Fontisto
              style={styles.icon}
              color={isFocus ? '#9d00c8' : 'black'}
              name="hashtag"
              size={15}
            />
          )}
        />

      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.input}
          value={dispHashtag}
          onChangeText={text => this.setState({ value: text })}
          multiline={true}
          numberOfLines={40}

          editable={false} selectTextOnFocus={false}
        />
      </View>

      <View style={styles.styleLoginBtn}>
        <Button
          color="#9d00c8" //button color
          onPress={(showHashtag)}
          title="Find Now"
        />
      </View>
      <SafeAreaView style={styles.containerStar}>
        <View style={styles.container}>
          <CustomRatingBar />
          <Text style={styles.textStyle}>
            {/*To show the rating selected*/}
            {defaultRating} / {Math.max.apply(null, maxRating)}
          </Text>
         
        </View>
      </SafeAreaView>
      



    </View>





  );
};

export default HashtagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#533483',
    paddingRight: 16,
    paddingLeft: 16,
    color: '#000'

  },
  DropdownContainer: {
    backgroundColor: '#bbb'
  },

  slideContainer: {
    height: 230,
    width: '115%',
    marginTop: -10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryBtn2: {

    width: '30%',
    marginHorizontal: 0,
    marginLeft: -45,
    marginTop: 10,
    marginBottom: 0,
  },
  catetogryIcon2: {
    borderWidth: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 500,
    height: 50,
    backgroundColor: '#3f0463',
    borderRadius: 10,
    borderColor: '#fee500'

  },
  styleLoginBtn: {
    marginTop: -5,
    marginLeft: 200,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
  inputView: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    width: '100%',
    height: '40%',

    borderColor: '#db54ff',
    borderWidth: 0,
    borderRadius: 0,
    borderBottomColor: '#9d00c8',
    borderBottomWidth: 1,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 10,
    marginVertical: -15,

  },
  
  input: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  dropdown: {
    height: 50,
    borderColor: '#9d00c8',
    color: '#000',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    paddingTop: 90,
    position: 'absolute',
    backgroundColor: '#9d00c8',
    left: 22,
    color: 'red',
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,

  },
  placeholderStyle: {
    fontSize: 16,
    color: '#ccc'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
    
  },
  containerStar: {
    flex: 1,
    
   
    padding: 0,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStyle: {
    alignItems: 'flex-start',
  
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10
  },
  
  buttonTextStyle: {
    
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'flex-start',
    marginRight: 10,
    flexDirection: 'row',
    marginTop: 0,
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
});