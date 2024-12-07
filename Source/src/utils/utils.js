"use strict";


const quatToEuler =  (quat, inDegrees) => {
	if (!quat || quat.length !== 4) return quat;
	const q0 = quat[0];
	const q1 = quat[1];
	const q2 = quat[2];
	const q3 = quat[3];

	const Rx = Math.atan2(2 * (q0 * q1 + q2 * q3), 1 - (2 * (q1 * q1 + q2 * q2)));
    const sinp = 2 * (q0 * q2 - q3 * q1);
    const Ry = Math.asin(Math.max(-1, Math.min(1, sinp)));
	const Rz = Math.atan2(2 * (q0 * q3 + q1 * q2), 1 - (2  * (q2 * q2 + q3 * q3)));

	const euler = inDegrees ? [Rx, Ry, Rz].map( r => radToDeg(r)) : [Rx, Ry, Rz];

	return(euler);
};

const radToDeg = (angle) => {
	return angle * (180/Math.PI);
};

const eulerToQuat = (euler, inDegrees = true) => {
    if (!euler || euler.length !== 3) return euler;

    let [x, y, z] = euler;

    // Convert to radians if input is in degrees
    if (inDegrees) {
        x = degToRad(x);
        y = degToRad(y);
        z = degToRad(z);
    }

    const c1 = Math.cos(x / 2);
    const s1 = Math.sin(x / 2);
    const c2 = Math.cos(y / 2);
    const s2 = Math.sin(y / 2);
    const c3 = Math.cos(z / 2);
    const s3 = Math.sin(z / 2);

    const q0 = c1 * c2 * c3 + s1 * s2 * s3;
    const q1 = s1 * c2 * c3 - c1 * s2 * s3;
    const q2 = c1 * s2 * c3 + s1 * c2 * s3;
    const q3 = c1 * c2 * s3 - s1 * s2 * c3;

    return [q0, q1, q2, q3];
};

const degToRad = (angle) => {
    return angle * (Math.PI / 180);
};


const truncValue = (val, digits = 4) => {
	if (val === undefined) return;
	if (Array.isArray(val)) {
		return val.map( i => parseFloat(i.toFixed(digits)));
	}
	return val ? parseFloat(val.toFixed(digits)) : val;
};

const formatValue = (val, type, units) => {
  if (Array.isArray(val)) {
    return val.map( i => `${truncValue(i)}`).join(", ");
  }
  return truncValue(val);
};




export {
	quatToEuler,
	eulerToQuat,
	formatValue,
	truncValue,
}