import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
export const RestaurantList = ({
      loadRestaurants,
      restaurants,
      loading,
      loadError,
    }) => {
  useEffect (
    () => {
      loadRestaurants ();
    },
    [loadRestaurants]
  );
  return (
    <>
    {loading && <CircularProgress data-testid="loading-indicator" />}
    {loadError && (
        <Alert severity="error">Restaurants could not be loaded.</Alert>
     )}
    <List>
      {restaurants.map (restaurant => (
        <ListItem key={restaurant.id}>
          <ListItemText>{restaurant.name}</ListItemText>
        </ListItem>
      ))}
    </List>
    </>
  );
};
const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
  loadError: state.restaurants.loadError,
});
const mapDispatchToProps = {loadRestaurants};

export default connect (mapStateToProps, mapDispatchToProps) (RestaurantList);
