import axios from "axios";

const API_KEY =
  "aQRPyvLMvVAagOtR_ZVbTLq1Yv-jiVpoRGoGWrmnBhQsmyhxX7CvYVxIvIlMqgIldMzMrivI_7j4VCV5RRW7u78ALDhIqPlY6b69am8owj80-I1hJPUq60Rv2bnCY3Yx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
