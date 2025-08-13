import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/vehicles.tsx"),
  route(":vehicleId", "routes/vehicle.tsx"),
] satisfies RouteConfig;