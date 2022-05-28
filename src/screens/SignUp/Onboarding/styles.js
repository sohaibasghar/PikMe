import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  semiBoldText: {
    color: '#5F7783',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 16,
  },
  nameInput: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
  },
  placeHolderStyle: {
    color: '#C9CAD1',
    fontSize: 32,
    lineHeight: 48,
    fontFamily: 'Poppins-SemiBold',
  },

  logoContainer: {flex: 0.15},
  smallText: {
    color: '#5F7783',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#EDEFF6',
    borderRadius: 8,
    marginVertical: 6,
  },
  chipText: {
    color: '#020303',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  interestChip: {
    padding: 12,
    margin: 10,
    backgroundColor: '#EDEFF6',
    borderRadius: 8,
  },
  flexWrapContainer: {flexDirection: 'row', flexWrap: 'wrap'},
});
export default styles;
