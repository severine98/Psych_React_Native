import React, {useRef} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirstQ, FourthQ, SecondQ, ThirdQ} from '../components/IntroForm';
import {colors, typography, widthPct} from '../styles';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    // Q with slider
    id: 'item2',
    question: 'How are you feeling today?',
    input: <FirstQ />,
  },
  {
    // Q with boolean
    id: 'item3',
    question: 'Did you have much sleep last night?',
    input: <SecondQ />,
  },
  {
    // Q will multiple answer
    id: 'item1',
    question: 'Which of these best describe you?',
    input: <ThirdQ />,
  },
  {
    // Q with input
    id: 'item6',
    question: 'Who is your bestfiend?',
    input: <FourthQ />,
  },
];

const ITEM_WIDTH = windowWidth;
const SEPARATOR_WIDTH = 10;
export const IntroCarouselForm = props => {
  const {style} = props;
  const carouselRef = useRef(null);

  function renderItem({item, index}) {
    const {question, input} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Text style={styles.question}>{question}</Text>
        {input}
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  carousel: {
    width: windowWidth,
    height: ITEM_WIDTH + 100,
  },
  item: {
    backgroundColor: colors.purpleLight,
    borderColor: 'blue',
    borderWidth: 3,
    height: '100%',
    borderRadius: 5,
    // borderColor: '#EAECEE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  question: {
    ...typography.h2,
    fontWeight: 'bold',
    color: colors.purpleDark,
    textAlign: 'center',
    marginTop: widthPct(20),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#585B60',
  },
  buttonStyle: {
    backgroundColor: colors.purpleDark,
    borderRadius: 50,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
