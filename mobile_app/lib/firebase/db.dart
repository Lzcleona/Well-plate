import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:mobile_app/firebase/authentication.dart';

import '../constants.dart';

Future<void> editUserInfo(data) async {
  String userId = AuthenticationHelper().uid;
  try {
    await FirebaseFirestore.instance
        .collection(volunteerCollection)
        .doc(userId)
        .set(data, SetOptions(merge: true));
  } catch (e) {
    print('Error updating Firestore document: $e');
  }
}

Stream<DocumentSnapshot<Map<String, dynamic>>> getUserData() {
  String userId = AuthenticationHelper().uid;
  return FirebaseFirestore.instance
      .collection(volunteerCollection)
      .doc(userId)
      .snapshots();
}

Stream<QuerySnapshot> getDeliveries() {
  return FirebaseFirestore.instance.collection(collection).snapshots();
}

Future<void> updateFoodDelivery(String userId, String id) async {
  await FirebaseFirestore.instance
      .collection(collection)
      .doc(id)
      .update({'volunteerId': userId});
}

Future<void> addFoodDelivery(String userId, String id) async {
  await FirebaseFirestore.instance
      .collection(volunteerCollection)
      .doc(userId)
      .set({
    'deliveryList': {id: id}
  }, SetOptions(merge: true));
}
