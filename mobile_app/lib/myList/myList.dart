import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

import '../constants.dart';
import '../deliveryDetails.dart';
import 'editProfile.dart';
import '../firebase/authentication.dart';
import '../firebase/db.dart';

class MyListPage extends StatefulWidget {
  const MyListPage({super.key});

  @override
  State<MyListPage> createState() => _MyListPageState();
}

class _MyListPageState extends State<MyListPage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        elevation: 0,
        backgroundColor: primaryColor,
        toolbarHeight: 80,
        title: SizedBox(
          height: 80,
          width: double.infinity,
          child: Image.asset(
            'assets/logo.png',
            fit: BoxFit.fitHeight,
          ),
        ),
        actions: [
          IconButton(
              onPressed: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => EditUserInfoPage()));
              },
              icon: Icon(Icons.edit)),
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              AuthenticationHelper().signOut(context);
            },
          ),
        ],
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          StreamBuilder<DocumentSnapshot<Map<String, dynamic>>>(
            stream: getUserData(),
            builder: (context, snapshot) {
              if (snapshot.hasError) {
                return Text('Error: ${snapshot.error}');
              }

              if (snapshot.connectionState == ConnectionState.waiting) {
                return const CircularProgressIndicator();
              }

              // Extract the IDs from userData
              List<String> ids = [];
              Map userInfo = {};
              Map<String, dynamic>? userData = snapshot.data?.data();
              if (userData != null) {
                userData.forEach((key, value) {
                  if (key == 'deliveryList') {
                    value.forEach((id, id_value) {
                      ids.add(id);
                    });
                  } else {
                    userInfo[key] = value;
                  }
                });
              }

              // Show the list of deliveries based on IDs
              return Expanded(
                child: StreamBuilder<QuerySnapshot>(
                  stream: getDeliveries(),
                  builder: (context, snapshot) {
                    if (snapshot.hasError) {
                      return Text('Error: ${snapshot.error}');
                    }

                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const CircularProgressIndicator();
                    }

                    // Filter deliveries based on IDs
                    List<DocumentSnapshot> filteredDeliveries = snapshot
                        .data!.docs
                        .where((delivery) => ids.contains(delivery.id))
                        .toList();

                    // Display the filtered deliveries
                    return Padding(
                      padding: const EdgeInsets.all(16),
                      child: ListView(
                        children: [
                          ListView(
                            shrinkWrap: true,
                            physics: const NeverScrollableScrollPhysics(),
                            children: [
                              Text(
                                'Hello, ${userInfo['name']}!',
                                style: const TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text(
                                'Phone: ${userInfo['phoneNumber']}',
                              ),
                              Text('email: ${userInfo['email']}'),
                              const SizedBox(height: 16),
                              const Text(
                                'Here are your deliveries:',
                                style: TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                          ListView.builder(
                            shrinkWrap: true,
                            physics: const NeverScrollableScrollPhysics(),
                            itemCount: filteredDeliveries.length,
                            itemBuilder: (context, index) {
                              DocumentSnapshot delivery =
                                  filteredDeliveries[index];
                              Map<String, dynamic> deliveryData =
                                  delivery.data() as Map<String, dynamic>;

                              return Card(
                                color: secondaryColor,
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: ListTile(
                                    onTap: () {
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (context) =>
                                              DeliveryDetailsPage(
                                            data: deliveryData,
                                            id: delivery.id,
                                          ),
                                        ),
                                      );
                                    },
                                    title: Text(deliveryData['receiverName']),
                                    subtitle:
                                        Text(deliveryData['receiverAddress']),
                                    trailing:
                                        const Icon(Icons.arrow_forward_ios),
                                    // Add more details if needed
                                  ),
                                ),
                              );
                            },
                          ),
                        ],
                      ),
                    );
                  },
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
