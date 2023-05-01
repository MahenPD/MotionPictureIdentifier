import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const data = [
  {
    id: 1,
    image: 'https://en-images.kinorium.com/movie/200/2339563.jpg',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    title: 'Title 2',
    subtitle: 'Subtitle 2',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
    title: 'Title 3',
    subtitle: 'Subtitle 3',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
    title: 'Title 4',
    subtitle: 'Subtitle 4',
  },
];

export default function LibraryScreen() {
  const showSearches = () => {
    console.log('Show Searches');
  };

  const showGenres = () => {
    console.log('Show Genres');
  };

  const ShowPlaylists = () => {
    console.log('Show Playlists');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TouchableOpacity onPress={showSearches}>
          <View style={[styles.row, styles.separator]}>
            {/* <Ionicons name="search" size={30} color="#FFF" /> */}
            <Text>ICON</Text>
            <Text style={styles.subtitle}>Searches</Text>
            <Text style={styles.counts}>250</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={showGenres}>
          <View style={[styles.row, styles.separator]}>
            {/* <AntDesign name="appstore-o" size={30} color="#FFF" /> */}
            <Text>ICON</Text>
            <Text style={styles.subtitle}>Genres</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ShowPlaylists}>
          <View style={[styles.row, styles.separator]}>
            {/* <Ionicons name="person" size={30} color="#FFF" /> */}
            <Text>ICON</Text>
            <Text style={styles.subtitle}>Playlists For You</Text>
            <Text style={styles.counts}>5</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>Recent Searches</Text>

        <View style={styles.cardContainer}>
          {data.map((item, index) => {
            console.log('index', index);
            console.log('item', item);
            if (index % 2 === 0) {
              // Render a row with two cards
              const item2 = data[index + 1];
              return (
                console.log('item2', item2),
                (
                  <View key={item.id} style={styles.cardRow}>
                    <Card item={item} />
                    {item2 && <Card item={item2} />}
                  </View>
                )
              );
            }
            // Skip rendering individual cards that are part of a row
            return null;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

function Card({item}) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{uri: 'https://en-images.kinorium.com/movie/200/2339563.jpg'}}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>PLAY</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111111',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#ffffff',
    marginLeft: 10,
  },
  counts: {
    fontSize: 20,
    color: '#FFC700',
    position: 'absolute',
    right: 0,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    paddingVertical: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  playButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
