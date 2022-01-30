import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("./assets/profile.jpg")} style={styles.image}/>
        <Text style={{color: "#fff", fontSize: 30, marginVertical: 20}}>Profile</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.profile}>Name</Text>
          <Text style={styles.profile}>John Cobbold</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profile}>Email</Text>
          <Text style={styles.profile}>johnCob@yahoo.com</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profile}>Gender</Text>
          <Text style={styles.profile}>Male</Text>
        </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#566764",
    justifyContent: "center",
    alignItems: "center"    

  },

  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },

  profileContainer : {
    flexDirection: "row",
  },

  profile: {
    color: "#fff",
    fontSize: 20,
    borderWidth: 1,
    flex: 1,
    borderColor: "rgb(65, 65, 65)"
  }

 
});
