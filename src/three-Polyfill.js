// // ملف polyfill لإضافة المتغيرات المفقودة من Three.js
// import * as THREE from 'three';

// // إضافة المتغيرات المفقودة
// if (!THREE.SRGBColorSpace) {
//   THREE.SRGBColorSpace = 'srgb';
// }

// if (!THREE.LinearSRGBColorSpace) {
//   THREE.LinearSRGBColorSpace = 'srgb-linear';
// }

// // إضافة BatchedMesh كـ empty class
// if (!THREE.BatchedMesh) {
//   THREE.BatchedMesh = class BatchedMesh extends THREE.Mesh {
//     constructor() {
//       super();
//       console.warn('BatchedMesh polyfill used - limited functionality');
//     }
//   };
// }

// // تصدير THREE المحدث
// export * from 'three';
// export { THREE as default };
// export {
//   THREE.SRGBColorSpace as SRGBColorSpace,
//   THREE.LinearSRGBColorSpace as LinearSRGBColorSpace,
//   THREE.BatchedMesh as BatchedMesh
// };